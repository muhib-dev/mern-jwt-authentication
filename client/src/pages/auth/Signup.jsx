import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Link as RouteLink } from "react-router-dom";
import Link from "@mui/material/Link";
import PageTitle from "@components/typography/PageTitle";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "@utils/axios";
import { toast } from "react-hot-toast";
import { catchError } from "@utils/catchError";
import usePageTitle from "@hooks/usePageTitle";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import Flexbox from "@components/typography/Flexbox";

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Invalid email" }),
  userName: z
    .string()
    .regex(/^\S*$/, "Space not allow")
    .min(5, "Username minimum 5 characters")
    .max(20, "Username maximum 20 characters"),
  password: z.string().min(6, "Password minimum 6 characters"),
  role: z.enum(["user", "admin"]),
});

const defaultValues = {
  name: "",
  email: "",
  userName: "",
  password: "",
  role: "user",
};

const Signup = () => {
  usePageTitle("Create account");
  const [submitting, setSubmitting] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    setSubmitting(true);

    const response = axios.post("/api/auth/signup", data);

    toast.promise(response, {
      loading: "Saving...",
      success: ({ data }) => {
        reset(defaultValues);
        return data.message;
      },
      error: (error) => {
        setSubmitting(false);
        return catchError(error);
      },
    });
  };

  return (
    <Container maxWidth="md" sx={{ paddingY: "1rem" }}>
      <PageTitle sx={{ mb: 2 }} title="Create an Account" />

      <Paper sx={{ p: 4 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                autoFocus
                fullWidth
                {...field}
                label="Name"
                error={!!errors.name}
                helperText={errors?.name?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                sx={{ mt: 4 }}
                fullWidth
                {...field}
                label="Email"
                error={!!errors.email}
                helperText={errors?.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="userName"
            render={({ field }) => (
              <TextField
                sx={{ mt: 4 }}
                fullWidth
                {...field}
                label="Username"
                error={!!errors.userName}
                helperText={errors?.userName?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                sx={{ mt: 4, mb: 3 }}
                type="password"
                fullWidth
                {...field}
                label="Password"
                error={!!errors.password}
                helperText={errors?.password?.message}
              />
            )}
          />

          <Flexbox justifyContent="flex-start">
            <FormLabel>Role</FormLabel>
            <Controller
              control={control}
              name="role"
              render={({ field }) => (
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value="user"
                    label="User"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="admin"
                    label="Admin"
                    control={<Radio />}
                  />
                </RadioGroup>
              )}
            />
          </Flexbox>

          <Button
            disabled={submitting}
            sx={{ mt: 3 }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Create Account
          </Button>
        </form>
      </Paper>

      <Link component="p" variant="body2" sx={{ mt: 2, textAlign: "right" }}>
        <RouteLink to="/login">Already have an account? Sign in</RouteLink>
      </Link>
    </Container>
  );
};

export default Signup;
