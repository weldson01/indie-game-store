import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import RecentActivityProvider from "@/context/RecentActivity"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <RecentActivityProvider>
        <div className="flex bg-primary text-whiteColor">
            <div className="flex flex-col flex-1">
                <div className="flex items-center">
                    <Sidebar />
                    <Header />
                </div>
                <main className="bg-primary mt-10 flex-1">
                    {children}
                </main>
            </div>
        </div>
    </RecentActivityProvider>
}

export default Layout