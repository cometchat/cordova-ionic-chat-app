import '../../stencil.core';
import { ComponentInterface } from '../../stencil.core';
import { Config, Mode, SpinnerTypes } from '../../interface';
export declare class RefresherContent implements ComponentInterface {
    mode: Mode;
    config: Config;
    /**
     * A static icon to display when you begin to pull down
     */
    pullingIcon?: string | null;
    /**
     * The text you want to display when you begin to pull down
     */
    pullingText?: string;
    /**
     * An animated SVG spinner that shows when refreshing begins
     */
    refreshingSpinner?: SpinnerTypes | null;
    /**
     * The text you want to display when performing a refresh
     */
    refreshingText?: string;
    componentWillLoad(): void;
    render(): JSX.Element[];
}
