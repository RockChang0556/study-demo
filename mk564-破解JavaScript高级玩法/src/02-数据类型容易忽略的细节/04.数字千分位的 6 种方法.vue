<template>
	<div class="defaults">
		<div style="text-align: center">
			<p><input type="number" value="5000" id="textCount" /></p>
			<p>
				<input type="button" @click="executeTest" value="测试" />
				<input type="button" @click="messageEl = ''" value="清除" />
			</p>
		</div>
		<div
			id="messageEl"
			style="width: 300px; margin: auto"
			v-html="messageEl"
		></div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

function format_with_array(number) {
	var arr = (number + '').split('.');
	var int = arr[0].split('');
	var fraction = arr[1] || '';
	var r = '';
	var len = int.length;
	int.reverse().forEach(function (v, i) {
		if (i !== 0 && i % 3 === 0) {
			r = v + ',' + r;
		} else {
			r = v + r;
		}
	});
	return r + (!!fraction ? '.' + fraction : '');
}

function format_with_substring(number) {
	var arr = (number + '').split('.');
	var int = arr[0] + '';
	var fraction = arr[1] || '';
	var f = int.length % 3;
	var r = int.substring(0, f);

	for (var i = 0; i < Math.floor(int.length / 3); i++) {
		r += ',' + int.substring(f + i * 3, f + (i + 1) * 3);
	}

	if (f === 0) {
		r = r.substring(1);
	}
	return r + (!!fraction ? '.' + fraction : '');
}

function format_with_mod(number) {
	var n = number;
	var r = '';
	var temp;
	var mod;
	do {
		mod = n % 1000;
		n = n / 1000;
		temp = ~~mod;
		r = (n > 1 ? `${temp}`.padStart(3, '0') : temp) + (!!r ? ',' + r : '');
	} while (n > 1);

	var strNumber = number + '';
	var index = strNumber.indexOf('.');
	if (index > 0) {
		r += strNumber.substring(index);
	}
	return r;
}

function format_with_regex(number) {
	var reg = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
	// var reg = /(\d)(?=(?:\d{3})+$)/g
	//var reg = /\d{1,3}(?=(\d{3})+$)/g;
	return (number + '').replace(reg, '$1,');
}

function format_with_toLocaleString(number) {
	return number.toLocaleString('en-us');
}

const format = new Intl.NumberFormat('en-us');
function format_with_Intl(number) {
	return format.format(number);
}

/* 以下为性能测试所需方法 */
const messageEl = ref('');
function getData(count) {
	var data = new Array(count).fill(0).map(function (i) {
		var rd = Math.random();
		var r = rd * Math.pow(10, Math.trunc(Math.random() * 12));
		if (rd > 0.5) {
			r = ~~r;
		}
		return r;
	});
	return data;
}

function test(data, fn, label) {
	var start = performance.now();
	for (var i = 0; i < data.length; i++) {
		fn(data[i]);
	}
	var time = performance.now() - start;

	message((fn.name || label) + ':' + time.toFixed(2) + 'ms');
}

function executeTest() {
	var data = getData(+textCount.value);
	test(data, format_with_array);
	test(data, format_with_mod);
	test(data, format_with_substring);
	test(data, format_with_regex);
	test(data, format_with_toLocaleString);
	test(data, format_with_Intl);
	message('-------------------');
}

function message(msg) {
	messageEl.value = messageEl.value + `<p>${msg}</p>`;
	// var el = document.createElement('p');
	// el.innerHTML = msg;
	// messageEl.appendChild(el);
}
</script>

<style lang="less"></style>
