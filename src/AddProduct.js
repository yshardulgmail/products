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
	const tableData = products.map(item => {
		return <tr>
			<td>{item.name}</td>
			<td><img src={item.url} alt="Avatar" style={{ width: "25px", height: "25px" }} /></td>
			<td><button onClick={() => setShow(true)} >Edit</button></td>
		</tr>
	});
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

			<Modal title="My Modal" onClose={() => setShow(false)} show={show}>
				<label style={{ fontWeight: "bold" }}>Review Summary: </label>
				<br />
				<br />
				{tableData}
				<br />
				<br />
				<div style={{ display: "inline-block", width: "100%" }}><label style={{ fontWeight: "bold" }}>Recipients: </label><input style={{ marginLeft: "15px", width: "75%" }} type="text"></input></div>
			</Modal>
		</div>
	);
};

export default AddProduct;