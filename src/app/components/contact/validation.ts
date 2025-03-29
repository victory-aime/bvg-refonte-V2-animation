import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nom est requis"),
  firstName: Yup.string().required("Prenom est requis"),
  email: Yup.string().email("Email invalid").required("Email est requis"),
  subject: Yup.string().required("Sujet est requis"),
  message: Yup.string().required("Message est requis"),
});

export interface ContactFormValues {
  name: string;
  firstName: string;
  email: string;
  subject: string;
  message: string;
}
