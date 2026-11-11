import { Footer } from './components/layout/Footer.jsx';
import { Header } from './components/layout/Header.jsx';
import { AppRoutes } from './routes/AppRoutes.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import { ScrollButton } from './components/ScrollButton.jsx';

export const App = () => {
    return (
        <>
            <ThemeProvider>
                <Header />
                <main className="m-0 p-0 flex flex-col justify-center items-center gap-5 min-h-[calc(100vh-10rem)]">
                    <AppRoutes />
                    <ScrollButton />
                </main>
                <Footer />
            </ThemeProvider>
        </>
    );
};
