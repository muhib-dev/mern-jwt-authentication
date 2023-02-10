import LoadingScreen from "@components/LoadingScreen";
import { createContext, useEffect, useReducer, useRef } from "react";
import { axiosPrivate } from "../utils/axios";
import jwtDecoder from "jwt-decode";
import { catchError } from "../utils/catchError";

//initial State value
const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  accessToken: "",
  user: null,
};

// create context
const AuthContext = createContext({ ...initialState });

// action types
const ActionTypes = {
  INIT: "INIT",
  LOGIN: "LOGIN",
  REFRESH: "REFRESH",
  LOGOUT: "LOGOUT",
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.INIT: {
      return {
        isInitialized: true,
        isAuthenticated: action.payload.isAuthenticated,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
      };
    }
    case ActionTypes.LOGIN: {
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
      };
    }
    case ActionTypes.REFRESH: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
      };
    }
    case ActionTypes.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        accessToken: "",
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};

// decode jwt
const decodeJwt = (token) => {
  const { userName, role, userId } = jwtDecoder(token);

  return { userName, role, userId };
};

// auth provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isMountedRef = useRef(false);

  // login
  const login = async (userName, password) => {
    const response = await axiosPrivate.post("/api/auth/login", {
      userName,
      password,
    });

    const { accessToken } = response.data;
    const user = decodeJwt(accessToken);

    dispatch({ type: ActionTypes.LOGIN, payload: { accessToken, user } });
  };

  // change password
  const changePassword = async (oldPassword, newPassword) => {
    await axiosPrivate.post("/api/auth/change-password", {
      oldPassword,
      newPassword,
    });
  };

  // logout
  const logout = async () => {
    try {
      await axiosPrivate.get("/api/auth/logout");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: ActionTypes.LOGOUT });
    }
  };

  // refresh token
  const refresh = async () => {
    console.log("refreshing ...");

    try {
      const response = await axiosPrivate.get("/api/auth/refresh");
      const { accessToken } = response.data;
      const user = decodeJwt(accessToken);

      dispatch({
        type: ActionTypes.REFRESH,
        payload: {
          accessToken,
          user,
          isAuthenticated: accessToken ? true : false,
        },
      });

      return { accessToken, user };
    } catch (error) {
      dispatch({
        type: ActionTypes.REFRESH,
        payload: { accessToken: "", user: null, isAuthenticated: false },
      });

      throw new Error(catchError(error));
    }
  };

  // init app
  const initializingApp = async () => {
    console.log("initializing ...");

    try {
      const { accessToken, user } = await refresh();

      dispatch({
        type: ActionTypes.INIT,
        payload: {
          accessToken,
          user,
          isAuthenticated: accessToken ? true : false,
        },
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.INIT,
        payload: { accessToken: "", user: null, isAuthenticated: false },
      });
    }
  };

  useEffect(() => {
    if (isMountedRef.current) return;
    initializingApp();

    isMountedRef.current = true;
  }, []);

  // show loading if not init
  if (!state.isInitialized) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        refresh,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
