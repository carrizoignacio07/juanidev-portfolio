import { Footer } from './components/layout/Footer.jsx';
import { Header } from './components/layout/Header.jsx';
import { AppRoutes } from './routes/AppRoutes.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import { ScrollButton } from './components/ScrollButton.jsx';

export const App = () => {
    return (
        <ThemeProvider>
            <div className="flex min-h-screen flex-col">
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
                >
                    Skip to content
                </a>
                <Header />
                <main id="main-content" className="flex flex-1 flex-col">
                    <AppRoutes />
                </main>
                <Footer />
            </div>
            <ScrollButton />
        </ThemeProvider>
    );
};
