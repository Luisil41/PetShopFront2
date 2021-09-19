import React, { useState, useEffect } from 'react';
import { requestByShelter } from '../../../api/request.api';
import{ RequestCard }from '../../shared/RequestCard/RequestCard';


export function RequestByShelter({ id }) {
    const [request, setRequest] = useState([]);

    const getRequest = async () => {
        const requestFetch = await requestByShelter(id);
        setRequest(requestFetch);
    };

    useEffect(() => {
        getRequest();
      }, []);

    return(
        <div className="container__cards">
            {request.map((el) => (<RequestCard key={el._id} request={el}/>))}
        </div>
    );
}