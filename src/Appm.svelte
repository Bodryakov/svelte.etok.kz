<script>
	// let name = 'svelte.e.k';
	// let src = 'images/img1.jpg';

	// let string = `this string contains some <strong>HTML!!!</strong>`;
	
	import Menu from './blocks/mobile/m-menu.svelte';
	// import Page from './blocks/mobile/m-page.svelte';
	import StartHero from './blocks/mobile/m-start-hero.svelte';
	import StartContent from './blocks/mobile/m-start-content.svelte';
	import StartFooter from './blocks/mobile/m-start-footer.svelte';

</script>

<div id="adress">
	Мобайл
</div>
	



	<StartHero/>
	<StartContent/>
	<StartFooter/>

	<Menu/>







<style>
	#adress {
		display: none;
		min-width: 100%;
		height: 50px;
	}
</style>









