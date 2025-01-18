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

import { updateCustomerSignInStatus } from '~/stores/MyAccount/MyAccount.action';
import { deleteCartId } from '~/utils/Cart';
import { removeUid } from '~/utils/Compare';
import getStore, { getStoreState } from '~/utils/Store';

/** @namespace utils/Auth/LogoutIfSignedIn/logoutIfSignedIn */
export function logoutIfSignedIn() {
    const store = getStore();

    const {
        MyAccountReducer: {
            isSignedIn: isCustomerSignedIn = false,
        } = {},
    } = getStoreState();

    const { dispatch } = store;

    if (isCustomerSignedIn) {
        // since logout is async and slow, remove cart id / compare uid
        // and set customer sign in status here on auth token expiration
        deleteCartId();
        dispatch(updateCustomerSignInStatus(false));
        removeUid();

        const MyAccountDispatcher = import('~/stores/MyAccount/MyAccount.dispatcher');

        MyAccountDispatcher.then(
            ({ default: dispatcher }) => dispatcher.logout(true, true, dispatch),
        );
    }
}
