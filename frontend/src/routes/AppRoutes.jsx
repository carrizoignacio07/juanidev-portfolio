import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { StackPage } from '../pages/StackPage';
import { ThanksPage } from '../pages/ThanksPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/stack" element={<StackPage />} />
            <Route path="/thanks" element={<ThanksPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
