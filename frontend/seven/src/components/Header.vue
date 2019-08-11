<template>
    <div>
        <router-link to="/home">HOME</router-link>
        <span class="mainName">PROJECT</span>
        <router-link to="/portfolio">PORTFOLIO</router-link>
        <router-link to="/post">POST</router-link>
    </div>
</template>

<script>
export default {
    name : 'Header',
    data() {
        return {

        }
    }
}
</script>

<style>
</style>