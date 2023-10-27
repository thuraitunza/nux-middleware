<template>
    <form @submit.prevent="handleRegister">
        <label>
            Name
            <input type="text" v-model="form.name">
        </label>
        <label>
            Email
            <input type="email" v-model="form.email">
        </label>
        <label>
            Password
            <input type="password" v-model="form.password">
        </label>
        <label>
            Password Confirmation
            <input type="password" v-model="form.password_confirmation">
        </label>

        <button>Register</button>
    </form>
</template>

<script lang="ts" setup>
import {definePageMeta} from "#imports";

definePageMeta({
    middleware: ['guest']
})

const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

// Pinia State Management
const auth = useAuthStore();

async function handleRegister() {
    const {error} = await auth.register(form.value)

    if(!error.value) {
        navigateTo("/")
    }
}
</script>

<style scoped>

</style>