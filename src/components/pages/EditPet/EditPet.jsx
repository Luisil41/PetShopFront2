import React, { useState, useContext, useEffect } from 'react';

import { editPet } from '../../../api/pet.api';
import { Button } from '../../shared/Button/Button';
import { Form } from '../../shared/Form/Form';
import { Input } from '../../shared/Input/Input';
import { InputSelect } from '../../shared/InputSelect/InputSelect';
import { profilePet } from '../../../api/pet.api';

import { UserContext } from '../../../App';

export const EditPet = ({ id }) => {

  const user = useContext(UserContext);
  const [ pet, setPet ] = useState({});

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await editPet(id, pet);

    } catch (err) {
      console.log(err);
    }
  }

  const getPet = async () => {
    const reqPet = await profilePet(id);
    setPet(reqPet);
  }

  useEffect(() => {
    getPet();
  }, []);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setPet({ ...pet, [name]: value });
  };

  const methodForm = "PUT";

  return (
    <div>
      <h3>Mascota</h3>
      <Form onSubmit={submitForm} method={methodForm}>
        <InputSelect name="type" label="Tipo" value={pet.type}>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
          <option value="otros">Otros</option>
        </InputSelect>
        <Input type="text" name="name" placeholder="Nombre" label="Nombre" onChange={handleOnChange} value={pet.name}/>
        <Input type="number" name="age" placeholder="Edad" label="Edad" onChange={handleOnChange} value={pet.age} />
        <Input type="radio" name="sex" value="macho" label="Macho" checked={pet.sex === 'macho' ? true : false} />
        <Input type="radio" name="sex" value="hembra" label="Hembra" checked={pet.sex === 'hembra' ? true : false} />
        <Input type="text" name="breed" placeholder="Raza" label="Raza" onChange={handleOnChange} value={pet.breed}/>
        <InputSelect name="size" label="Tamaño" value={pet.size}>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </InputSelect>
        <p>Vacunas</p>
        <Input type="radio" name="isVaccinated" value="true" label="Sí" checked={pet.isVaccinated === true ? true : false} />
        <Input type="radio" name="isVaccinated" value="false" label="No" checked={pet.isVaccinated === false ? true : false} />
        <p>Esterilizado</p>
        <Input type="radio" name="isSterilized" value="true" label="Sí" checked={pet.isSterilized=== true ? true : false}/>
        <Input type="radio" name="isSterilized" value="false" label="No" checked={pet.isSterilized === false ? true : false}/>
        <p>Desparasitado</p>
        <Input type="radio" name="isDewormed" value="true" label="Sí" checked={pet.isDewormed=== true ? true : false} />
        <Input type="radio" name="isDewormed" value="false" label="No" checked={pet.isDewormed === false ? true : false} />
        <p>Microchip</p>
        <Input type="radio" name="microchip" value="true" label="Sí" checked={pet.microchip === true ? true : false} />
        <Input type="radio" name="microchip" value="false" label="No" checked={pet.microchip === false ? true : false}/>
        <InputSelect name="province" label="Provincia" value={pet.province}>
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
        {user.user.role === 'shelter'
        ?
        <InputSelect name="status" label="Estado" value={pet.status}>
          <option value='adopción'>Adopción</option>
          <option value='casa de acogida'>Casa de acogida</option>
          <option value='ambas'>Ambas</option>
          <option value='en proceso de adopción'>En proceso de adopción</option>
          <option value='adoptado'>Adoptado</option>
        </InputSelect>
        :
        <InputSelect name="status" label="Estado">
          <option value='perdido'>Perdido</option>
        </InputSelect>
        }
        <Input type="file" name="avatar" placeholder="Avatar" label="Avatar" />

        <div style={{ marginTop: "40px" }}>
          <Button type="submit">Editar mascota</Button>
        </div>
      </Form>

    </div>
  )
}
