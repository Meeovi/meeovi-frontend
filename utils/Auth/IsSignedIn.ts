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

import { getAuthorizationToken } from './Token';

/** @namespace ~/utils/Auth/IsSignedIn/isSignedIn */

export const isSignedIn = (): boolean => {
    const hasAuthToken = !!getAuthorizationToken();

    if (!hasAuthToken) {
        import('./LogoutIfSignedIn').then(
            /** @namespace ~/utils/Auth/IsSignedIn/isSignedIn/then */
            ({ logoutIfSignedIn }) => {
                logoutIfSignedIn();
            },
        );
    }

    return hasAuthToken;
};

/** @namespace ~/utils/Auth/IsSignedIn/isInitiallySignedIn */
export const isInitiallySignedIn = (): boolean => !!getAuthorizationToken();
