import Form from 'pages/Form';
import './App.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Form />} />)
);

export default router;
