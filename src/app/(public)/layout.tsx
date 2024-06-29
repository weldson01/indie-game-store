export default function PublicLayout({children}:{children:React.ReactNode}){
    return <main className="flex flex-col min-h-screen max-w-full">
        {children}
    </main>
}