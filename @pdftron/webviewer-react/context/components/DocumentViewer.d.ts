import React from 'react';
import type { WebViewerOptions, WebViewerInstance } from '@pdftron/webviewer';
export declare type TProps = {
    className?: string;
    onReady?: (instance: WebViewerInstance) => void;
} & WebViewerOptions;
export declare type TRef = React.RefObject<HTMLDivElement>;
declare const DocumentViewer: React.ForwardRefExoticComponent<{
    className?: string | undefined;
    onReady?: ((instance: WebViewerInstance) => void) | undefined;
} & WebViewerOptions & React.RefAttributes<TRef>>;
export default DocumentViewer;
