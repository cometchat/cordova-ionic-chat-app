import '../../stencil.core';
import { ComponentInterface } from '../../stencil.core';
import { Config } from '../../interface';
export declare class SkeletonText implements ComponentInterface {
    el: HTMLElement;
    config: Config;
    /**
     * If `true`, the skeleton text will animate.
     */
    animated: boolean;
    /**
     * @deprecated - Use CSS instead. The width of the skeleton text. If supplied, it will override the CSS style.
     */
    width?: string;
    calculateWidth(): {
        style: {
            width: string;
        };
    } | undefined;
    render(): JSX.Element;
    hostData(): {
        class: {
            'skeleton-text-animated': boolean;
            'in-media': boolean;
        };
    } | {
        style: {
            width: string;
        };
        class: {
            'skeleton-text-animated': boolean;
            'in-media': boolean;
        };
    };
}
