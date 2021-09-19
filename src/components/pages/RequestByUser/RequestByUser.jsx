import React, { useState, useEffect } from 'react';
import { requestByUser } from '../../../api/request.api';
import{ RequestCard }from '../../shared/RequestCard/RequestCard';


export function RequestByUser({ id }) {
    const [request, setRequest] = useState([]);

    const getRequest = async () => {
        const requestFetch = await requestByUser(id);
        setRequest(requestFetch);
    };

    useEffect(() => {
        getRequest();
      }, []);

    return(
        <div className="container__cards">
            {request.map((el) => (<RequestCard key={el._id} request={el.requests}/>))}
        </div>
    );
}