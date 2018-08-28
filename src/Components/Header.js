import React, {Component} from 'react';
import '../App.css';
import {SocialIcon} from 'react-social-icons';

const ImageUrl = 'https://avatars1.githubusercontent.com/u/24655632?s=460&v=4';
class Header extends Component {
    render() {
        return (
            <div className="column-is-mobile">
                <div className="image is-128x128">
                    <img className="is-rounded profile" src={ImageUrl} alt="Profile"/>
                </div>
                <div
                    className="tile is-ancestor"
                    style={{
                    'margin': '10px'
                }}>
                    {/*Description*/}
                    <div className="is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <div className="tile is-child notification is-primary">
                                    <p className="title">Hi! My name is Cristian Samboni.</p>
                                    <p className="subtitle">I'm a Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Section Media*/}
                <div className="row social">
                    <SocialIcon
                        style={{
                        'margin': '10px'
                    }}
                        url="https://www.facebook.com/CrisstianSambonii"
                        network="facebook"/>
                    <SocialIcon
                        style={{
                        'margin': '10px'
                    }}
                        url="https://github.com/csamboni"
                        network="github"/>
                    <SocialIcon
                        style={{
                        'margin': '10px'
                    }}
                        url="https://twitter.com/Cris_SamJS"
                        network="twitter"/>
                    <SocialIcon
                        style={{
                        'margin': '10px'
                    }}
                        url="https://medium.com/@CristianSAM"
                        network="medium"/>
                </div>
            </div>
        );
    }
}

export default Header;