
import styles from '@/styles/scss/Home.module.scss'
import Header from './Header'
import Footer from './Footer'


export default function MainLayout({ children }: { children: JSX.Element}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
