import { useState, useEffect } from "react";
import { Link, useParams,  } from "react-router-dom";
const apiURL = `http://localhost:4005`;


function EditItems() {
  const [editVintage, setEditVintage] = useState([]);
  let { id } = useParams();


  useEffect(() => {
    fetch(`${apiURL}/vintages/${id}`,)
      .then((response) => response.json())
      .then((responseJSON) => setEditVintage(responseJSON))
      .catch((error) => console.error(error));
  }, [id, apiURL]);

  useEffect(() => {
    console.log(editVintage);
  }, [editVintage.name]);
  const handleDelete = () => {
    deleteVintage();
  };
  const deleteVintage = () => {
    fetch(`${apiURL}/vintages/${id}`, {
      method: "DELETE",
    })
      .then(() => (`/vintages`))
      .catch((error) => console.error(error));
  };
  return (
    
      
     
      <div className="">
        <div>
            <h1> delete items</h1>
          <Link to={`/vintages`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/vintages/${id}/editPage`}>
            <button type="delete">delete</button>
          </Link>
        </div>
        <div>
         
        </div>
      </div>
      
   
  );
}

export default EditItems;
