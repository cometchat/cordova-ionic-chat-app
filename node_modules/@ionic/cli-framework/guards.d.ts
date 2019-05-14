import { CommandMetadata, CommandMetadataInput, CommandMetadataOption, HydratedCommandMetadata, ICommand, INamespace, LinkFootnote, PackageJson } from './definitions';
export declare function isNamespace<C extends ICommand<C, N, M, I, O>, N extends INamespace<C, N, M, I, O>, M extends CommandMetadata<I, O>, I extends CommandMetadataInput, O extends CommandMetadataOption>(obj: any): obj is N;
export declare function isCommand<C extends ICommand<C, N, M, I, O>, N extends INamespace<C, N, M, I, O>, M extends CommandMetadata<I, O>, I extends CommandMetadataInput, O extends CommandMetadataOption>(obj: any): obj is C;
export declare function isHydratedCommandMetadata<C extends ICommand<C, N, M, I, O>, N extends INamespace<C, N, M, I, O>, M extends CommandMetadata<I, O>, I extends CommandMetadataInput, O extends CommandMetadataOption>(obj: any): obj is HydratedCommandMetadata<C, N, M, I, O>;
export declare function isPackageJson(obj: any): obj is PackageJson;
export declare function isLinkFootnote(obj: any): obj is LinkFootnote;
