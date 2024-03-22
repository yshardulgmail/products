import Modal from "./Modal";
import "./admin.css"
import React, {useState} from "react";
import { useParams, useLocation } from 'react-router-dom';


const products = {
	Man: [{
		name: "Product1",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		name: "Product2",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		name: "Product3",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		name: "Product4",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	}],
	Woman: [{
		name: "Product11",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		name: "Product22",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		name: "Product33",
		category: "Man",
		subcategory: "Shoes",
		price: "4200",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
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
	const {state} = useLocation();
	const { category } = state;
	console.log(state)
	const tableData = products[category].map(item => {
		return <tr>
			<td>{item.name}</td>
			<td>{item.category}</td>
			<td>{item.subcategory}</td>
			<td>{item.price}</td>
			<td><img src={item.url} alt="Avatar" style={{ width: "25px", height: "25px" }} /></td>
			<td><button onClick={() => {setShow(true); setAction("Add");}} >Add</button>
			<button onClick={() => {setShow(true); setAction("Edit");}} >Edit</button>
			<button onClick={() => {setShow(true); setAction("Delete");}} >Delete</button></td>
		</tr>
	});
	const productData = <table>
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
	return (
		<div>
			<h2>Products</h2>
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

			<Modal title="Products Data" onClose={() => setShow(false)} show={show} action={action}>
				{productData}
				<div style={{ display: "inline-block", width: "100%" }}></div>
			</Modal>
		</div>
	);
};

export default AddProduct;