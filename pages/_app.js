import React from 'react'
import App, { Container } from 'next/app'
import Nav from "../components/Nav"
import UtilityBar from "../components/UtilityBar"
import Footer from "../components/Footer"

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props

        return <Container>
            <UtilityBar/>
            <header id="header">
                <div className="flex">
                    <div className="g1-flex4 g2-flex6 g3-flex12">
                        <h1><a href="/"><img src="http://dev.happylager.com/assets/images/happylager.svg" width="300" height="125" alt="Happy Lager - Enjoying Every Bit - Since 2006"/></a></h1>
                        <Nav/>
                    </div>
                </div>
            </header>
            <Component {...pageProps} />
            <Footer/>
        </Container>
    }
}