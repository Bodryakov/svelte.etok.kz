import App from './App.svelte';

import Appm from './Appm.svelte';


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// код для мобильных устройств
	console.log('код для мобильных устройств');

	const app = new Appm({
		target: document.body
	});

} else {
	// код для обычных устройств
	console.log('код для обычных устройств');

	const app = new App({
		target: document.body
	});
}

export default app;



