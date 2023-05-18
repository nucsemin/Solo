import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '6-shared/config/routeConfig/routeConfig';
import { PageLoader } from '3-widgets/PageLoader';

function AppRouter() {
    return (
        <div className="page-wrapper">
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </div>
    );
}

export default AppRouter;
