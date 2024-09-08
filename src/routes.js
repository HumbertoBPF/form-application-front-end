import Form from 'pages/Form';
import './App.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import NotFound from 'pages/NotFound';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Form />} />
            <Route path="*" element={<NotFound />} />
        </>
    )
);

export default router;
