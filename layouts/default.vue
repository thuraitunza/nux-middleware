<template>
    <div>
        <button v-if="auth.isLoggedIn" @click="handleLogout">Logout</button>
        <pre>{{ auth.user }}</pre>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/register">Register</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/login">Login</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/auth-only">Auth Only</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/guest-only">Guest Only</NuxtLink>
            </li>
        </ul>
        <slot />
    </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore";
const auth = useAuthStore()

async function handleLogout() {
    await auth.logout();
}

</script>

<style lang="scss" scoped>

</style>