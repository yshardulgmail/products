import Modal from "./Modal";
import "./admin.css"
import React, { useState } from "react";
import { useParams, useLocation } from 'react-router-dom';


const productsData = {
	Man: [{
		id: 1,
		name: "Product1",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		id: 2,
		name: "Product2",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		id: 3,
		name: "Product3",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		id: 4,
		name: "Product4",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	}],
	Woman: [{
		id: 5,
		name: "Product11",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		id: 6,
		name: "Product22",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		id: 7,
		name: "Product33",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		id: 8,
		name: "Product44",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	}]
};


const AddProduct = (props) => {
	const [show, setShow] = useState(false);
	const [action, setAction] = useState("");
	const [modalAction, setModalAction] = useState(null);
	const [products, setProducts] = useState(productsData);
	const [productDetails, setProductDetails] = useState(<></>);
	const [selectedId, setSelectedId] = useState();
	const { state } = useLocation();
	const { category } = state;
	let productData = <></>;

	const handleAdd = () => {
		setAction("Add");
		productData = <table>
			<tr>
				<td>Product Name</td>
				<td><input type="text"></input></td>
			</tr>
			<tr>
				<td>Category</td>
				<td><input type="text"></input></td>
			</tr>
			<tr>
				<td>SubCategory</td>
				<td><input type="text"></input></td>
			</tr>
			<tr>
				<td>Price</td>
				<td><input type="text"></input></td>
			</tr>
			<tr>
				<td>Image URL</td>
				<td><input type="text"></input></td>
			</tr>
		</table>
		setModalAction(() => addProduct);
		setShow(true);
	}

	const handleUpdate = (id) => {
		console.log(id);
		setSelectedId(id);
		setAction("Update");
		setModalAction(() => updateProduct);

		const product = products[category].filter(item => item.id == id);
		console.log(product);
		setProductDetails(<table>
			<tr>
				<td>Product Name</td>
				<td><input type="text" id="name" name="name" value={product.name}></input></td>
			</tr>
			<tr>
				<td>Category</td>
				<td><input type="text" id="category"  name="category" value={product.category}></input></td>
			</tr>
			<tr>
				<td>SubCategory</td>
				<td><input type="text" id="subcategory" name="subcategory" value={product.subcategory}></input></td>
			</tr>
			<tr>
				<td>Price</td>
				<td><input type="text" id="price" name="price" value={product.price}></input></td>
			</tr>
			<tr>
				<td>Image URL</td>
				<td><input type="text" id="url" name="url" value={product.url}></input></td>
			</tr>
		</table>);
		setShow(true);
	}

	const handleDelete = (id) => {
		setShow(true);
		setAction("Delete");
		setSelectedId(id);
		setModalAction(() => deleteProduct);
	}

	const addProduct = () => {
		alert("asdasdas");
	}

	const updateProduct = (id) => {
		alert(selectedId);
	}

	const deleteProduct = (id) => {
		alert(selectedId);
	}

	const tableData = products[category].map(item => {
		return <tr>
			<td>{item.name}</td>
			<td>{item.category}</td>
			<td>{item.subcategory}</td>
			<td>{item.price}</td>
			<td><img src={item.url} alt="Avatar" style={{ width: "25px", height: "25px" }} /></td>
			<td><button onClick={() => handleUpdate(item.id)} style={{width:"150px", margin:"10px"}}>Edit Product</button>
				<button onClick={() => handleDelete(item.id)} style={{width:"150px", margin:"10px"}}>Delete Product</button></td>
		</tr>
	});

	return (
		<div>
			<h2>Products</h2>
			<hr />
			<button onClick={() => handleAdd()} style={{width:"150px", margin:"20px"}} >Add Product</button>
			<table className="customers">
				<tr>
					<th>Name</th>
					<th>Category</th>
					<th>SubCategory</th>
					<th>Price</th>
					<th>Image</th>
					<th>Actions</th>
				</tr>
				{tableData}

			</table>

			<Modal title="Products Data" onClose={() => setShow(false)} onAction={() => {setShow(false); modalAction()}} show={show} action={action}>
				{productDetails}
				<div style={{ display: "inline-block", width: "100%" }}></div>
			</Modal>
		</div>
	);
};

export default AddProduct;