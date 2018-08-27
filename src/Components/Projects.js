import React, {Component} from 'react';
import data from '../Data/items';

class Projects extends Component {
    items() {
        return data
            .items
            .map(item => {
                return (
                    <div className="card space">
                        <div className="card-image">
                            <div className="image is-4by3">
                                <img src={item.ImageUrl} alt="representation"/>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{item.title}</p>
                                <p className="subtitle is-6 decorar-sub">{item.subtitle}</p>
                            </div>
                            <div className="content">
                                {item.description}
                            </div>
                        </div>
                    </div>
                );
            })
    }

    render() {
        return (
            <div className="row">
                {this.items()}
            </div>
        );
    }

}

export default Projects;