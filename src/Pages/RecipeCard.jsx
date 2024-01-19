import React, {useState,useEffect} from "react";

const RecipeCard = ({ id }) => {
    const [recipe, setRecipe] = useState({ instructions: "" });
    const [show,setShow]=useState(true)
    useEffect(() => {
      searchRecipe(id);
  
      async function searchRecipe(id) {
        const API_KEY_R = "";//ENTER UR API
        try {
          const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY_R}`);
          const data = await res.json();
          setRecipe(data || {});
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
    }, [id]); // Only run when id changes
  
    return (
      <>
        <div>
        {show && <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>}
        
        <button type="button" onClick={()=>setShow(!show)}>{show===true?'Hide':'Show'}</button>
        
        </div>
      </>
    );
  };
  
  export default RecipeCard;
