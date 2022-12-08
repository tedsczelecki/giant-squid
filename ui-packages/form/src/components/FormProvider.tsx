import React from 'react';
import { FormContextValues } from '../types';
import { defaultComponentMapping } from '../constants/form-components';

export const FormContext = React.createContext<FormContextValues>({
  components: {},
});

type Props = FormContextValues & {
  children: React.ReactNode;
};

export const FormProvider = ({
  children,
  components = defaultComponentMapping,
}: Props) => {
  const value = {
    components,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
