export default function RegisterPage() {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <h1 className="text-primary-dim text-center font-bold text-4xl">Aurora Todo</h1>
                <p className="text-center text-on-surface-variant">Join the Ethereal Core</p>
            </div>
            <div className="glass-panel spectral-shadow rounded-xl p-3">
                <form className="flex flex-col p-4 gap-2">
                    <h1 className="text-2xl font-bold pb-5">Create Account</h1>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-on-surface-variant font-semibold" htmlFor="username">FULL NAME</label>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                            <input type="text" id="username" className="bg-surface-variant pl-9 text-on-surface-variant placeholder:text-on-surface-variant/50 border border-on-surface-variant/30 p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-on-surface-variant font-semibold" htmlFor="email">EMAIL ADDRESS</label>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <input type="email" id="email" className="bg-surface-variant pl-9 text-on-surface-variant placeholder:text-on-surface-variant/50 border border-on-surface-variant/30 p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-on-surface-variant font-semibold" htmlFor="password">PASSWORD</label>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                            </svg>
                            <input type="password" id="password" className="bg-surface-variant pl-9 text-on-surface-variant placeholder:text-on-surface-variant/50 border border-on-surface-variant/30 p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                    </div>
                    <button type="submit" className="mt-4 p-2 rounded-4xl text-black btn-primary-glow hover:bg-primary-fixed-dim flex items-center gap-2 justify-center hover:gap-3 transition-all duration-300">
                        <p>Register</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}