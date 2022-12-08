import React, { useContext } from 'react';
import { Box, Button, HStack, VStack } from '@chakra-ui/react';
import {
  Controller,
  DeepPartial,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { DefaultFormValues, Schema } from '../types';
import { FormContext } from './FormProvider';

type Props<T extends DefaultFormValues = DefaultFormValues> = {
  defaultValues?: DeepPartial<T>;
  onSubmit?: (data: T) => void;
  schema: Schema<T>;
};

export function Form<T extends DefaultFormValues = DefaultFormValues>({
  defaultValues,
  onSubmit: onSubmitProp,
  schema,
}: Props<T>) {
  const { components } = useContext(FormContext);
  const { control, handleSubmit } = useForm<T>({
    defaultValues,
  });
  const onSubmit: SubmitHandler<T> = data => {
    onSubmitProp?.(data);
  };

  const { fields, labels } = schema;

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} width="100%">
      <VStack width="100%" alignItems="flex-start" spacing="6">
        {fields.map(row => (
          <HStack justifyContent="flex-start" width="100%">
            {row.map(({ label, name, options, type }) => {
              if (!components?.[type]?.component) {
                console.error(
                  `Form component of type "${type}" could not be found`,
                );
                return null;
              }

              const Component = components[type].component;

              return (
                <Controller
                  name={name}
                  control={control}
                  render={({ field }) => (
                    <Component label={label} options={options} {...field} />
                  )}
                />
              );
            })}
          </HStack>
        ))}
        <HStack width="100%" justifyContent="flex-end">
          <Button type="submit" colorScheme="primary">
            {labels?.submitLabel ?? 'Submit'}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
