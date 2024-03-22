import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addProduct">Add Product</Link>
          </li>
          <li>
            <Link to="/updateProduct">Update Product</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default AdminLayout;