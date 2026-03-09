import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
    title: "にいがた郷里共創ラボ",
    description: "にいがたの「農村」を、教育と感動の舞台へ。",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <body>
                <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Header />
                    <main style={{ flex: 1 }}>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
