import React from "react";
import PizzaForm from './PizzaForm'
import { Route, Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home-wrapper">
            <img className="home-image"
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format$fit=crop&w=1050&q=80"
                alt='tasty looking pizza'
            />
        </div>
    );
}

export default Home