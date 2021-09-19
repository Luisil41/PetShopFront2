import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestByShelter } from '../../../api/request.api';
import { RequestCard } from '../../shared/RequestCard/RequestCard';


export function RequestByShelter({ id }) {
    const [request, setRequest] = useState([]);

    const getRequest = async () => {
        const requestFetch = await requestByShelter(id);
        setRequest(requestFetch);
    };

    useEffect(() => {
        getRequest();
    }, []);

    const pendingRequests = [];

    request.map((el) => {
        if (el.status === 'pendiente') {
            pendingRequests.push(el);
        }
    })

    if (pendingRequests.length == 0) {
        return <h3>No tienes solicitudes pendientes.</h3>
    } else {
        return (
            <>
                <h3>Solicitudes pendientes:</h3>
                <div className="container__cards">
                    {pendingRequests.map((el) => (
                        <Link key={el._id} to={`/requests/${el._id}`}>
                            <RequestCard user={el.userId} shelter={el.shelterId} pet={el.petId} />
                        </Link>
                        )
                    )}
                </div>
            </>
        )
    }
}