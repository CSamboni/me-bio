import React, {Component} from 'react';

class Career extends Component {
    render() {
        return (
            <div>
                <div className="column-is-mobile">
                    <div className="title bio">EDUCATION
                    </div>
                </div>
                {/*Card 1 (Education)*/}
                <div className="card margin-card">
                    <div className="card-header">
                        <p className="card-header-title">
                            <p
                                style={{
                                'backgroundColor': 'green',
                                'borderRadius': '5px',
                                'color': 'white',
                                'padding': '10px'
                            }}>EDUCATION</p>
                        </p>
                        <div className="card-content">
                            <div className="content">
                                <p>
                                    <strong>Frontend Web Development.
                                    </strong>
                                </p>
                                <p>Códigofacilito (2015-2018)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Card 2 (Education)*/}
                <div className="card margin-card">
                    <div className="card-header">
                        <p className="card-header-title">
                            <p
                                style={{
                                'backgroundColor': 'green',
                                'borderRadius': '5px',
                                'color': 'white',
                                'padding': '10px'
                            }}>EDUCATION</p>
                        </p>
                        <div className="card-content">
                            <div className="content">
                                <p>
                                    <strong>JavaScript Development
                                    </strong>
                                </p>
                                <p>Códigofacilito (2015-2018)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Card 3 (Education)*/}
                <div className="card margin-card">
                    <div className="card-header">
                        <p className="card-header-title">
                            <p
                                style={{
                                'backgroundColor': 'green',
                                'borderRadius': '5px',
                                'color': 'white',
                                'padding': '10px'
                            }}>EDUCATION</p>
                        </p>
                        <div className="card-content">
                            <div className="content">
                                <p>
                                    <strong>Media & Animations.</strong>
                                </p>
                                <p>Platzi (2014-2017)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Card 4 (Education)*/}
                <div className="card margin-card">
                    <div className="card-header">
                        <p className="card-header-title">
                            <p
                                style={{
                                'backgroundColor': 'green',
                                'borderRadius': '5px',
                                'color': 'white',
                                'padding': '10px'
                            }}>EDUCATION</p>
                        </p>
                        <div className="card-content">
                            <div className="content">
                                <p>
                                    <strong>Networking & Iot.</strong>
                                </p>
                                <p>Fututel SAS (2015-2018)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title bio">PROFESSIONAL EXPERIENCE
                </div>
                {/*Card 5 (Professional Experience)*/}
                <div className="card margin-card">
                    <div className="card-header">
                        <p className="card-header-title">
                            <p
                                style={{
                                'backgroundColor': 'gold',
                                'borderRadius': '5px',
                                'color': 'white',
                                'padding': '10px'
                            }}>PROFESSIONAL EXPERIENCE</p>
                        </p>
                        <div className="card-content">
                            <div className="content">
                                <p>
                                    <strong>Technical Support</strong>
                                </p>
                                <p>Attencion, supporting & technical systems computer Maintance. (2012-Current)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Card 6 (Professional Experience)*/}
                <div className="card margin-card">
                    <div className="card-header">
                        <p className="card-header-title">
                            <p
                                style={{
                                'backgroundColor': 'gold',
                                'borderRadius': '5px',
                                'color': 'white',
                                'padding': '10px'
                            }}>PROFESSIONAL EXPERIENCE</p>
                        </p>
                        <div className="card-content">
                            <div className="content">
                                <p>
                                    <strong>Blogger & writer at Fututel SAS</strong>.</p>
                                <p>Writting for post, blogs and publishing documentation and tutorials tech.
                                    (2015-2016)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Card 7 (Professional Experience)*/}
                <div className="card margin-card">
                    <div className="card-header">
                        <p className="card-header-title">
                            <p
                                style={{
                                'backgroundColor': 'gold',
                                'borderRadius': '5px',
                                'color': 'white',
                                'padding': '10px'
                            }}>PROFESSIONAL EXPERIENCE</p>
                        </p>
                        <div className="card-content">
                            <div className="content">
                                <p>
                                    <strong>Web Developer</strong>.</p>
                                <p>Developing for web applications with React & Nodejs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Card 8 (Certificates)*/}
                <div className="title bio">CERTIFICATES | AWARDS</div>
                <div className="card margin-card">
                    <div className="card-header">
                        <p className="card-header-title">
                            <p
                                style={{
                                'backgroundColor': 'blue',
                                'borderRadius': '5px',
                                'color': 'white',
                                'padding': '10px'
                            }}>CERTIFICATES | AWARDS</p>
                        </p>
                        <div className="card-content">
                            <div className="content">
                                <p>
                                    <strong>JavaScript course & design</strong>.</p>
                                <p>Winner of Profesional JavaScript course & design UX. (2017)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Card 9 (Certificates)*/}
                <div className="card margin-card">
                    <div className="card-header">
                        <p className="card-header-title">
                            <p
                                style={{
                                'backgroundColor': 'blue',
                                'borderRadius': '5px',
                                'color': 'white',
                                'padding': '10px'
                            }}>CERTIFICATES | AWARDS</p>
                        </p>
                        <div className="card-content">
                            <div className="content">
                                <p>
                                    <strong>Professional web Developer Course</strong>.</p>
                                <p>Certified by Codigofacilito as a Web Developer.(2018)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Career;