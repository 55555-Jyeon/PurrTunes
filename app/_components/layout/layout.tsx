import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full max-w-[1920px] h-full flex flex-col items-center">
            <Header />
            <main className="flex-1 mt-20">{children}</main>
            <Footer />
        </div>
    )
}
export default Layout
