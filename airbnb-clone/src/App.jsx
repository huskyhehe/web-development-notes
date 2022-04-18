import React from "react"
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {

    
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}       // should give a key
                item={item}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}