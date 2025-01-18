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

import UrlRewritesQuery from '~/query/UrlRewrites.query';
import { UrlRewritesOutput, UrlRewritesQueryOptions } from '~/query/UrlRewrites.type';
import { updateNoMatch } from '~/stores/NoMatch/NoMatch.action';
import { showNotification } from '~/stores/Notification/Notification.action';
import { NotificationType } from '~/stores/Notification/Notification.type';
import { setIsUrlRewritesLoading, updateUrlRewrite } from '~/stores/UrlRewrites/UrlRewrites.action';
import { NetworkError } from '~/types/Common.type';
import { QueryDispatcher } from '~/utils/Request/QueryDispatcher';

import { UrlRewritesDispatcherData } from './UrlRewrites.type';

/**
 * Url Rewrite Dispathcer
 * @class UrlRewritesDispatcher
 * @extends RequestDispatcher
 * @namespace Store/UrlRewrites/Dispatcher
 */
export class UrlRewritesDispatcher extends QueryDispatcher<UrlRewritesQueryOptions, UrlRewritesDispatcherData> {
    __construct(): void {
        super.__construct('UrlRewrites');
    }

    onSuccess(
        { urlResolver }: UrlRewritesDispatcherData,
        dispatch: Dispatch,
        { urlParam }: UrlRewritesQueryOptions,
    ): void {
        dispatch(updateUrlRewrite(urlResolver || { notFound: true }, urlParam));
        dispatch(updateNoMatch(!urlResolver));
    }

    onError(
        error: NetworkError | NetworkError[],
        dispatch: Dispatch,
        { urlParam }: UrlRewritesQueryOptions,
    ): void {
        dispatch(setIsUrlRewritesLoading(false));
        dispatch(updateUrlRewrite({ notFound: true }, urlParam));
        dispatch(updateNoMatch(true));
        dispatch(showNotification(NotificationType.ERROR, __('Error fetching URL-rewrites!'), error));
    }

    /**
     * Prepare UrlRewrite requests
     * @param {Object} options A object containing different aspects of query, each item can be omitted
     * @return {Query} UrlRewrite query
     * @memberof UrlRewritesDispatcher
     */
    prepareRequest(options: UrlRewritesQueryOptions, dispatch: Dispatch): Query<'urlResolver', UrlRewritesOutput>[] {
        dispatch(setIsUrlRewritesLoading(true));

        return [
            UrlRewritesQuery.getQuery(this.processUrlOptions(options)),
        ];
    }

    processUrlOptions(options: UrlRewritesQueryOptions): UrlRewritesQueryOptions {
        const { urlParam } = options;

        // FAILSAFE: Trim index.php if someone forgot to set "Use Web Server Rewrites" to "Yes"
        const trimmedParam = urlParam.replace('index.php/', '');

        return {
            ...options,
            urlParam: trimmedParam.replace(new RegExp(window.storeRegexText), ''),
        };
    }
}

export default new UrlRewritesDispatcher();
