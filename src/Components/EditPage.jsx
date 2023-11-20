import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const apiURL= `http://localhost:4005`;

function vintageEditForm() {
  let { id } = useParams();
 

  const [vintage, setVintage] = useState({
    name: "",
    style: "",
    category: "",
    price: "",
    isfavorite: "",
});

  const handleTextChange = (event) => {
    setVintage({ ...vintage, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setVintage({ ...vintage, isfavorite: !vintage.isfavorite });
  };


  const updateVintages = () => {
    console.log(`${apiURL}/vintages/${id}`);

    fetch(`${apiURL}}/vintages/${id}`, {
      method: "PUT",
      body: JSON.stringify(vintage),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        
      })
      .catch((error) => console.error("catch", error));
  };


  useEffect(() => {
    fetch(`${apiURL}/vintages/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setVintage(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateVintages();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={vintage.name}
          type="text"
          onChange={handleTextChange}
      
          required
        />
        <label htmlFor="style">Style:</label>
        <input
          id="style"
          type="text"
          value={vintage.style}
    
          onChange={handleTextChange}
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={vintage.category}
         onChange={handleTextChange}
         required
        />
<label htmlFor="price">Price:</label>
        <input
          id="price"
          type="integer"
          name="price"
          value={vintage.category}
        
          onChange={handleTextChange}></input>

        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={vintage.isfavorite}
        />
        
       
        <br />

        <input type="submit" />
      </form>
      <Link to={`/vintages/${id}`}>
        <button>submit</button>
      </Link>
    </div>
  );
}

export default vintageEditForm;
