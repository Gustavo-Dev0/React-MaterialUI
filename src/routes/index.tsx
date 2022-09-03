import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';


export default function AppRoutes() {

    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();


    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                label: 'Home',
                path: '/index'
            },
            {
                icon: 'add',
                label: 'Theme',
                path: '/index2'
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path='/index' element={<Dashboard /> } />

            <Route path='/index2' element={
                <>
                    <Button variant="contained" color="secondary" onClick={toggleTheme} sx={{ position: 'absolute', top: '10px', right: '10px' }}>
                        Toggle theme
                    </Button>
                    <Button variant="text" color="primary" onClick={toggleDrawerOpen}>
                        {'<>'}
                    </Button>
                </>
            } />

            {/* <Route path='*' element={<Navigate to="/index" />} /> */}
        </Routes>
    );
}
