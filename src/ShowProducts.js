import "./admin.css"
import { useNavigate } from 'react-router-dom';


const categories = [
  {
    url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    name: "cats",
    description: "Stupid cats"
  },
  {
    url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    name: "cats",
    description: "Stupid cats"
  }

];



function ShowProducts() {
  const history = useNavigate();
  return <div style={{display: "inline-flex"}}>
      {
      categories.map((item) => {
            return (
              <div className="card" onClick={() => history("/addProduct")}>
                <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Avatar" style={{width:"100%"}}/>
                <div className="container">
                  <h4><b>Sub Category 1</b></h4>
                  <p>Jeans</p>
                </div>
              </div>
          )})};

    </div>;
};
  
export default ShowProducts;