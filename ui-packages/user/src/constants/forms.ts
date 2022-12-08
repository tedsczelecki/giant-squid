import { PASSWORD, Schema, TEXT } from '@giant-squid/form-ui';

export const defaultLoginForm: Schema = {
  fields: [
    [
      {
        label: 'Email or username',
        name: 'email',
        type: TEXT,
      },
    ],
    [
      {
        label: 'Password',
        name: 'password',
        type: PASSWORD,
      },
    ],
  ],
  labels: {
    submitLabel: 'Login',
  },
};

export const defaultRegisterForm: Schema = {
  fields: [
    [
      {
        label: 'Email',
        name: 'email',
        type: TEXT,
      },
    ],
    [
      {
        label: 'Password',
        name: 'password',
        type: PASSWORD,
      },
    ],
  ],
  labels: {
    submitLabel: 'Register',
  },
};

export const defaultForgotPasswordForm: Schema = {
  fields: [
    [
      {
        label: 'Email or username',
        name: 'email',
        type: TEXT,
      },
    ],
  ],
  labels: {
    submitLabel: 'Reset',
  },
};
