<template>
    <div>
        <section data-bs-version="5.1" class="people1 cid-u1nHNN1e0D" id="people1-6m">
        <div class="container">

          <div class="user-card">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <v-avatar size="120">
                  <img src="../../assets/images/team7.jpg" />
                </v-avatar>
                <div class="user_name mbr-fonts-style display-7">
                  <strong>Alexa</strong>
                </div>
                <p class="commentPublishedDate">Date</p>
              </div>

              <div class="col-12 col-md-6 col-lg-9">
                <div class="description">
                  <div class="user_text">
                    <p class="mbr-fonts-style small display-4">
                      Themes in the Mobirise website builder offer multiple blocks: intros, sliders, galleries, forms,
                      articles, and so on. Start a project and click on the red plus buttons to see the blocks available
                      for your theme.
                    </p>
                  </div>


                  <div class="user_desk mbr-fonts-style display-4">
                    <span>
                      <v-rating half-increments hover :length="5" :size="32" :model-value="3" color="warning"
                        active-color="warning" /></span>
                  </div>

                  <div class="user_desk mbr-fonts-style display-4">
                    <span>Was this comment helpful? <v-btn prepend-icon="fas fa-thumbs-up" variant="text">()</v-btn>
                      &bull; <v-btn prepend-icon="fas fa-thumbs-down" variant="text">()</v-btn></span>
                  </div>
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
    useHead({
        title: 'Replies'
    })
</script>