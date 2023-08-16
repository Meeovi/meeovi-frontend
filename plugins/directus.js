import { createDirectus } from '@directus/sdk';

const directus = createDirectus(process.env.DIRECTUS_URL);

export default defineNuxtPlugin(() => {
	return {
		provide: { directus },
	};
});