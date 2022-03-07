

import { DocumentViewerProvider } from '@pdftron/webviewer-react'
import App from './App'

export default function Providers () {
  return  (
    <DocumentViewerProvider>
      <App />
    </DocumentViewerProvider>
  )
}