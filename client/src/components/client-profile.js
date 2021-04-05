import React from 'react';

const ClientProfile = () => {
    return(
        <div className="jumbotron container-sm">
        <h1 className="display-3">John Doe Doesky</h1>
        <hr className="my-4"/>
        <p className="lead">something@mail.ru</p>
        
        <p>Almaty</p>
        <p>Dostyk 42</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="!#" role="button">Узнать больше</a>
        </p>
        </div>
    )
}
export default ClientProfile;