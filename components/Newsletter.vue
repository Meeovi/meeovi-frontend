<template>
    <div>
        <section data-bs-version="5.1" class="formulam5 form1 cid-tZRUOapGTD" id="form1-6c">
            <div class="container-fluid">
                <div class="row content-wrapper justify-content-center">
                    <div class="col-lg-7 mbr-form">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h5 class="mbr-section-title mbr-fonts-style mb-5 display-7"><strong>Yes! Send me exclusive
                                    offers, unique gift ideas, and personalised tips for shopping and selling on
                                    Meeovi.</strong></h5>
                        </div>

                        <div class="text-wrapper align-left" data-form-type="formoid">
                            <!--Newsletter Form-->
                            <newsletter-form class="mbr-form form-with-styler" @subscribed="log" buttonText="Subscribe" inputPlaceholder="Your email" />
                            <!--Newsletter Form-->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
const log = (e) => {
  console.log(e)
}
</script>