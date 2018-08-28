import React, {Component} from 'react';

const imageHtml = 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Html5_dise%C3%B1o_web.png';
const imageCSS = 'http://icons-for-free.com/free-icons/png/512/393273.png';
const imageJS = 'http://pluspng.com/img-png/javascript-vector-png-javascript-vector-logo-600.png';
const imageTS = 'https://static.thinkster.io/topics/ts.png';
const imagemdb = 'https://rahulvishwakarma.files.wordpress.com/2016/06/mongodb_slide.png?w=640';
const imagenodeJS = 'https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png';
const imageWebpack = 'https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png';
const imageGulp = 'https://cdn.iconscout.com/public/images/icon/free/png-512/gulp-logo-brand-develo' +
        'pment-tools-3bde9c5a88c65c23-512x512.png';
const imageReact = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-' +
        'React-icon.svg.png';
const imageLaravel = 'https://cdn4.iconfinder.com/data/icons/logos-3/256/laravel-512.png';
const imageSass = 'http://panomara.nl/me/img/tools/sass.png';
const imageFirebase = 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png';

class Skills extends Component {
    render() {
        return (
            <div className="row">
                <div className="chips">
                    <p>HTML</p>
                    <img className="tech-icon" src={imageHtml} alt="Html"/>
                </div>
                <div className="chips">
                    <p>CSS</p>
                    <img className="tech-icon" src={imageCSS} alt="Css"/>
                </div>
                <div className="chips">
                    <p>JAVASCRIPT</p>
                    <img
                        style={{
                        'display': 'inline-block',
                        'margin-left': '23px',
                        'border-radius': '8px'
                    }}
                        className="tech-icon"
                        src={imageJS}
                        alt="JS"/>
                </div>
                <div className="chips">
                    <p>TYPESCRIPT</p>
                    <img
                        style={{
                        'display': 'inline-block',
                        'margin-left': '23px',
                        'border-radius': '10px'
                    }}
                        className="tech-icon"
                        src={imageTS}
                        alt="Typescript"/>
                </div>
                <div className="chips">
                    <p>MONGO DB</p>
                    <img
                        style={{
                        'display': 'inline-block',
                        'margin-left': '20px'
                    }}
                        className="tech-icon"
                        src={imagemdb}
                        alt="Mongo DB"/>
                </div>
                <div className="chips">
                    <p>NODE JS</p>
                    <img
                        style={{
                        'display': 'inline-block',
                        'margin-left': '10px'
                    }}
                        className="tech-icon"
                        src={imagenodeJS}
                        alt="Node JS"/>
                </div>
                <div className="chips">
                    <p>WEBPACK</p>
                    <img
                        style={{
                        'display': 'inline-block',
                        'margin-left': '10px'
                    }}
                        className="tech-icon"
                        src={imageWebpack}
                        alt="webp-img"/>
                </div>
                <div className="chips">
                    <p>GULP</p>
                    <img className="tech-icon" src={imageGulp} alt="Gulp images"/>
                </div>
                <div className="chips">
                    <p>REACT</p>
                    <img
                        style={{
                        'display': 'inline-block',
                        'width': '60px',
                        'height': '40%'
                    }}
                        src={imageReact}
                        alt="Imagen React"/>
                </div>
                <div className="chips">
                    <p>LARAVEL</p>
                    <img
                        style={{
                        'display': 'inline-block',
                        'margin-left': '10px'
                    }}
                        className="tech-icon"
                        src={imageLaravel}
                        alt="Larav"/>
                </div>
                <div className="chips">
                    <p>SCSS</p>
                    <img className="tech-icon" src={imageSass} alt="Scss img"/>
                </div>
                <div className="chips">
                    <p>FIREBASE</p>
                    <img
                        style={{
                        'display': 'inline-block',
                        'width': '42px',
                        'height': '60px',
                        'margin-left': '13px'
                    }}
                        src={imageFirebase}
                        alt="FirebImage"/>
                </div>
            </div>
        );
    }
}

export default Skills;