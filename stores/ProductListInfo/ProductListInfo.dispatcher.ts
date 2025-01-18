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

import { Query } from '@tilework/opus';
import { Dispatch } from 'redux';

import ProductListQuery from '~/query/ProductList.query';
import { ProductListOptions, ProductsQueryOutput } from '~/query/ProductList.type';
import { updateNoMatch } from '~/stores/NoMatch/NoMatch.action';
import { showNotification } from '~/stores/Notification/Notification.action';
import { NotificationType } from '~/stores/Notification/Notification.type';
import {
    updateInfoLoadStatus,
    updateProductListInfo,
} from '~/stores/ProductListInfo/ProductListInfo.action';
import { NetworkError } from '~/types/Common.type';
import { QueryDispatcher } from '~/utils/Request/QueryDispatcher';

import { ProductListInfoDispatcherData } from './ProductListInfo.type';

/**
 * Product List Info Dispatcher
 * @class ProductListInfoDispatcher
 * @extends QueryDispatcher
 * @namespace Store/ProductListInfo/Dispatcher
 */
export class ProductListInfoDispatcher extends QueryDispatcher<
Partial<ProductListOptions>,
ProductListInfoDispatcherData
> {
    __construct(): void {
        super.__construct('ProductListInfo');
    }

    onSuccess(
        { products }: ProductListInfoDispatcherData,
        dispatch: Dispatch,
        options: Partial<ProductListOptions>,
    ): void {
        const {
            args: {
                filter = {},
            } = {},
        } = options;

        dispatch(updateProductListInfo(products, filter));
    }

    onError(error: NetworkError | NetworkError[], dispatch: Dispatch): void {
        dispatch(showNotification(NotificationType.ERROR, __('Error fetching Product List Information!'), error));
        dispatch(updateNoMatch(true));
    }

    prepareRequest(
        options: Partial<ProductListOptions>,
        dispatch: Dispatch,
    ): Query<'products', ProductsQueryOutput> {
        dispatch(updateInfoLoadStatus(true));

        return ProductListQuery.getQuery({
            ...options,
            requireInfo: true,
        });
    }
}

export default new ProductListInfoDispatcher();
