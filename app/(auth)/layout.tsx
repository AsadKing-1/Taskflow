export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return(
        <main className="mesh-bg w-full min-h-screen text-white flex items-center justify-center">
            {children}
        </main>
    )
}