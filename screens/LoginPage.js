import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useFormik } from "formik";
import { Input, Button } from "native-base";
import * as Yup from "yup";

const validateSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
};

const InputWrapper = ({ error, children }) => (
  <>
    {children}
    {error && <Text>{error}</Text>}
  </>
);

const LoginForm = () => {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      // Handle login logic here
      console.log(values);
    },
    // Lazy load schema
    validationSchema: useMemo(() => {
      return validateSchema();
    }, []),
  });

  // Optimize errors with memo
  const errorMessages = useMemo(() => errors, [errors]);

  return (
    <View>
      <InputWrapper error={errorMessages.email}>
        <Input onChangeText={handleChange("email")} value={values.email} />
      </InputWrapper>

      <InputWrapper error={errorMessages.password}>
        <Input
          secureTextEntry
          onChangeText={handleChange("password")}
          value={values.password}
        />
      </InputWrapper>

      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
};

export default LoginForm;
