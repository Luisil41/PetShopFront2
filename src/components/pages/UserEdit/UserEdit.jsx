import React, { useState, useContext, useEffect } from 'react';

import { Button } from '../../shared/Button/Button';
import { Form } from '../../shared/Form/Form';
import { Input } from '../../shared/Input/Input';
import { InputSelect } from '../../shared/InputSelect/InputSelect';

import { UserContext } from '../../../App';
import { editUser, profileUser } from '../../../api/user.api';

export const UserEdit = ({ id }) => {

    const userGlobal = useContext(UserContext);
    const [user, setUser] = useState({});

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            await editUser(id, user);

        } catch (err) {
            console.log(err);
        }
    }

    const getUser = async () => {
        const reqUser = await profileUser(id);
        setUser(reqUser);
    }

    useEffect(() => {
        getUser();
    }, []);

    const handleOnChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <>
            <h3>Editar Usuario</h3>
            <Form onSubmit={submitForm} method="PUT">
                <Input type="text" name="fullName" placeholder="Usuario" label="Usuario" onChange={handleOnChange} value={user?.fullName} />
                <Input type="email" name="email" placeholder="Correo Electrónico" label="Correo Electrónico" onChange={handleOnChange} value={user?.email} />
                <Input type="text" name="phone" placeholder="Teléfono" label="Teléfono" onChange={handleOnChange} value={user?.phone} />
                <InputSelect name="province" label="Provincia" value={user.province} >
                    <option value='alava'>Álava</option>
                    <option value='albacete'>Albacete</option>
                    <option value='alicante'>Alicante/Alacant</option>
                    <option value='almeria'>Almería</option>
                    <option value='asturias'>Asturias</option>
                    <option value='avila'>Ávila</option>
                    <option value='badajoz'>Badajoz</option>
                    <option value='barcelona'>Barcelona</option>
                    <option value='burgos'>Burgos</option>
                    <option value='caceres'>Cáceres</option>
                    <option value='cadiz'>Cádiz</option>
                    <option value='cantabria'>Cantabria</option>
                    <option value='castellon'>Castellón/Castelló</option>
                    <option value='ceuta'>Ceuta</option>
                    <option value='ciudadreal'>Ciudad Real</option>
                    <option value='cordoba'>Córdoba</option>
                    <option value='cuenca'>Cuenca</option>
                    <option value='girona'>Girona</option>
                    <option value='laspalmas'>Las Palmas</option>
                    <option value='granada'>Granada</option>
                    <option value='guadalajara'>Guadalajara</option>
                    <option value='guipuzcoa'>Guipúzcoa</option>
                    <option value='huelva'>Huelva</option>
                    <option value='huesca'>Huesca</option>
                    <option value='illesbalears'>Illes Balears</option>
                    <option value='jaen'>Jaén</option>
                    <option value='acoruña'>A Coruña</option>
                    <option value='larioja'>La Rioja</option>
                    <option value='leon'>León</option>
                    <option value='lleida'>Lleida</option>
                    <option value='lugo'>Lugo</option>
                    <option value='madrid'>Madrid</option>
                    <option value='malaga'>Málaga</option>
                    <option value='melilla'>Melilla</option>
                    <option value='murcia'>Murcia</option>
                    <option value='navarra'>Navarra</option>
                    <option value='ourense'>Ourense</option>
                    <option value='palencia'>Palencia</option>
                    <option value='pontevedra'>Pontevedra</option>
                    <option value='salamanca'>Salamanca</option>
                    <option value='segovia'>Segovia</option>
                    <option value='sevilla'>Sevilla</option>
                    <option value='soria'>Soria</option>
                    <option value='tarragona'>Tarragona</option>
                    <option value='santacruztenerife'>Santa Cruz de Tenerife</option>
                    <option value='teruel'>Teruel</option>
                    <option value='toledo'>Toledo</option>
                    <option value='valencia'>Valencia/Valéncia</option>
                    <option value='valladolid'>Valladolid</option>
                    <option value='vizcaya'>Vizcaya</option>
                    <option value='zamora'>Zamora</option>
                    <option value='zaragoza'>Zaragoza</option>
                </InputSelect>

                <div style={{ marginTop: "40px" }}>
                    <Button type="submit">Registrarme</Button>
                </div>
            </Form>
        </>
    )
}
