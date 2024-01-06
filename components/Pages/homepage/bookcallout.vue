<template>
    <div>
        <section data-bs-version="5.1" class="features11 cid-skeBBk03KK mbr-parallax-background" id="features12-3">

    
<div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
</div>
<div class="container">
    <div class="row align-items-center">
        <div class="col-12 col-lg" v-for="departments in departments" :key="departments">
            <div class="card-wrapper">
                <div class="card-box">
                    <h4 class="card-title mbr-fonts-style mb-4 display-2" style="color: black;">
                        <strong>Meeovi {{ departments.name }}</strong></h4>
                    <p class="mbr-text mbr-fonts-style mb-4 display-7" style="color: black;">{{ departments.description }}&nbsp;<br></p>
                    <div class="mbr-text mbr-fonts-style counter-container display-7">
                        <ul>
                            <li><p v-html="departments.content"></p><br></li>
                        </ul>
                    </div>
                    <div class="mbr-section-btn mb-4" style="color: black;"><a class="btn btn-secondary display-4" :href="`/departments/${departments.name}`">Visit the Bookstore</a></div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6 md-pb">
            <div class="image-wrapper">
                <img src="assets/images/mbr-676x451.jpg" alt="">
            </div>
        </div>
    </div>
</div>
</section>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
  
  const { getItems } = useDirectusItems()

  //const products = await getItems({ collection: "products"});
  const departments = await getItems({ collection: "departments", params: {filter: {name: {_eq: "Books"}}} });/**/
</script>