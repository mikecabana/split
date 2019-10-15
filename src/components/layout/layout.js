import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
    return <div className="layout">
        <Head>
            <title>Spl.it | An easy way to split your expenses with friends, family or the guy who leaves you with the bill at the end of the night!</title>
            <link rel="stylesheet" type="text/css" href="/styles/vendors/bulma.min.css"></link>
            <link rel="stylesheet" type="text/css" href="/styles/style.css"></link>
        </Head>
        <Header></Header>
        <div>
            {props.children}
        </div>
        <Footer></Footer>
    </div>
}

export default Layout;