import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import React from "react";

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesnt exist!</div>;
    }

    if (error.status === 401) {
      return <div>You arent authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return (
    <div>
      Something went wrong <div>{isRouteErrorResponse(error)}</div>
    </div>
  );
}

export default ErrorBoundary;
