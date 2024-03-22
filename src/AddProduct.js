import Modal from "./Modal";
import "./admin.css"
import React, {useState} from "react";


const products = [
	{
		name: "Product1",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		name: "Product2",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		name: "Product3",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	},
	{
		name: "Product4",
		url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
	}
];


const AddProduct = () => {
	const [show, setShow] = useState(false);
	const [action, setAction] = useState("");
	const tableData = products.map(item => {
		return <tr>
			<td>{item.name}</td>
			<td><img src={item.url} alt="Avatar" style={{ width: "25px", height: "25px" }} /></td>
			<td><button onClick={() => {setShow(true); setAction("Add");}} >Add</button><button onClick={() => {setShow(true); setAction("Edit");}} >Edit</button></td>
		</tr>
	});
	const productData = <table>
		<tr>
			<td>Product Name</td>
			<td><input type="text"></input></td>
		</tr>
		<tr>
			<td>Description</td>
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
	</table>
	return (
		<div>
			<table className="customers">
				<tr>
					<th>Name</th>
					<th>Image</th>
					<th>Actions</th>
				</tr>
				{tableData}

			</table>

			<Modal title="My Modal" onClose={() => setShow(false)} show={show} action={action}>
				{productData}
				<div style={{ display: "inline-block", width: "100%" }}></div>
			</Modal>
		</div>
	);
};

export default AddProduct;