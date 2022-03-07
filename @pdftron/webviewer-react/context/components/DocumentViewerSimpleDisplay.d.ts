import React from 'react';
import type { TRef } from './DocumentViewer';
import type { WebViewerInstance } from '@pdftron/webviewer';
declare const DocumentViewerSimpleDisplay: React.ForwardRefExoticComponent<{
    className?: string | undefined;
    onReady?: ((instance: WebViewerInstance) => void) | undefined;
} & import("@pdftron/webviewer").WebViewerOptions & React.RefAttributes<TRef>>;
export default DocumentViewerSimpleDisplay;
