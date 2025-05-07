import { View, Text, TextInputProps, TextInput } from "react-native";
import { Controller } from "react-hook-form";
import React from "react";
type input = {
  name: string;
  control: any;
} & TextInputProps;
const CustomizableInput = ({ name, control, ...props }: input) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, onBlur } }) => (
        <TextInput
          {...props}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          className="border border-blue-400 mb-8 h-[40px] p-2 w-[320px] rounded-md"
        />
      )}
    />
  );
};

export default CustomizableInput;
