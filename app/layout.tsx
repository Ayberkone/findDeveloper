import type { Metadata } from 'next'
import './globals.css'
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'Find Developer App',
  description: 'Find Developer Next App'
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{metadata.title as string}</title>
      <meta name="description" content={metadata.description} />
    </head>
    <body>
      {children}
    </body>
  </html>
)

export default RootLayout
