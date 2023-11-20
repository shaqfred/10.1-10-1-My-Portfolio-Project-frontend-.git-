import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const apiURL= `http://localhost:4005`;


function ShowPage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`${apiURL}/vintages/${id}`)
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Item Details</h2>
            {item ? (
                <div>
                   <h2>{item.name}</h2>
                   <h3>{item.style}</h3>
                   <h4>{item.category}</h4>
                   <p>${item.price}</p>
                   <p>{item.isfavorite}</p>
                    {/* Display the item details */}
                    <Link to={`/vintages/edit/${id}`}>Edit item</Link>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ShowPage;