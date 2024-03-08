import { useEffect, useRef } from "react";
import { Spinner } from "@nextui-org/react";
import { useCreateNewUser } from "../api/UserApi";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";

const AuthCallback = () => {
  const { NewUser } = useCreateNewUser();
  const currentState = useRef(false);
  const navigate = useNavigate();
  const { user } = useAuth0();

  useEffect(() => {
    if (user?.sub && user?.email && !currentState.current) {
      NewUser({ auth0Id: user?.sub, email: user?.email });
      currentState.current = true;
      toast.success("Login successfully!!");
    }
    navigate("/");
  }, [navigate, user, NewUser]);

  return (
    <>
      <Spinner
        className="flex justify-center items-center "
        color="secondary"
      />
    </>
  );
};

export default AuthCallback;
