<script>
	// let name = 'svelte.e.k';
	// let src = 'images/img1.jpg';

	// let string = `this string contains some <strong>HTML!!!</strong>`;
	
	import Menu from './blocks/desktop/menu.svelte';
	import Page from './blocks/desktop/page.svelte';
	import StartHero from './blocks/desktop/start-hero.svelte';
	import StartContent from './blocks/desktop/start-content.svelte';
	import StartFooter from './blocks/desktop/start-footer.svelte';


	

	
</script>

<div class="all">

	Десктоп

	<Menu/>

	<Page>
		<StartHero/>
		<StartContent/>
		<StartFooter/>
	</Page>


</div>



<style>
	.all {
		min-width: 100%;
		min-height: 100%;
		position: relative;
		/* display:grid; */
		/* grid-template-columns: 30vw 70vw;
		justify-content: stretch; 
		align-content: stretch;
		justify-items: stretch;
		align-items: stretch; */
		/* justify-content: center;
		place-items: center center; */
	}
</style>









