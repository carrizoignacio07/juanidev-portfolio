import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { AppRoutes } from './routes/AppRoutes.jsx';
import { ProjectsProvider } from './context/ProjectsProvider.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';

export const App = () => {
    return (
        <>
            <ThemeProvider>
                <ProjectsProvider>
                    <Header />
                    <main className="flex flex-col justify-center items-center gap-5 min-h-[calc(100vh-10rem)]">
                        <AppRoutes />
                    </main>
                    <Footer />
                </ProjectsProvider>
            </ThemeProvider>
        </>
    );
};
