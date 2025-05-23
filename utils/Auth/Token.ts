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

import jwtDecode from 'jwt-decode';

import BrowserDatabase from '~/utils/BrowserDatabase';
import { debounce } from '~/utils/Request/Debounce';
import { getStoreState } from '~/utils/Store';

import {
    AUTH_TOKEN, MILLISECONDS_IN_SECOND, ONE_HOUR_IN_SECONDS, TOKEN_REFRESH_DELAY,
} from './Config';
import { Token, TokensByWebsite } from './Token.type';

/** @namespace ~/utils/Auth/Token/setAuthorizationToken */
export const setAuthorizationToken = (token: string | null): void => {
    if (token) {
        const { website_code } = window;

        const state = getStoreState();
        const {
            access_token_lifetime = ONE_HOUR_IN_SECONDS,
        } = state.ConfigReducer || {};

        const tokens: TokensByWebsite = BrowserDatabase.getItem(AUTH_TOKEN) || {};
        const { exp } = jwtDecode<{ exp: number }>(token) || {};

        tokens[ website_code ] = { token, exp: exp * MILLISECONDS_IN_SECOND };
        BrowserDatabase.setItem(tokens, AUTH_TOKEN, Number(access_token_lifetime) * ONE_HOUR_IN_SECONDS);
    }
};

/** @namespace ~/utils/Auth/Token/deleteAuthorizationToken */
export const deleteAuthorizationToken = (): void => {
    const { website_code } = window;

    const tokens: TokensByWebsite = BrowserDatabase.getItem(AUTH_TOKEN) || {};

    tokens[ website_code ] = undefined;
    BrowserDatabase.setItem(tokens, AUTH_TOKEN);
};

/** @namespace ~/utils/Auth/Token/getAuthorizationToken */
export const getAuthorizationToken = (): string | null => {
    const { website_code } = window;
    const tokens: TokensByWebsite = BrowserDatabase.getItem(AUTH_TOKEN) || {};

    const token: Token | undefined | null | string = tokens[ website_code ];

    if (!token || typeof token === 'string') {
        return null;
    }

    const { token: tokenString, exp } = token;

    // Magento now has two parameters to affect the auth token lifetime
    // 1. access_token_lifetime affects the session liftime, that can be prolonged every time you make an action to the backend
    // 2. JWT exp field affects JWT liftime and cannot be prolonged
    // Thus if you set access_token_lifetime 2h and JWT expires after the 1h, then you will get the "The current customer isn't authorized." error.
    if (tokenString && Date.now() < exp) {
        return tokenString;
    }

    return null;
};

/** @namespace ~/utils/Auth/Token/refreshAuthorizationToken */
export const refreshAuthorizationToken = debounce(
    () => setAuthorizationToken(getAuthorizationToken()),
    TOKEN_REFRESH_DELAY,
);
