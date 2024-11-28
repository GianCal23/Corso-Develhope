import React, { useState } from 'react';
import { LanguageContext } from './components/Hello/LanguageContext';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hello from "./components/Hello/Hello"
import Welcome from "./components/Welcome/Welcome"
import AlertClock from "./components/AlertClock/AlertClock";
import Counter from "./components/Counter/Counter";
import UseEffect from "./components/useEffect/useEffect";
import Clock from "./components/useEffect/Clock";
import MouseClicker from "./components/MouseClicker/MouseClicker";
import TodoList from "./components/TodoList/TodoList";
import UncontrolledLogin from "./components/UncontrolledLogin/UncontrolledLogin"
import FocusableInput from "./components/FocusableInput/FocusableInput";
import MountEffectComponent from "./components/FocusableInput/MountEffectComponent";
import Colors from './components/Color/Colors';
import InteractiveWelcome from './components/InteractiveWelcome/InteractiveWelcome'
import Login from './components/InteractiveWelcome/Login'
import Container from "./components/Container/Container";
import GithubUser from './components/GithubUser/GithubUser';

const App = () => {
    const [language, setLanguage] = useState('en')

    function handleSetLanguage(language) {
        setLanguage(language)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome name={"John"} age={20}/>} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/users/:username' />
                <Route path='/users' element={<GithubUser />} />
                <Route path='/login' element={
                    <div>
                        <Login />
                        <InteractiveWelcome />
                        <Welcome />
                    </div>
                }></Route>
                <Route path='/altro' element={<div>
                    <Link to='/' >go to home</Link>|<Link to='/users' >Users</Link>
                    
                    <div>
                        <button onClick={() => handleSetLanguage('it')}>IT</button>
                        <button onClick={() => handleSetLanguage('en')}>EN</button>
                        <LanguageContext.Provider value={language}>
                            <Hello />
                        </LanguageContext.Provider>
                    </div>
                    <UncontrolledLogin />
                    <FocusableInput />
                    <MountEffectComponent />
                    <TodoList />
                    <Colors colors={[
                        { id: 1, name: "red" },
                        { id: 2, name: "blue" },
                        { id: 3, name: "yellow" }

                    ]} />

                    <Container title={"sono un titolo"}>
                        <AlertClock />
                        <UseEffect />
                        <Clock />
                        <MouseClicker />
                    </Container>
                </div>} />



            </Routes>
        </BrowserRouter >
    )
}

export default App