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

/**
 * Set of helpers related to CSS
 * @class CSS
 * @namespace ~/utils/CSS
 */
export class CSS {
    /**
     * Change CSS custom property in referenced node scope
     * @static
     * @param  {HTMLElement} ref React reference to an HTML element (node).
     * @param  {String} name CSS variable name (without `--`).
     * @param  {String} value CSS variable value.
     * @return {void}
     * @memberof CSS
     */
    static setVariable(
        ref: React.RefObject<HTMLElement>,
        name: string,
        value: string | number | null,
    ): void {
        if (ref && ref.current) {
            ref.current.style.setProperty(
                `--${name}`,
                value === null ? null : String(value),
            );
        }
    }
}

/** @namespace ~/utils/CSS/getElementHeight */
export const getElementHeight = (id: string): number => Array.from(
    document.getElementsByClassName(id),
).reduce((acc, item) => {
    const { offsetHeight } = item as HTMLElement;

    return acc + offsetHeight;
}, 0);

/** @namespace ~/utils/CSS/getFixedElementHeight */
export const getFixedElementHeight = (): Record<string, number> => {
    const top = getElementHeight('FixedElement-Top');
    const bottom = getElementHeight('FixedElement-Bottom');

    return {
        total: top + bottom,
        top,
        bottom,
    };
};

/** @namespace ~/utils/CSS/isRtl */
export const isRtl = (): boolean => document.documentElement.getAttribute('dir') === 'rtl';

export default CSS;
