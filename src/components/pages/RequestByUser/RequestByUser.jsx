import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestByUser } from '../../../api/request.api';
import { RequestCard } from '../../shared/RequestCard/RequestCard';

import './RequestByUser.scss';

export function RequestByUser({ id }) {
    const [request, setRequest] = useState([]);

    const getRequest = async () => {
        const requestFetch = await requestByUser(id);
        setRequest(requestFetch);
    };

    useEffect(() => {
        getRequest();
    }, []);

    if (request.length == 0) {
        return <h3>No tienes solicitudes pendientes.</h3>
    } else {
        return (
            <>
                <h3>Solicitudes:</h3>
                <div className="container__cards">
                    {request.map((el) => (
                        <Link className="link" key={el._id} to={`/requests/${el._id}`}>
                            <RequestCard user={el.userId} shelter={el.shelterId} pet={el.petId}/>
                        </Link>
                        )
                    )}
                </div>
            </>
        )
    }
}