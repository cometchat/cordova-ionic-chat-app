import '../../stencil.core';
import { ComponentInterface } from '../../stencil.core';
import { Mode } from '../../interface';
export declare class Reorder implements ComponentInterface {
    mode: Mode;
    onClick(ev: Event): void;
    render(): JSX.Element;
}
