<script>
	let name = 'svelte.e.k';
	let string = `this string contains some <strong>HTML!!!</strong>`;

	
</script>




<style>

  .start-hero {
    outline: 3px dotted red;
    position: relative;
    min-width: 360px;
    height: calc(100vh - 60px);
    /* display: grid; */
    /* place-content: start center;
    place-items: start center; */
    /* background-color: #ddd; */
    overflow-y: hidden;
  }


  .top-block {
    /* outline: 5px solid gold; */
    position: relative;
    height: 1vh;
    margin-bottom: 1vh;
    width: 100%;
  }

  .top-menu-block {
    /* outline: 5px solid blue; */
    position: relative;
    height: 35px;
    width: 100%;
  }

  .header-section {
    /* outline: 3px solid red; */
    position: relative;
    margin-top: 4vh;
    padding-bottom: 0.01%;
    text-align: center;
    line-height: 100%;
  }

  .main-header h1 {
    font-size: 120%;
    line-height: 100%;
  }

  h3 {
    font-size: 100%;
    line-height: 100%;
    margin-bottom: 2%;
    margin-top: 2%;
  }

  .header__button {
    padding: 1%;
  }

  h5 {
    margin: 0;
    padding: 0;
    font-size: 100%;
  }

  .social-link {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    margin-bottom: 1vh;
    
  }

  .social-link__text {
    /* outline: 2px solid blue; */
  }

  .social-link__text h5 {
    margin: 0;
    padding: 0;
  }

  .social-link__list {
    /* outline: 2px solid lime */
  }

  .social-link__list li {
    display: inline;
  }

  .bottom-block {
    /* outline: 3px solid green; */
    position: relative;
    height: 1vh;
    width: 100%;
  }
</style>




<div class="start-hero">
  <section class="top-block"> </section>

  <section class="top-menu-block">
    Верхнее меню и кнопка главного меню
  </section>

  <header>
    <section class="header-section main-header">
      <h1 class="main-header--kaz"> PETROPAVL GUMANITARLYQ TEHNIKALYQ KOLLEJ</h1>
      <h1 class="main-header--rus"> ПЕТРОПАВЛОВСКИЙ ГУМАНИТАРНО ТЕХНИЧЕСКИЙ КОЛЛЕДЖ</h1>
    </section>

    <section class="header-section epigraf">
      <h3 epigraf-kaz>Кäsiptik-texnïkalıq bilimniñ joğarı sapası</h3>
      <h3 epigraf-rus>ПрофТех образование высшего качества</h3>
    </section>

    <section class="header-section buttons">
      <button class = "header__button">
        <h5>Мамандықтар</h5>
        <h5>Специальности</h5>
      </button>
      <button class = "header__button">
        <h5>Qalaı túsýge bolady</h5>
        <h5>Как поступить</h5>
      </button>
    </section>

    <section class="header-section empty">
      <h3>empty</h3>
    </section>

    <section class="header-section esteblish">
      <h3 esteblish-kaz>Ol 1930 jyly qurylǵan. Bіz dástúrlerdі syılaımyz - bіz ınnavatsııaǵa umtylamyz</h3>
      <h3 esteblish-rus>Основан в 1930 году. Чтим традиции - стремимся к инновациям</h3>
    </section>

    <section class="header-section social-link">
      <div class="social-link__text">
        <h5>Бізбен бірге болыңыз</h5>
        <h5>Будьте с нами</h5>
      </div>
      <ul class="social-link__list">
        <li>youtube</li>
        <li>vk</li>
        <li>in</li>
      </ul>
    </section>

    <!-- <section class="header-section welcome">
      <h3>
        <span class="welcome--kaz">Qoş keldiñizder </span>
        <span class="welcome--rus"> Добро пожаловать</span>
      </h3>
    </section> -->

    
  </header>

  <section class="bottom-block"> </section>
  
</div>