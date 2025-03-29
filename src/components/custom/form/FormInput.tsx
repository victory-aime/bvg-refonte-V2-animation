import React from "react";
import { useField } from "formik";
import { HTMLChakraProps, Input, Text, Field } from "@chakra-ui/react";

export interface TextInputProps extends HTMLChakraProps<"input"> {
  name: string;
  label?: string;
  required?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  localErrorMsg?: string;
  useFullAmountMask?: boolean;
  rightAccessory?: React.ReactNode;
  leftAccessory?: React.ReactNode;
  type?: string;
  accept?: string;
  validate?: any;
  customRadius?: number;
  height?: string | number;
  onChangeFunction?: any;
}

const FormTextInput = ({
  name,
  label,
  type = "text",
  placeholder,
  localErrorMsg = "",
  required = true,
  isReadOnly = false,
  isDisabled = false,
  rightAccessory,
  leftAccessory,
  customRadius,
  accept,
  height,
  validate,
  value,
  onChangeFunction,
  useFullAmountMask,
  onBlur,
  ...rest
}: TextInputProps) => {
  const fieldHookConfig = {
    name,
    validate,
  };
  const [field, { touched, error }] = useField(fieldHookConfig);
  const isError = isReadOnly ? !!error : !!(touched && error);

  return (
    <Field.Root id={name} invalid={isError}>
      {label && (
        <Field.Label
          display={"flex"}
          gap={"4px"}
          fontSize={{ base: "14px", md: "16px" }}
        >
          {label}
          {required && <Text color={"red"}> * </Text>}
        </Field.Label>
      )}

      <Input
        {...rest}
        {...field}
        type={"text"}
        onBlur={(e) => {
          field.onBlur(e);
          onBlur?.(e);
        }}
        value={value ?? field?.value}
        placeholder={placeholder ?? ""}
        borderRadius={customRadius ?? "12px"}
        _placeholder={{ color: isError ? "red.500" : "gray.400" }}
        size={"lg"}
        pl={3}
        backgroundColor={"transparent"}
        variant={"outline"}
        readOnly={isReadOnly}
        disabled={isDisabled}
        fontSize={{ base: "16px", lg: "16px" }}
        height={height ?? "50px"}
        autoCapitalize="none"
        accept={accept}
      />

      {isError && <Field.ErrorText>{error}</Field.ErrorText>}
      {localErrorMsg && (
        <Field.HelperText p={1}>{localErrorMsg}</Field.HelperText>
      )}
    </Field.Root>
  );
};

export default FormTextInput;
