import { useRuntimeConfig } from '#imports';

        export const getCurrencySettings = async () => {
          try {
            const settings = await $fetch(`${config.public.wordpressUrl}/settings/general`, {
              params: {
                consumer_key: consumerKey,
                consumer_secret: consumerSecret
              }
            });
            const currencySettings = settings.find(setting => setting.id === 'woocommerce_currency');
            return {
              currency: currencySettings?.value || 'USD'
            };
          } catch (error) {
            console.error('Error fetching currency settings:', error);
            return {
              currency: 'USD'
            };
          }
        };