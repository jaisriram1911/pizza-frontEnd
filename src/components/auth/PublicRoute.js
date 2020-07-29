import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Footer from '../page/footer/footer'
import Menu from '../page/navbar/Menu'

export const PublicRoute = ({ component: Component , ...rest})=>{
    return (
        <Route {...rest}  component={(props)=>(
            <div>
                <Menu />
                <Component {...props} />
                <Footer />
            </div>
        )}
        />
    )
}