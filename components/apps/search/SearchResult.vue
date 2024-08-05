<template>
	<div>
		<h2 class="search-result__heading">{{ result.name.raw }}</h2>
		<v-row>
			<v-col cols="4">
				<filters :filters-data="filtersData" />
			</v-col>

			<v-col cols="8">
				<v-row v-for="result in searchResults" :key="result._id">
					<v-col cols="12">
						<relatedcreators :result="result" />
					</v-col>

					<v-col cols="12">
						<productCard :result="result" />
					</v-col>

					<v-col cols="12">
						<relatedspaces :result="result" />
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<script setup>
	import {
		useNuxtApp
	} from '#app'
	import filters from '../../components/apps/search/filters.vue'
	import relatedcreators from '../../components/related/relatedcreators.vue'
	import productCard from '../../components/commerce/product/productCard.vue'
	import relatedspaces from '../../components/related/relatedspaces.vue'

	const props = defineProps({
		result: {
			type: Object,
			required: true,
		},
	});
	const {
		result
	} = props;

	definePageMeta({
		layout: false,
	});

	useHead({
		title: "Search Results"
	})
</script>