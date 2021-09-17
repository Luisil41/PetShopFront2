import React, { useState, useContext } from 'react';

import { Button } from '../../../shared/Button/Button';
import { Form } from '../../../shared/Form/Form';
import { Input } from '../../../shared/Input/Input';
import { InputSelect } from '../../../shared/InputSelect/InputSelect';

import { UserContext } from '../../../../App';
import { formCreate } from '../../../api/user.api';

export const FormNew = () => {

    const user = useContext(UserContext);

    const submitForm = async (e) => {
        e.preventDefault();

        const { d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, h1, h2, h3, h4, h5, h6, h7, h8, f1, f2, f3, f4, f5, o1, o2, o3, o4, g1, g2, g3, g4, a1, a2, a3, a4, a5, p1, p2, m1 } = e.target;

        const form = {
            d1: d1.value,
            d2: d2.value,
            d3: d3.value,
            d4: d4.files,
            d5: d5.value,
            d6: d6.value,
            d7: d7.value,
            d8: d8.value,
            d9: d9.value,
            d10: d10.value,
            d11: d11.value,

            h1: h1.value,
            h2: h2.value,
            h3: h3.value,
            h4: h4.value,
            h5: h5.value,
            h6: h6.value,
            h7: h7.value,
            h8: h8.value,

            f1: f1.value,
            f2: f2.value,
            f3: f3.value,
            f4: f4.value,
            f5: f5.value,

            o1: o1.value,
            o2: o2.value,
            o3: o3.value,
            o4: o4.value,

            g1: g1.value,
            g2: g2.value,
            g3: g3.value,
            g4: g4.value,

            a1: a1.value,
            a2: a2.value,
            a3: a3.value,
            a4: a4.value,
            a5: a5.value,

            p1: p1.value,
            p2: p2.value,

            m1: m1.value
        };

        try {
            await formCreate(form);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h3>Mascota</h3>
            <p>{user.user.email}</p>
            <Form onSubmit={submitForm} method="POST">
                <h3>Datos Personales:</h3>
                <Input type="text" name="d1" placeholder="Nombre y Apellidos" label="Nombre y Apellidos" />
                <Input type="text" name="d2" placeholder="DNI/NIF/NIE" label="DNI/NIF/NIE" />
                <Input type="text" name="d3" placeholder="Domicilio" label="Domicilio" />
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
                <Input type="text" name="d5" placeholder="Localidad" label="Localidad" />
                <Input type="text" name="d6" placeholder="Código Postal" label="Código Postal" />
                <Input type="date" name="d7" placeholder="Fecha de Nacimiento" label="Fecha de Nacimiento" />
                <Input type="text" name="d8" placeholder="Localidad" label="Localidad" />
                <InputSelect name="d9" label="Estado Civil">
                    <option value='soltero/a'>Soltero/a</option>
                    <option value='casado/a'>Casado/a</option>
                    <option value='en pareja'>En Pareja</option>
                    <option value='divorciado/a'>Divorciado/a</option>
                    <option value='otro'>Otro</option>
                </InputSelect>
                <Input type="text" name="d9" placeholder="Profesión / Estudios" label="Profesión / Estudios" />
                <Input type="text" name="d10" placeholder="Número de contacto" label="Número de contacto" />
                <Input type="text" name="d11" placeholder="Email" label="Email" />

                <h3>Datos Personales:</h3>
                <InputSelect name="h1" label="¿Vives en casa o piso?">
                    <option value='casa'>Casa</option>
                    <option value='piso'>Piso</option>
                </InputSelect>
                <p>Si es piso, ¿permiten mascotas en el edificio?</p>
                <Input type="radio" name="h2" value="true" label="Sí" />
                <Input type="radio" name="h2" value="false" label="No" />
                <InputSelect name="h3" label="¿Tu vivienda es propia o alquilada?">
                    <option value='propia'>Propia</option>
                    <option value='alquilada'>Alquilada</option>
                </InputSelect>
                <p>Si es alquilada, ¿tienes permiso del dueño?</p>
                <Input type="radio" name="h4" value="true" label="Sí" />
                <Input type="radio" name="h4" value="false" label="No" />
                <p>¿Es un lugar seguro para una mascota?, ¿tienes rejas o cercas que impidan que tu mascota escape o que te la roben?</p>
                <Input type="radio" name="h5" value="true" label="Sí" />
                <Input type="radio" name="h5" value="false" label="No" />
                <p>¿Tienes espacio suficiente para una mascota?(casa grande, terraza, jardín...)</p>
                <Input type="radio" name="h6" value="true" label="Sí" />
                <Input type="radio" name="h6" value="false" label="No" />
                <p>¿Tiene actualmente otros animales en casa?</p>
                <Input type="radio" name="h7" value="true" label="Sí" />
                <Input type="radio" name="h7" value="false" label="No" />
                <Input type="text" name="h8" placeholder="En caso de que así sea, ¿cuántos son y de qué especie?" label="En caso de que así sea, ¿cuántos son y de qué especie?" />

                <h3>Datos Personales:</h3>
                <Input type="number" name="f1" placeholder="¿Cuántas personas viven contigo?" label="¿Cuántas personas viven contigo?" />
                <p>¿Algún familiar enfermo?</p>
                <Input type="radio" name="h7" value="true" label="Sí" />
                <Input type="radio" name="h7" value="false" label="No" />

                3.FAMILIA:

                1.-¿Cuántas personas viven contigo? number
                2.-¿Algún familiar enfermo? bool
                3.-¿Hay niños o personas de edad avanzada? bool
                4.-¿Todos están de acuerdo en tener una mascota? bool
                5.-¿Alguno es alérgico al pelo de mascotas? bool


                4.OCUPACIONES / TIEMPO LIBRE:

                1.-¿Trabaja actualmente?:	bool
                2.-Horario de trabajo: string
                3.-¿Qué suele hacer en las vacaciones de verano?: string
                4.-¿Cuánto tiempo pasaría el animal solo en casa?: string

                5.SOBRE ANIMALES EN GENERAL:

                1.-¿Cuántos años cree que puede vivir una mascota?: number
                2.-¿Qué necesidades cree que tiene?: string
                3.-¿Quién será el responsable y se hará cargo de cubrir los gastos del adoptado?: string
                4.-¿Qué aspecto negativo de los animales domésticos le molesta más? (el gasto que suponen, que hagan ruido, que suelten pelo, tener que sacarle a hacer sus necesidades...): string

                6.SOBRE LA ADOPCIÓN:

                1.-¿Por qué te decides a adoptar/acoger? string
                2.-¿Qué piensa acerca de adoptar a un animal adulto? Por favor, cite al menos una ventaja y un inconveniente que crea que tiene la adopción de un perro adulto: string
                3.-¿Ha visitado algún refugio de animales alguna vez? bool
                4.-¿Es socio/a de algún refugio o protectora de animales? bool
                5.-¿Piensa adoptar a algúna otra mascota después de esta?: string ('sí','no','no sé')


                8.SOBRE COMPORTAMIENTO DE LA MASCOTA:

                1.-Ante una inadaptación o problema de comportamiento en el animal que adopte, ¿qué hará usted? string
                2.-¿Cree que estos problemas tienen solución o, por el contrario, piensa que es imposible que desaparezca una mala conducta? string



                1.-¿Desea contarnos algo más?:
            </Form>

        </div>
    )
}
