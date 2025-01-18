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

import CategoryQuery from '~/query/Category.query';
import { Category, CategoryQueryOptions } from '~/query/Category.type';
import { updateCurrentCategory } from '~/stores/Category/Category.action';
import { updateNoMatch } from '~/stores/NoMatch/NoMatch.action';
import { showNotification } from '~/stores/Notification/Notification.action';
import { NotificationType } from '~/stores/Notification/Notification.type';
import { NetworkError } from '~/types/Common.type';
import { QueryDispatcher } from '~/utils/Request/QueryDispatcher';

import { CategoryDispatcherData } from './Category.type';

/**
 * Category Dispatcher
 * @class CategoryDispatcher
 * @extends QueryDispatcher
 * @namespace Store/Category/Dispatcher
 */
export class CategoryDispatcher extends QueryDispatcher<CategoryQueryOptions, CategoryDispatcherData> {
    __construct(): void {
        super.__construct('Category');
    }

    onSuccess(
        data: CategoryDispatcherData,
        dispatch: Dispatch,
        { isSearchPage }: CategoryQueryOptions,
    ): void {
        const {
            category,
            category: { id },
        } = data;

        if (!id && !isSearchPage) {
            dispatch(updateNoMatch(true));
        }

        dispatch(updateCurrentCategory(category));
    }

    onError(error: NetworkError | NetworkError[], dispatch: Dispatch, { isSearchPage }: CategoryQueryOptions): void {
        if (!isSearchPage) {
            dispatch(updateNoMatch(true));
            dispatch(showNotification(NotificationType.ERROR, __('Error fetching Category!'), error));
        } else {
            dispatch(updateCurrentCategory({
                id: 'all-products',
            }));
        }
    }

    prepareRequest(
        options: CategoryQueryOptions,
    ): Query<'category', Category, false> {
        return CategoryQuery.getQuery(options);
    }
}

export default new CategoryDispatcher();
