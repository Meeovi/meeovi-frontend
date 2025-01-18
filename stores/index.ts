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
import { Reducer } from 'redux';

import BreadcrumbsReducer from '~/stores/Breadcrumbs/Breadcrumbs.reducer';
import CartReducer from '~/stores/Cart/Cart.reducer';
import CategoryReducer from '~/stores/Category/Category.reducer';
import CheckoutReducer from '~/stores/Checkout/Checkout.reducer';
import CmsReducer from '~/stores/Cms/Cms.reducer';
import ConfigReducer from '~/stores/Config/Config.reducer';
import ContactFormReducer from '~/stores/ContactForm/ContactForm.reducer';
import MetaReducer from '~/stores/Meta/Meta.reducer';
import MyAccountReducer from '~/stores/MyAccount/MyAccount.reducer';
import NavigationReducer from '~/stores/Navigation/Navigation.reducer';
import NoMatchReducer from '~/stores/NoMatch/NoMatch.reducer';
import OfflineReducer from '~/stores/Offline/Offline.reducer';
import OverlayReducer from '~/stores/Overlay/Overlay.reducer';
import PopupReducer from '~/stores/Popup/Popup.reducer';
import ProductCompareReducer from '~/stores/ProductCompare/ProductCompare.reducer';
import ProductListInfoReducer from '~/stores/ProductListInfo/ProductListInfo.reducer';
import StoreInPickUpReducer from '~/stores/StoreInPickUp/StoreInPickUp.reducer';
import UrlRewritesReducer from '~/stores/UrlRewrites/UrlRewrites.reducer';
import WishlistReducer from '~/stores/Wishlist/Wishlist.reducer';

export type StaticReducerKeys =
| 'ProductListReducer'
| 'ProductListInfoReducer'
| 'CartReducer'
| 'WishlistReducer'
| 'NoMatchReducer'
| 'MyAccountReducer'
| 'NavigationReducer'
| 'OverlayReducer'
| 'OfflineReducer'
| 'PopupReducer'
| 'UrlRewritesReducer'
| 'ConfigReducer'
| 'MetaReducer'
| 'CheckoutReducer'
| 'ContactFormReducer'
| 'ProductCompareReducer'
| '~/storesInPickUpReducer'
| 'BreadcrumbsReducer'
| 'ProductReducer'
| 'CategoryReducer'
| 'CmsReducer';

/** @namespace Store/Index/getStaticReducers */
export const getStaticReducers = (): Record<StaticReducerKeys, Reducer> => ({
    ProductListInfoReducer,
    CartReducer,
    WishlistReducer,
    NoMatchReducer,
    MyAccountReducer,
    NavigationReducer,
    OverlayReducer,
    OfflineReducer,
    PopupReducer,
    UrlRewritesReducer,
    ConfigReducer,
    MetaReducer,
    CheckoutReducer,
    ContactFormReducer,
    ProductCompareReducer,
    StoreInPickUpReducer,
    BreadcrumbsReducer,
    CategoryReducer,
    CmsReducer,
} as Record<StaticReducerKeys, Reducer>);
