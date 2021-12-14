import React from 'react';
import PropTypes from 'prop-types';
//import './director-view.scss';

// details of a single director
export class DirectorView extends React.Component {
    render() {
        const { director } = this.props;
        return <div className="director-view">
            <div className="director-name">
                <span className="label">Name: </span>
                <span className="value">{director.name}</span>
            </div>
            <div className="director-bio">
                <span className="label">Bio: </span>
                <span className="value">{director.bio}</span>
            </div>
            <div className="director-birthdate">
                <span className="label">Birth-Date: </span>
                <span className="value">{director.birthDate}</span>
            </div>
            <div className="director-deathdate">
                <span className="label">Death-Date: </span>
                <span className="value">{director.deathDate}</span>
            </div>
        </div>
     }
}

// define the property types of the prop acquired
DirectorView.propTypes = {
    director: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired
    }).isRequired
};