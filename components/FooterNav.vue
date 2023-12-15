<template>
    <div>
        <v-btn class="footertotopbtn" title="To the Top of the Page" icon="fas fa-arrow-up" rounded="0" href="#mainSection">Back to Top</v-btn>
        <v-footer border>
            <v-row justify="center" no-gutters>
                <v-col class="text-center mt-4 translatebar" cols="12">
                    <v-toolbar color="transparent">
                        <a href="/">
                            <v-btn>
                                <v-icon start>
                                    <img src="../assets/images/logo512alpha-192x192.png" />
                                </v-icon>Meeovi
                            </v-btn>
                        </a>

                        <a id="ftwtranslation_button" hreflang="en" title="" style="border:0;"><img src="http://free-website-translation.com/img/fwt_button_en.gif" id="ftwtranslation_image" alt="FWT Homepage Translator" style="border:0;"/></a>
                        
                        <!--Website Multisite-->
                        <v-btn href="/translations" prepend-icon="fas fa-globe">Change Country</v-btn>
                    </v-toolbar>
                </v-col>
                <v-col class="text-center mt-4" cols="3">
                    <h5><strong>MEEOVI</strong></h5>
                    <v-list-item title="About Us" value="about us" href="/about/"></v-list-item>
                    <v-list-item v-for="pages in data.aboutquery" :key="pages.id" :title="pages.name" :value="pages.name"
                        :href="pages.link"></v-list-item>
                    <v-list-item title="Buyers" value="Buyers" href="/about/buyers"></v-list-item>
                </v-col>

                <v-col class="text-center mt-4" cols="3">
                    <h5><strong>HELP</strong></h5>
                    <v-list-item v-for="pages in data.pages" :key="pages.id"
                        :title="pages.name" :value="pages.name" :href="pages.link">
                    </v-list-item>
                </v-col>

                <v-col class="text-center mt-4" cols="3">
                    <h5><strong>The Meeovi Company</strong></h5>
                    <v-list-item v-for="pages in data.companyquery" :key="pages.id" :title="pages.name" :value="pages.name"
                        :href="pages.link"></v-list-item>
                </v-col>

                <v-col class="text-center mt-4" cols="3">
                    <h5><strong>CONNECT</strong></h5>
                    <v-list-item class="fas fa-mobile" title="Get the App" value="Get the App" href="/applications">
                    </v-list-item>
                </v-col>
                <v-col class="text-center mt-4" cols="12">
                    2017 - {{ new Date().getFullYear() }} — <strong><a href="https://www.meeovi.com/about">The Meeovi
                            Company</a></strong>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            location: 'top',
        }),
    }
</script>

<script setup>
    const {
        getItems
    } = useDirectusItems()

const query = gql`
query {
    pages (search: "legal") {
      id
      status
      sort
      name
      content
      link
      list
      type
      date_created
    }
  }
`
const { data } = await useAsyncQuery(query)

const about = gql`
query {
    pages (search: "about") {
      id
      status
      sort
      name
      content
      link
      list
      type
      date_created
    }
  }
`
const { data: aboutquery } = await useAsyncQuery(about)

const company = gql`
query {
  websites (search: "ecosystemmenu") {
    id
    name
    image {
      filename_disk
    }
    url
    type
  }
}
`
const { data: companyquery } = await useAsyncQuery(company)
</script>