<template>
    <div>
        <v-btn class="footertotopbtn" title="To the Top of the Page" prepend-icon="fas fa-arrow-up" rounded="0"
            href="#mainSection">Back to Top</v-btn>
        <section data-bs-version="5.1" class="footer3 cid-u4cbW5p2qg" once="footer" id="footer03-8b"
            data-sortbtn="btn-primary">
            <div class="container">
                <div class="row align-left justify-content-center mbr-white">
                    <div class="col-md-6 col-lg-3 md-pb">
                        <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7"><strong>Meeovi</strong></h2>
                        <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"  v-for="pages in about" :key="pages.id"><a :href="pages.link">{{ pages.name }}</a></h3>
                    </div>
                    <div class="col-md-6 col-lg-3 md-pb">
                        <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7"><strong>
                                Help</strong></h2>
                                <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"  v-for="pages in legal" :key="pages.id"><a :href="pages.link">{{ pages.name }}</a></h3>

                    </div>
                    <div class="col-md-6 col-lg-3 md-pb">
                        <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7"><strong>
                                Stores</strong></h2>
                                <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"  v-for="pages in company" :key="pages.id"><a :href="pages.link">{{ pages.name }}</a></h3>

                    </div>
                    <div class="col-md-6 col-lg-3 md-pb">
                        <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7"><strong>Newsletter
                            </strong></h2>
                        <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4">Yes! Send me exclusive
                            offers, unique gift ideas, and personalised tips for shopping and selling on Meeovi.</h3>
                        <div class="form1 px-2" data-form-type="formoid">
                            <!--Formbuilder Form-->
                            <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler"
                                data-form-title="My Mobirise Form"><input type="hidden" name="email"
                                    data-form-email="true"
                                    value="G+i4QxkPVy/kVx4r8JG5yl7LGhxFqKoNbvYJqz+fIZl0UtW3JZaUCJRJVUS5WFN81MUognCLb/fwak5vTjavSdYAWmhhwSrUQSg5zopqd2vqN8py1k/5/r9M4xyp/ooz.DzZJXN3qwMq9XSMplPqUqJizJjx23mmEXWW/dk2e9GuqLirjenkJtYIpqFFcwMGt+F0DxsEZX3WEhoplZQGEbGsk0u+erLEYnpYQzSjXCysAWgqoQY+ujKMSoMMHBlGG">
                                <div class="row">
                                    <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks
                                        for filling
                                        out the form!</div>
                                    <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                    </div>
                                </div>
                                <div class="dragArea row">
                                    <div class="col form-group " data-for="email">
                                        <input type="text" name="email" placeholder="E-mail" data-form-field="E-mail"
                                            required="required" class="form-control display-7" value=""
                                            id="email-footer03-8b">
                                    </div>
                                    <div class="col-auto mbr-section-btn"><button type="submit"
                                            class="btn btn-lg btn-primary display-4">&gt;</button></div>
                                </div>
                            </form>
                            <!--Formbuilder Form-->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="footer7 cid-u4ccfXoeP6" once="footers" id="footer7-8c"
            data-sortbtn="btn-primary">
            <div class="container">
                <div class="media-container-row align-center mbr-white">
                    <div class="col-3">
                        <v-list-item href="/applications" title="Applications"></v-list-item>
                    </div>
                    <div class="col-3">
                        <v-list-item href="/stores/pickup-locations" title="Pickup Locations"></v-list-item>
                    </div>
                    <div class="col-3">
                        <v-btn variant="outlined" color="gray" prepend-icon="fas fa-globe" href="/translations" title="Change Your Store">Meeovi Global</v-btn>
                    </div>
                    <div class="col-3">
                        <p class="mbr-text mb-0 mbr-fonts-style display-7">
                            2017 — {{ new Date().getFullYear() }} <strong><a href="https://www.meeovi.com">&copy; Meeovi LLC</a></strong> - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </section>
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

    const about = await getItems({
        collection: "pages",
        params: {
            search: "About"
        }
    });

    const legal = await getItems({
        collection: "pages",
        params: {
            search: "Legal"
        }
    });

    const company = await getItems({
        collection: "websites",
        params: {
            search: "ecosystemmenu"
        }
    });

    /*import legal from '../apollo/Custom/Queries/legallinks'
    import about from '../apollo/Custom/Queries/aboutlinks'
    import company from '../apollo/Custom/Queries/companylinks'

        const {
            data
        } = await useAsyncQuery(legal)

        const {
            data: aboutquery
        } = await useAsyncQuery(about)

        const {
            data: companyquery
        } = await useAsyncQuery(company)

           const {
               locale,
               locales
           } = useI18n()
           const switchLocalePath = useSwitchLocalePath()

           const availableLocales = computed(() => {
               return (locales.value).filter(i => i.code !== locale.value)
        })*/
</script>