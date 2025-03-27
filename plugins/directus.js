import { createDirectus, rest, readItem, readItems, createItem, deleteItem, uploadFiles, readSingleton } from '@directus/sdk';
import "dotenv"

export default defineNuxtPlugin(() => {
const config = useRuntimeConfig()

const directus = createDirectus(`${config.public.directus.url}`).with(rest());
	
	return {
		provide: { directus, readItem, readItems, createItem, deleteItem, uploadFiles, readSingleton },
	};
});