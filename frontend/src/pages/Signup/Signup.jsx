import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { SignupUser } from "../../redux/user/userAction";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .required("Please enter a password.")
        .min(6, "Password must be at least 6 characters."),
      username: Yup.string()
        .required("Please enter a username.")
        .min(6, "username must be at least 6 characters."),

      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
          "Please enter a valid email address."
        )
        .required("Please enter an Email."),
    }),

    onSubmit: (values) => {
      dispatch(SignupUser(values)).then((res) => {
        console.log(res);
        if (res.data.status === true) {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          navigate("/login", { replace: true });
        } else {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      });
    },
  });
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <div className="mt-2">
                <FormControl
                  mt={4}
                  isInvalid={formik.errors.username && formik.touched.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    id="username"
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                </FormControl>
              </div>
            </div>
            <div>
              <div className="mt-2">
                <FormControl
                  mt={4}
                  isInvalid={formik.errors.email && formik.touched.email}>
                  <FormLabel htmlFor="email">email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
              </div>
            </div>

            <div>
              <div className="mt-2">
                <FormControl
                  mt={4}
                  isInvalid={formik.errors.password && formik.touched.password}>
                  <FormLabel htmlFor="password">password</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={formik.handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
