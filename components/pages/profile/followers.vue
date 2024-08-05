<template>
    <div class="settingsCard">
        <profilebar />
        <section data-bs-version="5.1" class="people1 cid-tApz5Dd4Em" id="people1-5r" data-sortbtn="btn-primary">
    

    

    <div class="container">
        <div class="row title-block">
            <div class="col-12">
                <h4 class="mbr-section-title mbr-fonts-style display-2"><strong>Followers</strong></h4>
                
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-3" v-for="followers in data?.friendship?.friend" :key="followers.id">
                <div class="wrap-img item-img">
                    <img :src="`${followers.avatar.url}`" :alt="followers.username" class="inner">
                </div>
                <h5 class="card-title mbr-fonts-style display-7">
                    <a :href="`/admin/user/${followers.id}`">{{ followers.username }}</a></h5>
                
                
            </div>
        </div>
    </div>
</section>
    </div>
</template>

<script setup>
const route = useRoute();
const query = gql`
query NewQuery ($id: ID!) {
  friendship(id: $id) {
    isConfirmed
    id
    dateCreated
    friend {
      avatar {
        url
      }
      username
      id
    }
    initiator {
      avatar {
        url
      }
      username
      id
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query, { id: route.params.id });

    useHead({
        title: 'Followers',
    })
</script>

<style scoped>

</style>