/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import DefaultHeader from "@components/molecules/DefaultHeader";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DefaultFooter from "@components/molecules/DefaultFooter";
import { useAuthenticationService } from "@services/authentication";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Row, Col, Text, Input, Button } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type LoginPageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Form1FormData {
  input_1: string;
  input_2: string;
}
function LoginPage(props: LoginPageProps): JSX.Element {
  const authenticationService = useAuthenticationService();
  const navigateService = useNavigateService();
  const validationForm1Schema = useMemo(
    () =>
      yup.object().shape({
        input_1: yup.string().email().required("input_1 is a required field"),
        input_2: yup.string().required("input_2 is a required field"),
      }),
    []
  );
  const formForm1 = useForm<Form1FormData>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolver: yupResolver(validationForm1Schema),
    shouldFocusError: true,
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors: formForm1Errors } = formForm1.formState;

  const handleForm1Button = async (values?: Form1FormData) => {
    try {
      await authenticationService.loginWithEmail("users", { email: "[text]", password: "[text]" });
      navigateService.navigate("/");
    } catch (e: unknown) {}
  };
  return (
    <Page className={styles.page_container}>
      <DefaultHeader className={styles.defaultheader_1} />
      <Box className={styles.content_box_0}>
        <Row
          align={"middle"}
          gutter={[0, 32]}
          justify={"center"}
          className={styles.form_1_container}
        >
          <Col md={Number(12)} className={styles.form_1_inner} xl={Number(8)} xs={Number(24)}>
            <Box className={styles.form_1}>
              <Text className={styles.form_1_name} textType={"Text"}>
                Login
              </Text>
              <Box className={styles.input_1_container}>
                <Box className={styles.input_1_inner}>
                  <Text className={styles.input_1_label} textType={"Text"}>
                    Email
                  </Text>
                  <Text className={styles.input_1_required} textType={"Text"}>
                    *
                  </Text>
                </Box>
                <Controller
                  control={formForm1.control}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { isTouched, error },
                  }: any) => {
                    return (
                      <Input
                        inputStyle={styles.input_1_input}
                        placeholder={"Enter your email address"}
                        prefixIconProps={{ iconName: "MdAlternateEmail", size: 16 }}
                        className={styles.input_1}
                        onChange={onChange}
                        value={value}
                      />
                    );
                  }}
                  name="input_1"
                />
                <Box className={styles.input_1_error_message_container}>
                  <Text className={styles.input_1_error_message_text} textType={"Text"}>
                    {get(formForm1Errors, "input_1.message")}
                  </Text>
                </Box>
              </Box>
              <Box className={styles.input_2_container}>
                <Box className={styles.input_2_inner}>
                  <Text className={styles.input_2_label} textType={"Text"}>
                    Password
                  </Text>
                  <Text className={styles.input_2_required} textType={"Text"}>
                    *
                  </Text>
                </Box>
                <Controller
                  control={formForm1.control}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { isTouched, error },
                  }: any) => {
                    return (
                      <Input
                        inputStyle={styles.input_2_input}
                        isPasswordField
                        placeholder={"Enter your password"}
                        prefixIconProps={{ iconName: "BsKey", size: 16 }}
                        className={styles.input_2}
                        onChange={onChange}
                        value={value}
                      />
                    );
                  }}
                  name="input_2"
                />
                <Box className={styles.input_2_error_message_container}>
                  <Text className={styles.input_2_error_message_text} textType={"Text"}>
                    {get(formForm1Errors, "input_2.message")}
                  </Text>
                </Box>
              </Box>
              <Button
                buttonType={"primary"}
                className={styles.form_1_button}
                onClick={formForm1.handleSubmit(handleForm1Button)}
              >
                Sign in
              </Button>
            </Box>
          </Col>
        </Row>
      </Box>
      <DefaultFooter className={styles.defaultfooter_1} />
    </Page>
  );
}
export default LoginPage;
