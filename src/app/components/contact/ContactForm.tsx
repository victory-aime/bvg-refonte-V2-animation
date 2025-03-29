"use client";

import { Center, Flex, VStack } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { BaseButton } from "_/components/custom/button";
import axios from "axios";
import { useState } from "react";
import { toaster } from "_/components/ui/toaster";
import FormTextInput from "_/components/custom/form/FormInput";
import FormTextArea from "_/components/custom/form/FormTextArea";
import { ContactFormValues, validationSchema } from "./validation";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async (
    values: FormikValues,
    { resetForm }: FormikHelpers<ContactFormValues>,
  ) => {
    const emailDto = {
      sender: {
        name: values.name + " " + values.firstName,
        address: values.email,
      },
      subject: values.subject,
      message: values.message,
    };
    setIsLoading(true);

    const emailPromise = axios.post(`api/send-email`, emailDto, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    resetForm();
    toaster.promise(emailPromise, {
      success: {
        title: "Successfully send",
        description: "Looks great",
      },
      error: {
        title: "Send failed",
        description: "Something wrong with the send email",
      },
      loading: { title: "Sending...", description: "Please wait" },
      finally: () => {
        setIsLoading(false);
      },
    });
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: "",
        firstName: "",
        email: "",
        subject: "",
        message: "",
      }}
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <VStack gap={8} align="stretch" width="100%">
            <Flex width="100%" gap={"20px"}>
              <FormTextInput name="name" label="Nom" placeholder="john" />
              <FormTextInput
                name="firstName"
                label="Prenom"
                placeholder="doe"
              />
            </Flex>
            <FormTextInput
              name="email"
              label="Email"
              placeholder="me@example.com"
            />
            <FormTextInput
              name="subject"
              label="Sujet"
              placeholder="Besoin d'un site web"
            />
            <FormTextArea
              required
              height={"200px"}
              name={"message"}
              label={"Message"}
              placeholder={"Saisissez votre message"}
              onChangeFunction={(e: any) =>
                setFieldValue("message", e.target.value)
              }
            />
          </VStack>
          <Center gap={"20px"} mt={"30px"}>
            <BaseButton
              colorType={"primary"}
              animation={"pulse"}
              isLoading={isLoading}
              disabled={isLoading}
              width={"320px"}
              onClick={() => handleSubmit()}
            >
              {"Envoyez"}
            </BaseButton>
          </Center>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
