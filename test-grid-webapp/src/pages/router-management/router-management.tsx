import React, { ReactElement, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CABINET_RECORDS_ROUTE, CABINET_ROUTE, LOGIN_ROUTE } from "../../models/routes";
import useAuthSelectors from "../../store/selectors/auth";
import { getCookie } from "../../services/localStorageService";
import { authorize } from "../../api";
import { useActions } from "../../hooks/useActions";

function RouterManagement(): ReactElement {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    user: { id }
  } = useAuthSelectors();
  const { login } = useActions();

  useEffect(() => {
    if (getCookie("token")) {
      authorize().then((response) => {
        const { access_token, ...user } = response.data;
        login(user);
      });
    }
  }, []);

  useEffect(() => {
    function checkAuthentication(): void {
      const isAuthorized = id > 0;
      return isAuthorized ? navigate(CABINET_ROUTE) : navigate(LOGIN_ROUTE);
    }
    checkAuthentication();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    function checkLocation(): void {
      switch (location.pathname) {
        case CABINET_ROUTE: {
          // return navigate(`${CABINET_ROUTE}/${CABINET_RECORDS_ROUTE}`);
          return navigate(CABINET_RECORDS_ROUTE);
        }
        default: {
          break;
        }
      }
    }
    checkLocation();
    // eslint-disable-next-line
  }, [location]);

  return <></>;
}

export default RouterManagement;
