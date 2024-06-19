import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"

const Layout = ({children}:{children:React.ReactNode})=>{
    return<>
        <Header/>
        <Sidebar/>
        {children}
    </>
}

export default Layout