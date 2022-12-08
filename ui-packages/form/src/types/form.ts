import { FieldValues, Path } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form/dist/types/controller';

export type DefaultFieldValues = FieldValues;
export type DefaultFormValues = Record<string, DefaultFieldValues>;

export type SchemaFieldOptions = {
  label: string;
  value: string;
};

export type SchemaField<T extends DefaultFieldValues = DefaultFormValues> = {
  label?: string;
  name: Path<T>;
  options?: SchemaFieldOptions[];
  type: string;
};

export type SchemaLabel = {
  submitLabel?: string;
};

export type Schema<T extends DefaultFormValues = DefaultFormValues> = {
  fields: SchemaField<T>[][];
  labels?: SchemaLabel;
};

export type FormComponentProps = ControllerRenderProps & {
  label?: string;
  options?: SchemaFieldOptions[];
};

export type FormComponent = (props: FormComponentProps) => JSX.Element;

export type FormComponentData = {
  component: FormComponent;
};

export type FormComponents = Record<string, FormComponentData>;
