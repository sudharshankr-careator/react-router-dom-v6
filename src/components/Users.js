import { Link, useNavigate, Outlet } from "react-router-dom";
function Users () {

	return (
		<div>
			<nav>
				<Link to="me">My Profile</Link>
			</nav>
            
			<Outlet />
		</div>
	);
}
export default Users;
