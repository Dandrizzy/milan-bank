import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useUser } from "./useUser";
import Spinner from "@/ui/Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function AdminRoute({ children }) {
 const navigate = useNavigate();

 // 1. Load the authenticated user
 const { isLoading, isAuthenticated, user } = useUser();


 // 2. If there is NO authenticated user, redirect to the /login
 useEffect(
  function () {
   if (!isAuthenticated && !isLoading) {
    navigate("/");
    toast.error(<span>You must be logged in to view this page.</span>, { duration: 5000 });
   }
  },
  [isAuthenticated, isLoading, navigate]
 );

 // 3. While loading, show a spinner
 if (isLoading)
  return (
   <FullPage>
    <Spinner />
   </FullPage>
  );

 // 4. If there IS a user, render the app

 if (isAuthenticated && user?.email === 'admin@nordrakreds.com') return children;
}

export default AdminRoute;
