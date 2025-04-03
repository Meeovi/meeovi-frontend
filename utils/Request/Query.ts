/* eslint-disable import/prefer-default-export */
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa-theme
 * @link https://github.com/scandipwa/scandipwa-theme
 */

import { Query } from '@tilework/opus';

import { prepareQuery } from '~/utils/Query';
import { executePost } from '~/utils/Request/Request';

/** @namespace ~/utils/Request/~/graphql/queries-mutations_subscriptions/types/fetchQuery */
export const fetchQuery = <S extends string, T, IsArray extends boolean = false>(
    rawQueries: Query<S, T, boolean> | Query<S, T, boolean>[],
): Promise<Record<S, IsArray extends false ? T : T[]>> => {
    const queries = rawQueries instanceof Query ? [rawQueries] : rawQueries;

    return executePost(prepareQuery(queries));
};
