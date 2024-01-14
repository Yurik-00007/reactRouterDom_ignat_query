import React, {useEffect} from 'react';
import './App.css';
import {Navigate, NavLink, Route, Routes, useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
/*
    useEffect(() => {
        if (true) navigate('/login')

    }, []);
*/
    return (
        <div>
            {/*1.//будет срабатывать дерганье сначало на profile затем на login*/}
            {/*
            {true && <Navigate to={'/login'}/>}
            profile
            <button onClick={() => {
                navigate('/login')
            }}>logout</button>
*/}
            {/*2.//не будет дерганье при тернарнике сразу на login*/}
{/*
            {true
                ? <Navigate to={'/login'}/>
                :<>
                    profile
                    <button onClick={() => {
                        navigate('/login')
                    }}>logout</button></>}
*/}
            {/*3.//у navigate может быть не только путь но и
            числовое значение которое возвращает педидущий вкладку(-1)
            так же может быть положительное(2)*/}

            profile
            <button onClick={() => {
                navigate(1)
            }}>logout</button>


            {/*не сработало*/}
            {/*<button onClick={()=><Navigate to={'/login'}/>}>logout</button>*/}
        </div>
    )
}

function App() {

    return (
        <div className="App">
            <div className={'nav'}>
                <div><NavLink to={'/'}>main</NavLink></div>
                <div><NavLink to={'/login'}>login</NavLink></div>
                <div><NavLink
                    to={'/profile'}>profile</NavLink></div>
                <div><NavLink
                    to={'/profile/settings'}
                >
                    settings
                </NavLink>
                </div>
            </div>

            <div className={'context'}>
                <Routes>
                    <Route path={'/404'} element={<h1>404: PAGE NOT FOUND</h1>}/>

                    <Route path={'/*'} element={<Navigate to={'/404'}/>}/>

                    <Route path={'/'} element={<div>main</div>}/>
                    <Route path={'/login'} element={<div>login</div>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/profile/settings'} element={<div>settings</div>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;


