import {useState}from "react"
//  import { useNavigate } from "react-dom";
import "./createpage.css"


function CreatePage() {
    const [vintageData, setVintageData] = useState({
        name: "",
        style: "",
        category: "",
        price: "",
        isfavorite: "",
    });
    

    const apiURL= `http://localhost:4005`;
    //  const navigate =useNavigate()

    const handleInputChange = (event) => {
        setVintageData({
            ...vintageData,
            [event.target.id]: event.target.value
        });
    }
   
        const handleSubmit = (event) => {
            event.preventDefault();
             
         
    
        fetch(`${apiURL}/vintages`,{
            method: "POST",
            body: JSON.stringify(vintageData),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response)=>{
            setVintageData(response.data)

         
            //  navigate("/vintages")
        })
        .catch((error)=>{
            console.log(error)
            setVintageData("error")
        })  
        
    
    }
    return (
        <div>
  
          <h1>Add Vintage Clothing Item</h1>
                {/* Form fields */}
                {/* Rest of your form */}
                <form onSubmit={handleSubmit} >

                
               
                <label htmlFor="name">Name:</label>
                    {" "}
                   
                    <input
                    id="name"
                    type="text"
                    value={vintageData.name}
                     placeholder="Name"
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="style">
                    Style:</label>
                    <input
                    id= 'style'
                    type="text"
                    value={vintageData.style}
                     placeholder="Style"
                    onChange={handleInputChange} 
                    required/>
                
                <label htmlFor="category">
                    Category:</label>
                    <input
                    id="category"
                    type="text"
                    value={vintageData.category}
                     placeholder="Category"
                    onChange={handleInputChange}
                    required />

               
                    <label htmlFor="price">
                         Price:</label>
                        <input
                        id="price"
                        type="number"
                        value={vintageData.price}
                         placeholder="Price"
                        onChange={handleInputChange}
                        required />
                        

                        
                        
                        <label htmlFor="isfavorite">
                            isfavorite: </label>
                            <input
                            id="isfavorite"
                            type="checkbox"
                            value={vintageData.isfavorite}
                            placeholder="isfavorite"
                            onChange={handleInputChange}

                            />

                            
                        
                
        <button type="submit">submit</button>
                
            </form>
        </div>
   ) 
}

export default CreatePage;   