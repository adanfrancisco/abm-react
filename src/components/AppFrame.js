import React, { PropTypes } from 'react';
import AppHeader from './AppHeader';

const AppFrame = ({header, body,footer}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={header}/>
                <div>{body}</div>
                <div>Aplicacion Simple de Ejemplo</div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    footer: PropTypes.string,
};

export default AppFrame;