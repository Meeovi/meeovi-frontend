<template>
    <div>
        <!---->
        <section data-bs-version="5.1" class="pricing1 cid-u3X1MKinjb" id="pricing1-7q" data-sortbtn="btn-primary">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <NuxtImg loading="lazy" src="~/assets/images/mbr-1076x585.png" class="top" alt="">
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="right">

                            <p class="name mbr-fonts-style display-2"><strong>Add funds directly to your Meeovi Gift
                                    Card balance</strong></p>


                            <p class="mbr-text mbr-fonts-style display-4">Add funds to your Meeovi Gift Card balance,
                                then use your balance to manage how much you spend while shopping.
                                <br>Save up for a purchase by adding funds to your Gift Card balance.
                                <br>Checkout faster when you reload to your Gift Card balance in advance.
                                <br>Set up Auto-Reload to automatically reload to your Gift Card Balance on a particular
                                date, week, month or when your balance gets low.
                                <br>Reloaded funds never expire and have no fees.
                                <br>Meeovi Reload purchases are not refundable or redeemable for cash, except as
                                required by law.</p>
                            <v-card title="Amount" variant="outlined" elevated="0">
                                <v-card-actions>
                                    <v-btn variant="outlined">$25</v-btn>
                                    <v-btn variant="outlined">$50</v-btn>
                                    <v-btn variant="outlined">$100</v-btn>
                                </v-card-actions>
                                <v-col cols="12"><v-text-field prepend-inner-icon="fas fa-dollar-sign" label="Other" ></v-text-field></v-col>
                            </v-card>
                            <div class="mbr-section-btn"><NuxtLink class="btn btn-secondary display-7" href="">Buy Now</NuxtLink>
                            </div>
                            <div class="price-line1">
                                <p class="desc mbr-fonts-style display-7"><strong>
                                        Brand:</strong></p>
                                <p class="plus mbr-fonts-style display-4">
                                    &nbsp;Meeovi Reload</p>
                            </div>
                            <div class="price-line1">
                                <p class="desc mbr-fonts-style display-7"><strong>
                                        Action:</strong>&nbsp;</p>
                                <p class="plus mbr-fonts-style display-4">Set up Auto-Reload</p>
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
        components: {
            profilebar
        },
    }
</script>

<script setup>
    useHead({
        title: 'Reload Gift Card Balance'
    })

    definePageMeta({
	  middleware: ['authenticated'],
	})
</script>