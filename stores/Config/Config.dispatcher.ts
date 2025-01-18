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

import CartQuery from '~/query/Cart.query';
import { CartDisplayConfig } from '~/query/Cart.type';
import ConfigQuery from '~/query/Config.query';
import {
    CheckoutAgreement, Currencies, CurrencyData, StoreConfig,
} from '~/query/Config.type';
import RegionQuery from '~/query/Region.query';
import { Country } from '~/query/Region.type';
import ReviewQuery from '~/query/Review.query';
import { ReviewRatingItem } from '~/query/Review.type';
import CartDispatcher from '~/stores/Cart/Cart.dispatcher';
import { updateConfig } from '~/stores/Config/Config.action';
import { showNotification } from '~/stores/Notification/Notification.action';
import { NotificationType } from '~/stores/Notification/Notification.type';
import { NetworkError } from '~/types/Common.type';
import { GQLCurrencyEnum } from '~/types/Graphql.type';
import BrowserDatabase from '~/utils/BrowserDatabase';
import { returnFilteredCurrencies, setCurrency } from '~/utils/Currency';
import { ONE_MONTH_IN_SECONDS } from '~/utils/Request/Config';
import { QueryDispatcher } from '~/utils/Request/QueryDispatcher';

import { ConfigStore } from './Config.type';

/** @namespace Store/Config/Dispatcher */
export class ConfigDispatcher extends QueryDispatcher<undefined, ConfigStore> {
    __construct(): void {
        super.__construct('Config');
    }

    static async updateCurrency(dispatch: Dispatch, options: { currencyCode: GQLCurrencyEnum }): Promise<void> {
        const { currencyCode } = options;

        try {
            setCurrency(currencyCode);

            CartDispatcher.updateInitialCartData(dispatch, true);
        } catch (e) {
            dispatch(updateConfig({}));
        }
    }

    onSuccess(data: ConfigStore, dispatch: Dispatch): void {
        if (data) {
            const { currencyData, currency } = data;
            const filteredData = { ...data, ...returnFilteredCurrencies(currencyData, currency) };

            BrowserDatabase.setItem(filteredData, 'config', ONE_MONTH_IN_SECONDS);
            dispatch(updateConfig(filteredData));
        }
    }

    onError(error: NetworkError | NetworkError[], dispatch: Dispatch): void {
        dispatch(showNotification(NotificationType.ERROR, __('Error fetching Config!'), error));
    }

    prepareRequest(): Array<
    Query<'countries', Country, true>
    | Query<'reviewRatings', { items: ReviewRatingItem[] }>
    | Query<'storeConfig', StoreConfig>
    | Query<'checkoutAgreements', CheckoutAgreement, true>
    | Query<'currencyData', CurrencyData>
    | Query<'currency', Currencies>
    | Query<'cartDisplayConfig', CartDisplayConfig>
    > {
        return [
            RegionQuery.getCountriesQuery(),
            ReviewQuery.getRatingQuery(),
            ConfigQuery.getQuery(),
            ConfigQuery.getCheckoutAgreements(),
            ConfigQuery.getCurrencyData(),
            ConfigQuery.getCurrencyRates(),
            CartQuery.getCartDisplayConfig(),
        ];
    }
}

export default new ConfigDispatcher();
