import { magentoModule } from "@vue-storefront/magento-sdk";
import { buildModule, initSDK } from "@vue-storefront/sdk";

const sdkConfig = {
  const config = useRuntimeConfig(),
  magento: buildModule(magentoModule, {
    apiUrl: config.public.commerceUrl,
  }),
};

export const sdk = initSDK(sdkConfig);
