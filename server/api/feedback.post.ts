import type { EventHandler } from 'h3'
import { directusServer, updateItem, createItem } from '../utils/directus-server';

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);
		const { id, name, url, rating, content } = body;

		let response;

		if (id) {
			response = await directusServer.request(
				updateItem('reports', id, {
					name,
					url,
					rating,
					content,
				}),
			);
		} else {
			response = await directusServer.request(
				createItem('reports', {
					name,
					url,
					rating,
					content,
				}),
			);
		}

		return response;
	} catch (err: any) {
		throw createError({
			statusCode: 500,
			statusMessage: err.message,
		});
	}
});