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
											<billingaddress />
										</v-window-item>

										<v-window-item value="two">
											<shippingaddress />
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
								<v-toolbar color="transparent" density="compact" title="Order Summary"></v-toolbar>
								<v-table fixed-header>
									<tr>
										<th>
											<h5>Subtotal</h5>
										</th>
										<td>$ </td>
									</tr>
									<br>
									<tr>
										<th>
											<h5>Discount</h5>
										</th>
										<td>- ( $ )</td>
									</tr>
									<tr>
										<th>
											<h5>Shipping</h5>
										</th>
										<td></td>
									</tr>
									<v-divider></v-divider>
									<tr>
										<th>
											<h4 style="color: orange;">Total Price</h4>
										</th>
										<td>$ </td>
									</tr>
								</v-table>
							</v-col>

							<v-divider></v-divider>
							<v-col cols="12">
								<v-toolbar color="transparent" density="compact" title="Checkout"></v-toolbar>

								<v-row>
									<v-col cols="12">
										<v-text-field label="Cardholder Name"></v-text-field>
									</v-col>
									<v-col cols="12">
										<div class="d-flex justify-space-around">
											<v-avatar v-for="{ value, logo } in paymentMethods" :key="value" rounded="0"
												size="x-large"><img :src="logo" :alt="value"></v-avatar>
										</div>
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

									<v-col cols="8">
										<v-text-field clearable label="Add Coupon"></v-text-field>
									</v-col>

									<v-col cols="4">
										<v-btn color="orange" size="x-large">Apply</v-btn>
									</v-col>

									<v-col cols="8">
										<v-text-field clearable label="Add Gift Card or Voucher"></v-text-field>
									</v-col>

									<v-col cols="4">
										<v-btn color="orange" size="x-large">Apply</v-btn>
									</v-col>

									<v-col cols="12">
										<v-btn width="100%" color="orange" size="x-large">Pay Now</v-btn>
									</v-col>
									<v-col cols="12">
										<p>By placing this order, you agree to our <a href="/legal/terms"
												target="_blank">Terms and Conditions</a> and our <a
												href="/legal/privacy" target="_blank">Privacy Policy</a>.</p>
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
	import billingaddress from '../../components/Commerce/billingaddress.vue'
	import shippingaddress from '../../components/Commerce/shippingaddress.vue'

	export default {
		components: {
			billingaddress,
			shippingaddress
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