import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/images/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" id="email" placeholder="Seu e-mail" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuira</Link>
      </Form>
    </>
  );
}
