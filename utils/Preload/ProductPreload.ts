/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */

import { ProductListOptions } from '~/graphql/queries-mutations_subscriptions/types/ProductList.type';
import ProductDispatcher from 'Store/Product/Product.dispatcher';
import getStore from '~/utils/Store';

/** @namespace ~/utils/Preload/ProductPreload */
export class ProductPreload {
    options: Partial<ProductListOptions> = {
        isSingleProduct: true,
        args: { filter: { productID: window.actionName?.id } },
    };

    preloadProduct() {
        ProductDispatcher.handleData(getStore().dispatch, this.options);
    }
}

export default new ProductPreload();
