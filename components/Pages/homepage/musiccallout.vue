<template>
    <div>
        <section data-bs-version="5.1" class="features16 cid-skeBGL5AVt" id="features17-5">
    

    <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
    </div>
    <div class="container">
        <div class="content-wrapper">
            <div class="row align-items-center" v-for="departments in departments" :key="departments">
                <div class="col-12 col-lg-6">
                    <div class="image-wrapper">
                        <img src="assets/images/mbr-2-676x451.jpg" alt="">
                    </div>
                </div>
                <div class="col-12 col-lg">
                    <div class="text-wrapper">
                        <h6 class="card-title mbr-fonts-style display-5" style="color: black;">
                            <strong>Meeovi {{ departments.name }}</strong></h6>
                        <p class="mbr-text mbr-fonts-style mb-4 display-4" style="color: black;">{{ departments.description }}&nbsp;<br></p>
                        <div class="mbr-section-btn mt-3"><a class="btn btn-primary display-4" style="color: black;" :href="`/departments/${departments.name}`">
                                Learn more
                            </a></div>
                    </div>
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
  const departments = await getItems({ collection: "departments", params: {filter: {name: {_eq: "Music"}}} });/**/
</script>