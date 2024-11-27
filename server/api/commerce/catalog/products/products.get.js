import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('Received request for SKUs:', body.sku)

  const config = useRuntimeConfig();
  try {
    const products = await $fetch(`${config.public.commerceUrl}/rest/default/V1/products`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });

    // Extract the media_gallery_entries array
    const mediaEntries = products.media_gallery_entries || [];
    const baseUrl = config.public.commerceUrl;
    const mediaPath = '/media/catalog/product';

    // Process and map the images to full URLs
    const images = mediaEntries.map(entry => ({
      url: `${baseUrl}${mediaPath}${entry.file}`,
      label: entry.label,
      position: entry.position,
      disabled: entry.disabled,
      types: entry.types
    }));

    // Attach the processed images to the product object
    products.images = images;

    return products;
  } catch (error) {
    console.error(`Error fetching product with ID ${sku}:`, error);
    return null;
  }
}
);