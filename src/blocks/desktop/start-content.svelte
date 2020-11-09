<script>
	let name = 'svelte.e.k';
	let src = 'images/img1.jpg';

	let string = `this string contains some <strong>HTML!!!</strong>`;

	
</script>



<style>
  .start-content {
    outline: 5px dotted violet;
    position: relative;
    min-width: 100%;
    min-height: 100vh;
    display: grid;
    /* place-content: start center; */
    place-items: start center;
  }

  p {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
  
</style>



<div class="start-content">

  <h1>Content</h1>

  <!-- <p>This is a paragraph. {@html string}</p>

  <img {src} alt="dances."> -->



  <div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
  
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  


    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
  
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
  
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sit quo, praesentium explicabo provident quia nesciunt, sed odit distinctio temporibus expedita eos incidunt et, blanditiis laboriosam maxime a iste ex.</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, suscipit. Enim corrupti praesentium animi esse, fugit amet qui totam cum deleniti veritatis officiis illo blanditiis optio quidem sint quas beatae.</p>
  
  </div> 


</div>

