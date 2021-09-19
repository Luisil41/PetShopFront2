import React, { useContext } from 'react';
import { Formik, Form } from "formik";
import { Button } from '../Button/Button'
import { logout } from '../../../api/auth.api';

import { UserContext } from "../../../App";

export const Logout = () => {
    const user = useContext(UserContext);

    return (
        <Formik
        initialValues={{
          logout: "",
        }}
        onSubmit={async () => {
          await logout();
          user.setUser(false); 
        }}
      >
        {() => (

          <Form>
            <div className="form__button-box">
              <Button type="submit" name='logout'>Logout</Button>
            </div>
          </Form>
        )}
      </Formik>
    )
}
