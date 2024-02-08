import Footer from "./Footer/footer";
import { Header1 } from "./Header1/header";


const Layout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header1 />
        {children}
        <Footer />
    </>
);

export default Layout;