<template>
    <div class="settingsCard">
        <profilebar />
        <section data-bs-version="5.1" class="people1 cid-tApz5Dd4Em" id="people1-5r" data-sortbtn="btn-primary">
    

    

    <div class="container">
        <div class="row title-block">
            <div class="col-12">
                <h4 class="mbr-section-title mbr-fonts-style display-2"><strong>Following</strong></h4>
                
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-3" v-for="following in following" :key="following.id">
                <div class="wrap-img item-img">
                    <img :src="`${url}assets/${following.image.filename_disk}`" :alt="following.name" class="inner">
                </div>
                <h5 class="card-title mbr-fonts-style display-7">
                    <a :href="`/admin/user/${following.username}`">{{ following.name }}</a></h5>
                
                
            </div>
        </div>
    </div>
</section>
    </div>
</template>

<script>
    //import profilebar from '../../../components/Menus/profilebar'

    export default {
        data: () => ({
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>

    useHead({
        title: 'Following',
    })
</script>

<style scoped>

</style>