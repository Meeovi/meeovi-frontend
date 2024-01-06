import { createDirectus } from '@directus/sdk';

const client = createDirectus(process.env.DIRECTUS_URL);

export const url = process.env.DIRECTUS_URL;

export default { url }