import { PASSWORD, TEXT } from './form';
import { FormComponents } from '../types';
import { Input, PasswordField } from '../components/Renderers';

export const defaultComponentMapping: FormComponents = {
  [PASSWORD]: {
    component: PasswordField,
  },
  [TEXT]: {
    component: Input,
  },
};
