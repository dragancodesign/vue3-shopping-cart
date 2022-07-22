<template>
  <div class="about">
    <h1>About us</h1>


<h2>Here is a sample of web store applications using Vue.js</h2>

<h3>Vue.js is progressive JavaScript Framework</h3>


  <div class="services">

    <div class="service">
      <h4>Approachable</h4>
      <p>Here we are using an API to show products on the Home page and Shopping Bag page. Here we are using data to add product image, price, description and any data relevant to the product.</p>
    </div>

    <div class="service">
    <h4>Performant</h4>
    <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization. It loads the pages very fast.</p>
    </div>

    <div class="service">
    <h4>Versatile</h4>
    <p>A rich ecosystem that scales between a library and a full-featured framework. You can choose the way how data appear on the page.</p>
    </div>
  </div>


</div>
</template>

<script>

</script>

<style lang="scss">

  .about {

    .services {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;


      .service {
        flex: 0 0 30%;
        box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: 300px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }
      }

      h4 {
        margin: 22px auto;
        font-size: 18px;
        max-width: 60%;
        font-weight: normal;
      }
    }



        
  }

</style>