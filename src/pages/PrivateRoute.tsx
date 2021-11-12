import { ROLE } from '../interfaces/role';
import { Navigate, Route, useLocation } from 'react-router-dom';
import {useTypesSelector} from "../hooks/menuTypesSelector";
import NotFoundPage from './Notfound';

export const PrivateRoute = ({
  children,
  roles,
} : {
  children: JSX.Element;
  roles: Array<ROLE>
}) => {
  console.log("!!!!!!!! PrivateRoute !!!!!!!!!!!!!!!")
  let location = useLocation();
  const {access, loading, error, isAuthenticated } = useTypesSelector(state=> state.access)
  
  if (loading) return <p className="container">Checking auth..</p>;

  let position:string = access?.user.position || ''
 
  const userHasRequiredRole = (Object.values(roles) as string[]).includes(position);

  //const userHasRequiredRole = requiredRoles.includes(access.user.position);
  console.log("Position: " + position)

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <NotFoundPage />; // build your own access denied page (sth like 404)
    
  }

  return children;
};

