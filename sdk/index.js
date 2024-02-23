import { magentoModule } from "@vue-storefront/magento-sdk";
import { buildModule, initSDK } from "@vue-storefront/sdk";

const sdkConfig = {
  magento: buildModule(magentoModule, {
    apiUrl: process.env.VSF_MAGENTO_GRAPHQL_URL
  })
};

export const sdk = initSDK(sdkConfig);