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

import Field from '~/utils/~/graphql/queries-mutations_subscriptions/types/Field';

/** @namespace ~/utils/~/graphql/queries-mutations_subscriptions/types/Fragment */
export class Fragment extends Field {
    __construct(name: string): void {
        super.__construct(name);
        this.name = `... on ${name}`;
    }
}

export default Fragment;
