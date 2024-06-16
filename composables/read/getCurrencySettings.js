const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
const consumerKey = 'ck_71513251ef29d6eb34d8e91337e10c5dc29785e9';
const consumerSecret = 'cs_6ab0eaa4c194e84b414cef8a25f7b3324c715b88';

        export const getCurrencySettings = async () => {
          try {
            const settings = await $fetch(`${apiUrl}/settings/general`, {
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