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
                <img src={item.url} alt="Avatar" style={{width:"100%"}}/>
                <div className="container">
                  <h4><b>{item.name}</b></h4>
                  <p>{item.description}</p>
                </div>
              </div>
          )})};

    </div>;
};
  
export default ShowProducts;