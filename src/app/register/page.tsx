"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";

import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import FSInput from "@/components/Forms/FSInput";
import FSForms from "@/components/Forms/FSForms";


// export const patientValidationSchema = z.object({
//   name: z.string().min(1, "Please enter your name!"),
//   email: z.string().email("Please enter a valid email address!"),
//   contactNumber: z
//     .string()
//     .regex(/^\d{11}$/, "Please provide a valid phone number!"),
//   address: z.string().min(1, "Please enter your address!"),
// });

// export const validationSchema = z.object({
//   password: z.string().min(6, "Must be at least 6 characters"),
//   patient: patientValidationSchema,
// });

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
//   const router = useRouter();

//   const handleRegister = async (values: FieldValues) => {
//     const data = modifyPayload(values);
//     // console.log(data);
//     try {
//       const res = await registerPatient(data);
//       // console.log(res);
//       if (res?.data?.id) {
//         toast.success(res?.message);
//         const result = await userLogin({
//           password: values.password,
//           email: values.patient.email,
//         });
//         if (result?.data?.accessToken) {
//           storeUserInfo({ accessToken: result?.data?.accessToken });
//           router.push("/dashboard");
//         }
//       }
//     } catch (err: any) {
//       console.error(err.message);
//     }
//   };
const handleRegister = () => {

}

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box> */}
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <FSForms
              onSubmit={handleRegister}
            //   resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <FSInput label="Name" fullWidth={true} name="patient.name" />
                </Grid>
                <Grid item md={6}>
                  <FSInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="patient.email"
                  />
                </Grid>
                <Grid item md={6}>
                  <FSInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <FSInput
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <FSInput
                    label="Address"
                    fullWidth={true}
                    name="patient.address"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </FSForms>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;