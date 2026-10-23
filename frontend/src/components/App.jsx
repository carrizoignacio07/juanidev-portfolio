import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';
import { AppRoutes } from '../routes/AppRoutes.jsx';

export const App = () => {
    return (
        <>
            <Header />
            <AppRoutes />
            <Footer />
        </>
    );
};
