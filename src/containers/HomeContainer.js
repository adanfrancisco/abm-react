import React from 'react';
//import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomersActions  from './../components/CustomersActions';

const HomeContainer = props => {
    const handleOnClick = () => {
        console.log('handleOnClick');
        props.history.push('/customers')
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
//withRouter sirve para inyectar los atriburos de router de
//react dom su es llamado dentro de una función en el router
export default withRouter(HomeContainer);