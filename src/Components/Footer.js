import React, {Component} from 'react';

const imageReact = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-' +
'React-icon.svg.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer color-f">
                <div className="content has-text-centered">
                    <p className="author">Cristian Samboni</p>
                    <div className="column is-mobile"></div>
                    <p className="email">chrixz512@hotmail.com</p>
                    <p><strong>Developer with:</strong></p>
                    <img style={{'width':'33%'}} src={imageReact} alt="R.dev" />
                </div>

                {/*Twitter timeline*/}
            </div>
        );
    }
}

export default Footer;