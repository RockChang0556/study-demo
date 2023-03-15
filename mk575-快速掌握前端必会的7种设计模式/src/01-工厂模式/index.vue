<template>
	<div class="defaults">
		<p>hhh</p>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { $ } from './jQuery';
onMounted(() => {
	console.log('[  ]', $('p'));
});
</script>

<style lang="less"></style>
