import React from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        "dni": "27000000",
        "name": "Juan Perez",
        "age": 37,
    },
    {
        "dni": "30000000",
        "name": "Otro",
        "age": 37,
    },
    {
        "dni": "33000000",
        "name": "Luis Martinez",
        "age": 37,
    },
];

const CustomersContainer = props => {
    // modificar
    const handleAddNew = () => {};

    const renderBody = customers => (
        <div>
            <CustomersList 
                customers = {customers}
                urlPath = {'customer/'} /* la base para despues agregar edir delete*/
            ></CustomersList>
            <CustomersActions>
                <button onClick={handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );

    return (
        <div>
            <AppFrame 
                header={'Listado de clientes'}
                // le pasamos una lista de customers
                body={renderBody(customers)}
            ></AppFrame>
        </div>
    );
};

CustomersContainer.propTypes = {
    
};

export default CustomersContainer;