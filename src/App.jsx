import Header from "./components/header/header";
import Section from "./components/content/content";
import Footer from "./components/footer/footer";


export default function Main() {
    return (
        <main className="container-fluid m-0 p-0">
            <Header />
            <Section />
            <Footer />
        </main>
    )
}