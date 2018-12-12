import React, { FunctionComponent, useEffect } from 'react';
import gql from 'graphql-tag';
import { Terminal } from 'lumbridge';
import LoginForm from '../../components/forms/LoginForm';
import apolloPersistor from '../../persistors/apolloPersistor';
import authStore from '../../stores/authStore';
import useInstance from '../effects/useInstance';

export const loginMutation = apolloPersistor.instance({
  name: 'mutate',
  map: ({ ...args }) => ({
    ...args,
    mutation: gql`
      mutation Login($username: String!, $password: String!) {
        authLoginCustom(username: $username, password: $password) {
          token
          userId
        }
      }
    `,
  }),
});

export interface ILoginProps {}

const Login: FunctionComponent<ILoginProps> = () => {
  const { error, loading } = useInstance(loginMutation);
  useEffect(() => {
    const unmount = loginMutation.watch({
      data: ({ authLoginCustom }) => {
        authStore.dispatch.patch(authLoginCustom);
        Terminal.navigate('/');
      },
    });
    return () => unmount();
  }, []);
  const data = { loading, error };
  const handlers = {
    submit: (formData: any) => loginMutation.execute({ variables: formData }),
  };
  return <LoginForm data={data} handlers={handlers} />;
};

export default Login;
