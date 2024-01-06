import { createDirectus, rest, readItem, readItems } from '@directus/sdk';

const directus = createDirectus('http://67.207.71.123:8011/').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems },
	};
});