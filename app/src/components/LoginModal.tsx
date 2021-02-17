import React, { FC } from "react";
import { Field, Formik, Form, FormikProps } from "formik";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Container,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import * as yup from "yup";
import { ILoginRequest } from "type";
import styled from "styled-components";

interface ILoginModal {
  isOpen: boolean;
  message?: string;
  onClose(): void;
  login(v: ILoginRequest): void;
}

const Title = styled(DialogTitle)`
  text-align: center;
`;

const FormWrapper = styled.div`
  padding: 60px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;

const Error = styled.div`
  margin-bottom: 10px;
  color: red;
`;

const SuccessCard = styled(Card)`
  margin-bottom: 30px;
`;

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginModal: FC<ILoginModal> = ({ message, isOpen, onClose, login }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => onClose()}
      data-testid="login-modal"
      aria-labelledby="login-modal"
      aria-describedby="modal to login"
    >
      <Container maxWidth="sm">
        <FormWrapper>
          <Title id="alert-dialog-title">
            You must login before using the cart functionality
          </Title>
          {message && (
            <SuccessCard>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Success!
                </Typography>
                <Typography variant="body2" component="p">
                  {message}
                </Typography>
              </CardContent>
            </SuccessCard>
          )}
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values: ILoginRequest) => login(values)}
            enableReinitialize={true}
            validationSchema={validationSchema}
            validateOnMount={true}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {(formikBag: FormikProps<ILoginRequest>) => {
              const { errors, isValid, values, handleChange } = formikBag;
              return (
                <Form>
                  <ButtonWrapper>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="username"
                      name="username"
                      label="Username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    <Error>{errors.username}</Error>
                  </ButtonWrapper>
                  <ButtonWrapper>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <Error>{errors.password}</Error>
                  </ButtonWrapper>
                  <ButtonWrapper>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                      disabled={!isValid}
                    >
                      Submit
                    </Button>
                  </ButtonWrapper>
                </Form>
              );
            }}
          </Formik>
        </FormWrapper>
      </Container>
    </Dialog>
  );
};

export default LoginModal;
