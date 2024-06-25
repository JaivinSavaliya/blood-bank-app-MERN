// this is not react component so we can not rely on it to show toast messages when the user clicks on the login button.
// This is because we are not using the useDispatch hook to dispatch the action. Instead, we are using the createAsyncThunk function to create an action that will be dispatched by the Redux Toolkit.
// This function is used to create an action that will be dispatched by the Redux Toolkit. It takes three arguments:
// The name of the action to be dispatched. The name of the action is used to generate the action type. The name of the action is used to generate the action name and the action.

import { userLogin, userRegister } from "../Redux/features/auth/authAction";
import store from "../Redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please fill all the fields");
    }
    // console.log("login", e, email, password, role);
    store.dispatch(userLogin({ role, email, password }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  email,
  password,
  role,
  name,
  organizationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    // Check common fields
    if (
      !email.trim() ||
      !password.trim() ||
      !role.trim() ||
      !website.trim() ||
      !address.trim() ||
      !phone.trim()
    ) {
      return alert("Please fill all the fields");
    }

    // Check role-specific fields
    if (role === "admin" || role === "donor") {
      if (!name.trim()) {
        return alert("Please fill all the fields");
      }
    } else if (role === "organization") {
      if (!organizationName.trim()) {
        return alert("Please fill all the fields");
      }
    } else if (role === "hospital") {
      if (!hospitalName.trim()) {
        return alert("Please fill all the fields");
      }
    }

    // Dispatch the register action
    store.dispatch(
      userRegister({
        email,
        password,
        role,
        name,
        organizationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
