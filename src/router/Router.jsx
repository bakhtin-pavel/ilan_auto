import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout, Main, Catalog, PremiumCar } from '../pages';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path='catalog' element={<Catalog />} />
                <Route path='premium_car' element={<PremiumCar />} />
            </Route>
        </Routes>
    </Router>
);

export default AppRouter;