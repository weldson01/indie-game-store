import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <>
        <Header />
        <Sidebar />
        <main className="bg-primary pl-72">
            {children}
        </main>
    </>
}

export default Layout