import React from 'react'
import Home from "./home"
import { Route,Switch } from 'react-router'
import contact from './pages/contact'
import char from './pages/char'

const app = () => {
  return (
    <>
    <Switch>
            <Route exact path="/" component={Home}></Route>
            
            <Route  path="/contact" component= {contact}></Route>
            <Route  path="/char" component= {char}></Route>
           
      </Switch>
    </>
  )
}

export default app
