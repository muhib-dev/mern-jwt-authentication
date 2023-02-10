import { useEffect } from "react";
import useAuth from "./useAuth";
import { axiosPrivate } from "@utils/axios";

const useAxiosPrivate = () => {
  const { accessToken, refresh } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        config.headers = config.headers ?? {};

        if (!config.headers["authorization"]) {
          config.headers["authorization"] = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;

          const { accessToken: newAccessToken } = await refresh();
          prevRequest.headers["authorization"] = `Bearer ${newAccessToken}`;

          return axiosPrivate(prevRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken]);

  return axiosPrivate;
};

export default useAxiosPrivate;
