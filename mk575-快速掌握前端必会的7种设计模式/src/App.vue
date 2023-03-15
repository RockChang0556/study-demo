<template>
	<div>
		<a href="https://vitejs.dev" target="_blank"> vite </a>
		<Factory />
	</div>
</template>

<script setup lang="ts">
import './01-工厂模式/demo';
import Factory from './01-工厂模式/index.vue';
</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
