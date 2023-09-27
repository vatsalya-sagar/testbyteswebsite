import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main id="main-layout">
                {children}
            </main>
            <Footer />
        </>
    )
}