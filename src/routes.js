import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home/Home'
import Storefront from './components/Shop/Storefront'
import Cart from './components/Shop/Cart'
import UserDashboard from './components/UserDashboard'
import QuizHome from './components/QuizHome/QuizHome'
import SortingQuiz from './components/SortingQuiz/SortingQuiz'

export default (
    <Switch>
        <Route path = '/' component = {Login} exact />
        <Route path = '/signup' component = {SignUp}/>
        <Route path = '/dashboard' component = {UserDashboard} />
        <Route path = '/home' component = {Home}/>
        <Route path = '/store' component = {Storefront}/>
        <Route path = '/cart' component = {Cart}/>
        <Route path = '/quizhome' component = {QuizHome}/>
        <Route path = '/sortingquiz' component = {SortingQuiz}/>
    </Switch>
)