import React from 'react'

import Head from 'next/head'
import Hero from '../components/Hero'
import OnTap from '../components/OnTap'
import HowMade from '../components/HowMade'
import Testimonials from '../components/Testimonials'
import BestBuddies from '../components/BestBuddies'

// ---------------------------------------------------------------------------
// STEP 1 --------------------------------------------------------------------
// ---------------------------------------------------------------------------

// export default () => <h1>Hello World!</h1>

// ---------------------------------------------------------------------------
// STEP 2 --------------------------------------------------------------------
// ---------------------------------------------------------------------------

// export default (props) => <main id="main">
//     <Head>
//         <title>Happy Lager</title>
//
//         {/* ADD HEAD STEP */}
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
//         <meta charSet="utf-8"/>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//         <link rel="stylesheet" type="text/css" href="/static/fonts/stylesheet.css"/>
//         <link rel="stylesheet" type="text/css" href="/static/css/happylager.css"/>
//         {/* ADD HEAD STEP */}
//     </Head>
//     <Hero/>
//     <OnTap/>
//     <HowMade/>
//     <Testimonials/>
//     <BestBuddies/>
// </main>

// ---------------------------------------------------------------------------
// STEP 3 --------------------------------------------------------------------
// ---------------------------------------------------------------------------

import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'
import gql from 'graphql-tag'

const client = new ApolloClient({
    uri: "http://dev.happylager.com/api",
    headers: {
        authorization: 'Bearer Ui1J51Hz49PWdQGIhuteOhNBwcTrwJMidoi8AMtwmn-AI-1hdGc1BqPODcBHVVG9'
    },
    fetch
});

export default class extends React.Component {
    // static async getInitialProps({ req }) {
    //     return client.query({query:gql`{helloWorld}`}).then(res => res.data)
    // }

    static async getInitialProps({ req }) {
        return client.query({query:gql`
                {
                    homepage: entry(section:homepage) {
                        id
                        ...on Homepage {
                            heroImage {
                                url
                                title
                            }
                            testimonials{
                                ...on TestimonialsTestimonial{
                                    id
                                    quote
                                    cite
                                    photo{
                                        url
                                        title
                                    }
                                }
                            }
                            clientLogos{
                                url
                                title
                            }
                        }
                    }
                    onTap: entries(section:work, limit:3) {
                        id
                        title
                        url
                        ...on Work {
                            shortDescription {
                                content
                            }
                            featuredThumb {
                                url(transform: thumb)
                                title
                            }
                        }
                    }
                }
        `}).then(res => res.data)
    }

    render() {
        return <main id="main">
            <Head>
                <title>Happy Lager</title>

                {/* ADD HEAD STEP */}
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" type="text/css" href="/static/fonts/stylesheet.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/happylager.css"/>
                {/* ADD HEAD STEP */}
            </Head>
            <Hero image={this.props.homepage.heroImage[0]}/>
            <OnTap entries={this.props.onTap}/>
            <HowMade/>
            <Testimonials testimonials={this.props.homepage.testimonials}/>
            <BestBuddies logos={this.props.homepage.clientLogos}/>
        </main>
    }
}

// ---------------------------------------------------------------------------
// STEP 4 --------------------------------------------------------------------
// ---------------------------------------------------------------------------

// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from "react-apollo"
// import fetch from 'node-fetch'
// import HeroQuery from '../components/HeroQuery'
//
// const client = new ApolloClient({
//     uri: "http://dev.happylager.com/api",
//     headers: {
//         authorization: 'Bearer Ui1J51Hz49PWdQGIhuteOhNBwcTrwJMidoi8AMtwmn-AI-1hdGc1BqPODcBHVVG9'
//     },
//     fetch
// });
//
// export default class extends React.Component {
//     render() {
//         return <ApolloProvider client={client}>
//                 <main id="main">
//                 <Head>
//                     <title>Happy Lager</title>
//
//                     {/* ADD HEAD STEP */}
//                     <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
//                     <meta charSet="utf-8"/>
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//                     <link rel="stylesheet" type="text/css" href="/static/fonts/stylesheet.css"/>
//                     <link rel="stylesheet" type="text/css" href="/static/css/happylager.css"/>
//                     {/* ADD HEAD STEP */}
//                 </Head>
//                 <HeroQuery/>
//                 <OnTap entries={this.props.onTap}/>
//                 <HowMade/>
//                 <Testimonials testimonials={this.props.homepage && this.props.homepage.testimonials}/>
//                 <BestBuddies logos={this.props.homepage && this.props.homepage.clientLogos}/>
//             </main>
//         </ApolloProvider>
//     }
// }