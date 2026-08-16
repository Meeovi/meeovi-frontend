import {
	createDirectus,
	rest,
	readItem,
	readItems,
	createItem,
	updateItem,
	deleteItem,
	staticToken,
} from '@directus/sdk';
import type { Schema } from '~/types/schema';

const directusUrl = process.env.DIRECTUS_URL as string;

const directusServer = createDirectus<Schema>(directusUrl)
	.with(rest())
	.with(staticToken(process.env.DIRECTUS_STATIC_TOKEN as string));

export { directusServer, readItems, readItem, createItem, updateItem, deleteItem, withToken };