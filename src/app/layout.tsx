import TheHeader from '@/components/TheHeader'
import './globals.css'			// глобальные стили
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'// гугл шрифты
import TheFooter from '@/components/TheFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {  // для сео оптимизации
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
  	children, // это страницы
}: {
  	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TheHeader/>
				<main className='container'>
					{children}
				</main>
				
				<TheFooter />
			</body>
		</html>
	)
}

// layout.tsx -> это корневой файл
