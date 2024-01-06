<template>
	<div class="cartPage contentPage">
		<form action="">
			<v-row>
				<v-col cols="8">
					<v-row>
						<v-col cols="12">
							<v-card min-width="500px" style="padding-left: 15px; padding-bottom: 15px;">
								<v-toolbar color="transparent" density="compact" title="Items (2 Items)">
									<v-btn prepend-icon="fas fa-trash">Remove All</v-btn>
								</v-toolbar>
								<v-table fixed-header>
									<thead>
										<tr>
											<th class="text-left">
												Item
											</th>
											<th class="text-left">
												Price
											</th>
											<th class="text-left">
												Quantity
											</th>
											<th class="text-left">
												Total
											</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<v-list lines="two">
													<v-list-item
														subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
														prepend-avatar="https://cdn.vuetifyjs.com/images/john.png">
													</v-list-item>
												</v-list>
											</td>
											<td></td>
											<td>
												<v-text-field style="width: 80px; margin-top: 15px;" type="number"
													single-line variant="outlined" value=""></v-text-field>
											</td>
											<td></td>
											<td>
												<v-btn icon="fas fa-xmark" size="x-small"></v-btn>
											</td>
										</tr>
									</tbody>
								</v-table>
							</v-card>
						</v-col>

						<v-col cols="12">
							<v-card style="padding-left: 15px; padding-bottom: 15px;">
								<v-tabs v-model="tab" bg-color="transparent">
									<v-tab value="one">Billing Address</v-tab>
									<v-tab value="two">Shipping Address</v-tab>
								</v-tabs>

								<v-card-text>
									<v-window v-model="tab">
										<v-window-item value="one">
											<billingAddress />
										</v-window-item>

										<v-window-item value="two">
											<shippingAddress />
										</v-window-item>
									</v-window>
								</v-card-text>
							</v-card>
						</v-col>
					</v-row>
				</v-col>

				<v-col cols="4">
					<v-row>
						<v-card min-width="500px" style="padding-left: 15px; padding-bottom: 15px;">
							<v-col cols="12">
								<shippingMethods />
							</v-col>

							<v-divider></v-divider>
							<v-col cols="12">
								<v-toolbar color="transparent" density="compact" title="Checkout"></v-toolbar>

								<v-row>
									<v-col cols="12">
										<v-text-field label="Cardholder Name"></v-text-field>
									</v-col>
									<v-col cols="12">
										<paymentMethods />
									</v-col>
									
									<v-col cols="12">
										<v-text-field type="number" label="Card Number"></v-text-field>
									</v-col>
									<v-col cols="6">
										<v-text-field type="date" label="Expiration Date"></v-text-field>
									</v-col>
									<v-col cols="6">
										<v-text-field type="number" label="CVC"></v-text-field>
									</v-col>

									<v-col cols="12">
										<orderSummary />
									</v-col>
								</v-row>
							</v-col>
						</v-card>
					</v-row>
				</v-col>
			</v-row>
		</form>
	</div>
</template>

<script>
	import contactForm from '../../components/Pages/commerce/contactForm.vue'
	import orderSummary from '../../components/Pages/commerce/orderSummary.vue'
	import paymentMethods from '../../components/Pages/commerce/paymentMethods.vue'
	import shippingMethods from '../../components/Pages/commerce/shippingMethods.vue'
	import billingAddress from '../../components/Pages/commerce/billingAddress.vue'
	import shippingAddress from '../../components/Pages/commerce/shippingAddress.vue'

	export default {
		components: {
			contactForm,
			orderSummary,
			paymentMethods,
			shippingMethods,
			billingAddress,
			shippingAddress
		},
		data: () => ({
			tab: null,
		}),
	}
</script>

<script setup>

	useHead({
		title: 'Shopping Cart',
	})

	const paymentMethods = [{
			label: 'Credit card',
			value: 'credit-card',
			logo: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/visa-logo.svg',
			active: true,
		},
		{
			label: 'Mastercard',
			value: 'mastercard',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
			active: true,
		},
		{
			label: 'Discover',
			value: 'discover',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/DiscoverCard.svg/300px-DiscoverCard.svg.png',
			active: false,
		},
		{
			label: 'PayPal',
			value: 'paypal',
			logo: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/paypal-logo.svg',
			active: true,
		},
	];
</script>