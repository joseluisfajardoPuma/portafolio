import Navbar from './Navbar'
import Head from 'next/head';

import {useEffect} from 'react'
import {useRouter} from 'next/router'
import { NProgress } from 'nprogress';
const Layout = ({ children }) => {

    const router = useRouter();

useEffect(() => {

    const handleRouterChange = url => {
        console.log(url)
        NProgress.start();
    }
    router.events.on('routeChangeStart', handleRouterChange)
    router.events.on('routeChangeComplete', () => NProgress.done());

    return () => {
        router.events.off('routeChangeStart', handleRouterChange)
    }

}, [])
    return (
        <>
        
        <Navbar />
        <main className="container py-4">
            {children}


        </main>
        <footer className="bg-dark text-light text-center">
        <div className="cotnainer p-4">
            <h1>&copy; Jose Luis Portafolio</h1>
            <p>2021 - {new Date().getFullYear()}</p>
            <p>All rights Reserverd</p>
        </div>
        </footer>
    </>
    )
}

   


export default Layout;
