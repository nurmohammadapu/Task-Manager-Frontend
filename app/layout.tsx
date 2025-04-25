import { Provider } from "@/components/ui/provider"
import Navbar from "@/components/navbar"
import { Toaster } from 'react-hot-toast';

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
        <Toaster position="top-center" />
          <Navbar/>
          {children}
          </Provider>
      </body>
    </html>
  )
}