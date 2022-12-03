import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { RiUser5Fill } from "react-icons/ri";
import styled from "styled-components";

export const UserTxT = () => {
  const route = useRouter();
  const { user } = useUser();
  if (!user)
    return <p onClick={() => route.push("/api/auth/login")}>Anmelden</p>;
  return <Profile onClick={() => route.push("/profile")}>Mein Konto</Profile>;
};

export const UserIcon = () => {
  const route = useRouter();
  const { user } = useUser();
  return (
    <RiUser5Fill
      onClick={
        !user
          ? () => route.push("/api/auth/login")
          : () => route.push("/profile")
      }
      className="menu-icon"
    />
  );
};

const Profile = styled.p`
  img {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
