import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            borders: [
                'home',
                'about',
                'portfolio',
                'contact',
            ],
            selected: 0
        };

        this.navItemSelected=this.navItemSelected.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const value = window.scrollY;
    }

    navItemSelected(index) {
        const id = this.state.borders[index];
        document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
    }

    render() {
        return (
            <div >
                <Navbar onChange={this.navItemSelected}/>
                <Home/>
                <About/>
                <Portfolio/>
                <Contact/>
            </div>
        );
    }
}

export default App;
