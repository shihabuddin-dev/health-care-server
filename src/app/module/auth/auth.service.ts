import { UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";

interface IRegisterPatientPayload {
  name: string;
  email: string;
  password: string;
}

const registerPatient = async (payload: IRegisterPatientPayload) => {
  const { name, email, password } = payload;
  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
      //   defaultValues
      //   needPasswordChange:false,
      //   role: Role.PATIENT,
    },
  });
  if (!data.user) {
    throw new Error("Failed to Register Patient");
  }
  //TODO : Create Patient Profile In Transaction After Sign Up Of Patient In USer Model
  // const patient = await prisma.$transaction( async (tx) => {

  //     await tx.pa
  // })
  return data;
};

interface ILoginPayload {
  email: string;
  password: string;
}
const loginUser = async (payload: ILoginPayload) => {
  const { email, password } = payload;
  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
  if (data.user.status === UserStatus.BLOCKED) {
    throw new Error("User is Blocked");
  }
  if (data.user.isDeleted || data.user.status === UserStatus.BLOCKED) {
    throw new Error("User is Deleted");
  }

  return data;
};

export const AuthService = {
  registerPatient,
  loginUser,
};
