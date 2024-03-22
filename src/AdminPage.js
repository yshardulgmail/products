import React, {useState} from "react";
import AdminLayout from "./AdminLayout";
import ShowProducts from "./ShowProducts";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function AdminPage() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AdminLayout />}>
              <Route index element={<ShowProducts />} />
              <Route path="addProduct" element={<AddProduct />} />
              <Route path="updateProduct" element={<UpdateProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>

        <Outlet />
        </>
      );
}

export default AdminPage;