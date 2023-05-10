import React, { ReactElement, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CABINET_ROUTE, LOGIN_ROUTE } from "../../models/routes";
import useAuthSelectors from "../../store/selectors/auth";

function RouterManagement(): ReactElement {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    user: { id }
  } = useAuthSelectors();
  useEffect(() => {
    function checkAuthentication(): void {
      const isAuthorized = id.length > 0;
      return isAuthorized ? navigate(CABINET_ROUTE) : navigate(LOGIN_ROUTE);
    }
    checkAuthentication();
    // eslint-disable-next-line
  }, [location, id]);

  return <></>;
}

export default RouterManagement;
