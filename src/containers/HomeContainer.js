import React from 'react';
//import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomersActions  from './../components/CustomersActions';

const HomeContainer = props => {
    const handleOnClick = () => {
        console.log('handleOnClick');
    }
    return (
        <div>
            <AppFrame
                header='Inicio'
                body={
                    <div>
                        Esta es la pantalla inicial
                        <CustomersActions>
                            <button onClick={handleOnClick}> Listado de clientes </button>
                            {/*<Link to='/customers'> </Link>*/}
                        </CustomersActions>
                    </div>
                }
            ></AppFrame>
        </div>
    );
};

export default HomeContainer;