import { defineStore } from 'pinia';
import { ref } from 'vue';

type User = {
   id: number;
   name: string;
   email: string; 
};

type Credentials = {
    email: string;
    password: string;
};

type RegistrationInfo = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);

    const isLoggedIn = computed(() => !!user.value);

    async function logout() {
        await useApiFetch("/logout", {method: 'POST'});
        user.value = null;
        navigateTo("/login")
    }

    async function fetchUser() {
        const { data, error } = await useApiFetch("/api/user");
        console.log(error);
        user.value = data.value as User;
    }

    async function login(credentials: Credentials) {
        await useApiFetch("/sanctum/csrf-cookie");
    
        const loginResponse = await useApiFetch("/login", {
            method: "POST",
            body: credentials,
        });
        
        await fetchUser();
       
        return loginResponse;
    }

    async function register(info: RegistrationInfo) {
        await useApiFetch("/sanctum/csrf-cookie");
    
        const registerResponse = await useApiFetch("/register", {
            method: "POST",
            body: info,
        });
        
        await fetchUser();
       
        return registerResponse;
    }

    return { user, login, isLoggedIn, fetchUser, logout, register };
});
