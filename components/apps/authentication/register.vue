<template>
  <div>
    <section data-bs-version="5.1" class="header2 supplym5 cid-ujDY4O2LRw mbr-fullscreen" id="header2-a1"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="title-wrapper">
              <h1 class="mbr-section-title mbr-fonts-style display-1">Welcome to Meeovi</h1>
              <div class="mbr-section-btn">
                <v-form fast-fail @submit.prevent="onSubmit" width="500">
                  <v-text-field v-model="first_name" label="First Name"></v-text-field>
                  <v-text-field v-model="last_name" label="Last Name"></v-text-field>

                  <v-text-field type="email" v-model="email" label="Email"></v-text-field>

                  <v-text-field type="password" v-model="password" label="Password"></v-text-field>

                  <v-text-field type="password" v-model="confirmPassword" label="Confirm Password"></v-text-field>

                  <v-btn class="mt-2 btn btn-primary display-4" type="submit" block>Register</v-btn>
                </v-form>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="image-wrapper">
              <img class="image_1" src="../../../assets/images/mbr-500x750.jpg" alt="">
              <img class="image_2" src="../../../assets/images/mbr-600x593.jpg" alt="">
              <img class="image_3" src="../../../assets/images/mbr-500x333.jpg" alt="">
              <img class="image_4" src="../../../assets/images/mbr-560x747.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Error Dialog -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Registration Error</v-card-title>
        <v-card-text>{{ errorMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">


useHead({
  title: "Welcome to Meeovi"
});

definePageMeta({
  auth: false,
  //middleware: 'guest',
});
</script>
