import React from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    // Handle login logic here
    console.log(values);
  };

  const validateEmail = async (email) => {
    try {
      // Simulate async validation request
      const response = await fetch("https://api.example.com/verify-email", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!data.valid) {
        throw new Error("Email is not valid");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false} // Disable immediate validation on change
      validateOnBlur={false} // Disable immediate validation on blur
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldError,
        setFieldTouched,
      }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={async () => {
              setFieldTouched("email", true);
              try {
                await validateEmail(values.email);
              } catch (error) {
                setFieldError("email", error.message);
              }
            }}
            value={values.email}
          />
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange("password")}
            value={values.password}
          />
          {errors.password && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <Button title="Login" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default Login;
