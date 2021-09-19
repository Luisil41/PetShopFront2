import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import { Button } from '../../shared/Button/Button';
import { Input } from '../../shared/Input/Input';
import { InputSelect } from '../../shared/InputSelect/InputSelect';

import { UserContext } from '../../../App';
import { formCreate } from '../../../api/user.api';

import provinces from '../../../utils/provinces';

export const FormNew = () => {
    const user = useContext(UserContext);

    return (
        <>
            <h3>Formulario único de adopción</h3>
            <Formik
                initialValues={{
                    d1: user.user.fullName,
                    d2: '',
                    d3: '',
                    d4: user.user.province,
                    d5: '',
                    d6: '',
                    d7: user.user.birthdate,
                    d8: '',
                    d9: '',
                    d10: user.user.phone,
                    d11: user.user.email,

                    h1: '',
                    h2: '',
                    h3: '',
                    h4: '',
                    h5: '',
                    h6: '',
                    h7: '',
                    h8: '',

                    f1: '',
                    f2: '',
                    f3: '',
                    f4: '',
                    f5: '',

                    o1: '',
                    o2: '',
                    o3: '',
                    o4: '',

                    g1: '',
                    g2: '',
                    g3: '',
                    g4: '',

                    a1: '',
                    a2: '',
                    a3: '',
                    a4: '',
                    a5: '',

                    p1: '',
                    p2: '',

                    m1: ''
                }}
                validate={(values) => {
                    let errors = {};

                    if (!values.d1) {
                        errors.d1 = "El nombre es obligatorio.";
                    } else if (!/^[a-zA-Z ]{2,30}$/.test(values.d1)) {
                        errors.d1 = "El nombre solo puede contener letras y espacios.";
                    }
                    if (!values.d2) {
                        errors.d2 = "El documento es obligatorio.";
                    } else if (!/^(\d{8})([A-Z])$/.test(values.d2) || !/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/.test(values.d2) || /^[XYZ]\d{7,8}[A-Z]$/.test(values.d2)) {
                        errors.d2 = "Ingresa un DNI/NIE válido.";
                    }
                    if (!values.d3) errors.d3 = "El domicilio es obligatorio.";
                    if (!values.d4) errors.d4 = "El campo provincia es obligatorio.";
                    if (!values.d5) errors.d5 = "La localidad es obligatoria.";
                    if (!values.d6) {
                        errors.d6 = "El código postal es obligatorio.";
                    } else if (!/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(values.d6)) {
                        errors.d6 = "Ingresa un código postal válido.";
                    }
                    if (!values.d7) errors.d7 = "La fecha de nacimiento es obligatoria.";
                    if (!values.d8) errors.d8 = "El estado civil es obligatorio.";
                    if (!values.d9) errors.d9 = "Este campo es obligatorio.";
                    if (!values.d9) errors.d9 = "Este campo es obligatorio.";
                    if (!values.d10) {
                        errors.d10 = 'El campo número de teléfono es obligatorio.'
                    } else if (values.d10.length !== 9 && !/^[679]{1}[0-9]{8}$/.test(values.d10)) {
                        errors.d10 = 'Escribe un número de teléfono válido.'
                    }
                    if (!values.d11) {
                        errors.d11 = 'El correo es obligatorio.'
                    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.d11)) {
                        errors.d11 = 'Ingresa un correo válido.'
                    }

                    if (!values.h1) errors.h1 = "Este campo es obligatorio.";
                    if (!values.h3) errors.h3 = "Este campo es obligatorio.";
                    if (!values.h5) errors.h5 = "Este campo es obligatorio.";
                    if (!values.h6) errors.h6 = "Este campo es obligatorio.";
                    if (!values.h7) errors.h7 = "Este campo es obligatorio.";

                    if (!values.f1) errors.f1 = "Este campo es obligatorio.";
                    if (!values.f2) errors.f2 = "Este campo es obligatorio.";
                    if (!values.f3) errors.f3 = "Este campo es obligatorio.";
                    if (!values.f4) errors.f4 = "Este campo es obligatorio.";
                    if (!values.f5) errors.f5 = "Este campo es obligatorio.";

                    if (!values.o1) errors.o1 = "Este campo es obligatorio.";
                    if (!values.o2) errors.o2 = "Este campo es obligatorio.";
                    if (!values.o3) errors.o3 = "Este campo es obligatorio.";
                    if (!values.o4) errors.o4 = "Este campo es obligatorio.";

                    if (!values.g1) errors.g1 = "Este campo es obligatorio.";
                    if (!values.g2) errors.g2 = "Este campo es obligatorio.";
                    if (!values.g3) errors.g3 = "Este campo es obligatorio.";
                    if (!values.g4) errors.g4 = "Este campo es obligatorio.";

                    if (!values.a1) errors.a1 = "Este campo es obligatorio.";
                    if (!values.a2) errors.a2 = "Este campo es obligatorio.";
                    if (!values.a3) errors.a3 = "Este campo es obligatorio.";
                    if (!values.a4) errors.a4 = "Este campo es obligatorio.";
                    if (!values.a5) errors.a5 = "Este campo es obligatorio.";

                    if (!values.p1) errors.p1 = "Este campo es obligatorio.";
                    if (!values.p2) errors.p2 = "Este campo es obligatorio.";

                    return errors;
                }}
                onSubmit={async (values) => {
                    // const r = await readAndUpload(values.avatar)

                    formCreate(values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                }) => (
                    <div className="form__big-container">
                        <Form className="form__container">
                            <Input type="hidden" name="userId" value={user.user._id} />
                            <h3>Datos personales:</h3>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="d1"
                                    placeholder="Nombre y Apellidos"
                                    label="Nombre y Apellidos"
                                    value={values.d1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.d1 && errors.d1 && (
                                    <div className="form__error">{errors.d1}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="d2"
                                    placeholder="DNI/NIF/NIE"
                                    label="DNI/NIF/NIE"
                                    value={values.d2}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.d2 && errors.d2 && (
                                    <div className="form__error">{errors.d2}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="d3"
                                    placeholder="Domicilio"
                                    label="Domicilio"
                                    value={values.d3}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.d3 && errors.d3 && (
                                    <div className="form__error">{errors.d3}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <InputSelect
                                    name="d4"
                                    label="Provincia"
                                    value={values.d4}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    {provinces.map((e) => (
                                        <option value={e.value} key={e.name}>
                                            {e.name}
                                        </option>
                                    ))}
                                    ;
                                </InputSelect>
                                {touched.d4 && errors.d4 && (
                                    <div className="form__error">{errors.d4}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="d5"
                                    placeholder="Localidad"
                                    label="Localidad"
                                    value={values.d5}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.d5 && errors.d5 && (
                                    <div className="form__error">{errors.d5}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="d6"
                                    placeholder="Código Postal"
                                    label="Código Postal"
                                    value={values.d6}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.d6 && errors.d6 && (
                                    <div className="form__error">{errors.d6}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="date"
                                    name="d7"
                                    label="Fecha de Nacimiento"
                                    value={values.d7}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.d7 && errors.d7 && (
                                    <div className="form__error">{errors.d7}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <InputSelect
                                    name="d8"
                                    label="Estado civil"
                                    value={values.d8}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="soltero/a">Soltero/a</option>
                                    <option value="casado/a">Casado/a</option>
                                    <option value="en pareja">En pareja</option>
                                    <option value="divorciado/a">Divorciado/a</option>
                                    <option value="otro">Otro</option>
                                </InputSelect>
                                {touched.d8 && errors.d8 && (
                                    <div className="form__error">{errors.d8}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="d9"
                                    placeholder="Profesión / Estudios"
                                    label="Profesión / Estudios"
                                    value={values.d9}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.d9 && errors.d9 && (
                                    <div className="form__error">{errors.d9}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="d10"
                                    placeholder="Número de contacto"
                                    label="Número de contacto"
                                    value={values.d10}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.d10 && errors.d10 && (
                                    <div className="form__error">{errors.d10}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="d11"
                                    placeholder="Email"
                                    label="Email"
                                    value={values.d11}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.d11 && errors.d11 && (
                                    <div className="form__error">{errors.d11}</div>
                                )}
                            </div>

                            <h3>Vivienda:</h3>
                            <div className="form__box">
                                <InputSelect
                                    name="h1"
                                    label="¿Vives en casa o piso?"
                                    value={values.h1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="casa">Casa</option>
                                    <option value="piso">Piso</option>
                                </InputSelect>
                                {touched.h1 && errors.h1 && (
                                    <div className="form__error">{errors.h1}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">Si es piso, ¿permiten mascotas en el edificio?</p>
                                <Input
                                    type="radio"
                                    name="h2"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="h2"
                                    label="No"
                                    value="falso"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.h2 && errors.h2 && (
                                    <div className="form__error">{errors.h2}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Tu vivienda es propia o alquilada?</p>
                                <Input
                                    type="radio"
                                    name="h3"
                                    label="Propia"
                                    value="propia"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="h3"
                                    label="Alquilada"
                                    value="alquilada"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.h3 && errors.h3 && (
                                    <div className="form__error">{errors.h3}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">Si es alquilada, ¿tienes permiso del dueño?</p>
                                <Input
                                    type="radio"
                                    name="h4"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="h4"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.h4 && errors.h4 && (
                                    <div className="form__error">{errors.h4}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Es un lugar seguro para una mascota?, ¿tienes rejas o cercas que impidan que tu mascota escape o que te la roben?</p>
                                <Input
                                    type="radio"
                                    name="h5"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="h5"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.h5 && errors.h5 && (
                                    <div className="form__error">{errors.h5}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Tienes espacio suficiente para una mascota?(casa grande, terraza, jardín...)</p>
                                <Input
                                    type="radio"
                                    name="h6"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="h6"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.h6 && errors.h6 && (
                                    <div className="form__error">{errors.h6}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Tiene actualmente otros animales en casa?</p>
                                <Input
                                    type="radio"
                                    name="h7"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="h7"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.h7 && errors.h7 && (
                                    <div className="form__error">{errors.h7}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="h8"
                                    placeholder="En caso de que así sea, ¿cuántos son y de qué especie?"
                                    label="En caso de que así sea, ¿cuántos son y de qué especie?"
                                    value={values.h8}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.h8 && errors.h8 && (
                                    <div className="form__error">{errors.h8}</div>
                                )}
                            </div>

                            <h3>Familia:</h3>
                            <div className="form__box">
                                <Input
                                    type="number"
                                    name="f1"
                                    placeholder="¿Cuántas personas viven contigo?"
                                    label="¿Cuántas personas viven contigo?"
                                    value={values.f1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.f1 && errors.f1 && (
                                    <div className="form__error">{errors.f1}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Algún familiar enfermo?</p>
                                <Input
                                    type="radio"
                                    name="f2"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="f2"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.f2 && errors.f2 && (
                                    <div className="form__error">{errors.f2}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Hay niños o personas de edad avanzada?</p>
                                <Input
                                    type="radio"
                                    name="f3"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="f3"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.f3 && errors.f3 && (
                                    <div className="form__error">{errors.f3}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Todos están de acuerdo en tener una mascota?</p>
                                <Input
                                    type="radio"
                                    name="f4"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="f4"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.f4 && errors.f4 && (
                                    <div className="form__error">{errors.f4}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Alguno es alérgico al pelo de mascotas?</p>
                                <Input
                                    type="radio"
                                    name="f5"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="f5"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.f5 && errors.f5 && (
                                    <div className="form__error">{errors.f5}</div>
                                )}
                            </div>

                            <h3>Ocupaciones / Tiempo libre:</h3>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Trabaja actualmente?</p>
                                <Input
                                    type="radio"
                                    name="o1"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="o1"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.o1 && errors.o1 && (
                                    <div className="form__error">{errors.o1}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="o2"
                                    placeholder="Horario de Trabajo"
                                    label="Horario de Trabajo"
                                    value={values.o2}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.o2 && errors.o2 && (
                                    <div className="form__error">{errors.o2}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="o3"
                                    placeholder="¿Qué suele hacer en las vacaciones de verano?"
                                    label="¿Qué suele hacer en las vacaciones de verano?"
                                    value={values.o3}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.o3 && errors.o3 && (
                                    <div className="form__error">{errors.o3}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="o4"
                                    placeholder="¿Cuánto tiempo pasaría el animal solo en casa?"
                                    label="¿Cuánto tiempo pasaría el animal solo en casa?"
                                    value={values.o4}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.o4 && errors.o4 && (
                                    <div className="form__error">{errors.o4}</div>
                                )}
                            </div>

                            <h3>Sobre animales en general:</h3>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="g1"
                                    placeholder="¿Cuántos años cree que puede vivir una mascota?"
                                    label="¿Cuántos años cree que puede vivir una mascota?"
                                    value={values.g1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.g1 && errors.g1 && (
                                    <div className="form__error">{errors.g1}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="g2"
                                    placeholder="¿Qué necesidades cree que tiene?"
                                    label="¿Qué necesidades cree que tiene?"
                                    value={values.g2}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.g2 && errors.g2 && (
                                    <div className="form__error">{errors.g2}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="g3"
                                    placeholder="¿Quién será el responsable y se hará cargo de cubrir los gastos del adoptado?"
                                    label="¿Quién será el responsable y se hará cargo de cubrir los gastos del adoptado?"
                                    value={values.g3}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.g3 && errors.g3 && (
                                    <div className="form__error">{errors.g3}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="g4"
                                    placeholder="¿Qué aspecto negativo de los animales domésticos le molesta más? (el gasto que suponen, que hagan ruido, que suelten pelo, tener que sacarle a hacer sus necesidades...)"
                                    label="¿Qué aspecto negativo de los animales domésticos le molesta más? (el gasto que suponen, que hagan ruido, que suelten pelo, tener que sacarle a hacer sus necesidades...)"
                                    value={values.g4}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.g4 && errors.g4 && (
                                    <div className="form__error">{errors.g4}</div>
                                )}
                            </div>

                            <h3>Sobre la adopción:</h3>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="a1"
                                    placeholder="¿Por qué te decides a adoptar/acoger?"
                                    label="¿Por qué te decides a adoptar/acoger?"
                                    value={values.a1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.a1 && errors.a1 && (
                                    <div className="form__error">{errors.a1}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="a2"
                                    placeholder="¿Qué piensa acerca de adoptar a un animal adulto? Por favor, cite al menos una ventaja y un inconveniente que crea que tiene la adopción de un perro adulto"
                                    label="¿Qué piensa acerca de adoptar a un animal adulto? Por favor, cite al menos una ventaja y un inconveniente que crea que tiene la adopción de un perro adulto"
                                    value={values.a2}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.a2 && errors.a2 && (
                                    <div className="form__error">{errors.a2}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Ha visitado algún refugio de animales alguna vez?</p>
                                <Input
                                    type="radio"
                                    name="a3"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="a3"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.a3 && errors.a3 && (
                                    <div className="form__error">{errors.a3}</div>
                                )}
                            </div>
                            <div className="form__box-radio">
                                <p className="form__radio-label">¿Es socio/a de algún refugio o protectora de animales?</p>
                                <Input
                                    type="radio"
                                    name="a4"
                                    label="Sí"
                                    value="true"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Input
                                    type="radio"
                                    name="a4"
                                    label="No"
                                    value="false"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.a4 && errors.a4 && (
                                    <div className="form__error">{errors.a4}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <InputSelect
                                    name="a5"
                                    label="¿Tienes pensado tener más de una mascota?"
                                    value={values.a5}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="si">Sí</option>
                                    <option value="no">No</option>
                                    <option value="no se">No sé</option>
                                </InputSelect>
                                {touched.a5 && errors.a5 && (
                                    <div className="form__error">{errors.a5}</div>
                                )}
                            </div>

                            <h3>Sobre el comportamiento de la mascota:</h3>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="p1"
                                    placeholder="Ante una inadaptación o problema de comportamiento en el animal que adopte, ¿qué hará usted?"
                                    label="Ante una inadaptación o problema de comportamiento en el animal que adopte, ¿qué hará usted?"
                                    value={values.p1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.p1 && errors.p1 && (
                                    <div className="form__error">{errors.p1}</div>
                                )}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="p2"
                                    placeholder="¿Cree que estos problemas tienen solución o, por el contrario, piensa que es imposible que desaparezca una mala conducta?"
                                    label="¿Cree que estos problemas tienen solución o, por el contrario, piensa que es imposible que desaparezca una mala conducta?"
                                    value={values.p2}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.p2 && errors.p2 && (
                                    <div className="form__error">{errors.p2}</div>
                                )}
                            </div>

                            <div className="form__box">
                                <Input
                                    type="text"
                                    name="m1"
                                    placeholder="Cuéntanos!"
                                    label="¿Desea contarnos algo más?"
                                    value={values.m1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.m1 && errors.m1 && (
                                    <div className="form__error">{errors.m1}</div>
                                )}
                            </div>

                            <div className="form__button-box">
                                <Button type="submit">Enviar formulario</Button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}
