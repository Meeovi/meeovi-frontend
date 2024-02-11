import { buildModule, initSDK } from '@vue-storefront/sdk';
import { magentoModule, MagentoModuleType } from '@vue-storefront/sdk/magento-sdk';

const sdkConfig = {
  magento: buildModule<MagentoModuleType>(magentoModule, { 
    apiUrl: process.env.VSF_MAGENTO_BASE_URL
  })
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);