import React, { PropsWithChildren, ReactNode } from 'react';
import type { WebViewerInstance } from '@pdftron/webviewer';
export declare type TProviderProp = {
    children: ReactNode;
    instance?: WebViewerInstance;
};
export declare type TContextState = {
    instance: WebViewerInstance | undefined;
    setInstance(arg: WebViewerInstance): void;
};
declare const DocumentViewerContext: React.Context<TContextState>;
declare function DocumentViewerProvider({ children, instance }: PropsWithChildren<TProviderProp>): JSX.Element;
export { DocumentViewerContext, DocumentViewerProvider };
