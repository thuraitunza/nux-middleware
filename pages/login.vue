<template>
    <form @submit.prevent="handleLogin">
        <label>
            Email
            <input type="email" v-model="form.email">
        </label>
        <label>
            Password
            <input type="password" v-model="form.password">
        </label>

        <button>Login</button>
    </form>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
    middleware: ['guest']
})

const form = ref({
    email: "admin@example.com",
    password: "password",
});

// Pinia State Management
const auth = useAuthStore();

async function handleLogin() {
    const {error} = await auth.login(form.value)

    console.log(error);
}
</script>

<style scoped>

</style>