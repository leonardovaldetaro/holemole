import './styles/global.css';
import Header from '../app/_components/header';
import Footer from './_components/footer';


export const metadata = {
  title: 'Holé Molé - We serve dishes inspired by Mexican cuisine',
  description: 'Desenvolvido por Leonardo Valdetaro',
  icons: {
    icon: '/favicon.ico'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
