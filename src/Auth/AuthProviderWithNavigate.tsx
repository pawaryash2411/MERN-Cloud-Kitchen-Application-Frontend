import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

type props = {
  children: React.ReactNode;
};

function AuthProviderWithNavigate({ children }: props) {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_DOMAIN_NAME;
  const clientID = import.meta.env.VITE_CLIENT_ID;
  const callbackUrl = import.meta.env.VITE_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  const onRedirectCallback = () => {
    navigate("/callback-auth");
  };

  if (!domain || !clientID || !callbackUrl || !audience) {
    throw new Error("Can't Authenticate Customer");
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: callbackUrl,
        audience: audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default AuthProviderWithNavigate;
