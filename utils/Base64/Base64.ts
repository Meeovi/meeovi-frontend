/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa-theme
 * @link https://github.com/scandipwa/scandipwa
 */

/** @namespace ~/utils/Base64/encodeBase64 */
export const encodeBase64 = (data: string): string => btoa(data);

/** @namespace ~/utils/Base64/decodeBase64 */
export const decodeBase64 = (data: string): string => atob(data);
