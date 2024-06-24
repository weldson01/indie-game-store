import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import RecentActivityProvider from "@/context/RecentActivity"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <RecentActivityProvider>
        <Header />
        <Sidebar />
        <main className="bg-primary pl-72">
            {children}
        </main>
    </RecentActivityProvider>
}

export default Layout