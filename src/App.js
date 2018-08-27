import React, {Component} from 'react';
/*Componentes */
import Header from './Components/Header';
import Career from './Components/Career';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
/*Estilos */
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div className="title bio">SKILLS</div>
                <Skills/>
                <div>
                    <Career/>
                </div>
                <div>
                    <div className="title bio">MY PROJECTS:</div>
                    <Projects/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
