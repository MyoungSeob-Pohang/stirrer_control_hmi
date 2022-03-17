import React, { useEffect, useReducer, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/Reset.css';
import './css/App.css';
import Main from './pages/Main';
import Menu1 from './pages/Menu1';
import Menu2 from './pages/Menu2';

export const ProjectStateContext = React.createContext();
export const ProjectDispatchContext = React.createContext();

function App() {
    const [checked, setChecked] = useState(true);

    const handleCheckedChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <ProjectStateContext.Provider value={{ checked }}>
            <ProjectDispatchContext.Provider value={{ handleCheckedChange }}>
                <BrowserRouter>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/menu1" element={<Menu1 />} />
                            <Route path="/menu2" element={<Menu2 />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ProjectDispatchContext.Provider>
        </ProjectStateContext.Provider>
    );
}

export default App;
