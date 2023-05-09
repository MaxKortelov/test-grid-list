import React, { ReactElement, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CABINET_ROUTE, INITIAL_ROUTE, LOGIN_ROUTE } from "../../models/routes";
import useAuthSelectors from "../../store/selectors/auth";

function RouterManagement(): ReactElement {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    user: { id }
  } = useAuthSelectors();
  useEffect(() => {
    function checkAuthentication(): void {
      switch (location.pathname) {
        case INITIAL_ROUTE: {
          const isAuthentified = id.length > 0;
          return isAuthentified ? navigate(CABINET_ROUTE) : navigate(LOGIN_ROUTE);
        }
        default: {
          break;
        }
      }
    }

    checkAuthentication();
    // eslint-disable-next-line
  }, []);

  return <></>;
}

export default RouterManagement;
