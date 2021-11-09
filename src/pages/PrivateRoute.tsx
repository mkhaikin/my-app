import { ROLE } from '../interfaces/role';
import { useSelector } from 'react-redux';
import { Navigate, Route, useLocation } from 'react-router-dom';
import {useTypesSelector} from "../hooks/menuTypesSelector";

interface Props {
  element: React.ReactElement;
  requiredRoles: Array<ROLE>;
  path?: string;
}

const PrivateElement: React.FC<Props> = ({ element, requiredRoles }) => {
  let location = useLocation();
  const {access, loading, error, isAuthenticated } = useTypesSelector(state=> state.access)
  
  if (loading) return <p className="container">Checking auth..</p>;

  let position:string = access?.user.position || ''
 
  const userHasRequiredRole = (Object.values(requiredRoles) as string[]).includes(position);

  //const userHasRequiredRole = requiredRoles.includes(access.user.position);

  return isAuthenticated && userHasRequiredRole ? ( element) : 
                ( <Navigate to="/login" state={{ from: location }} /> );
};

export const PrivateRoute: React.FC<Props> = ({
  element,
  requiredRoles,
  ...rest
}) => {
  return (
    <Route {...rest} element={ <PrivateElement element={element} requiredRoles={requiredRoles} /> } />
  );
};

export default PrivateElement;