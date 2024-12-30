import { Api } from "@/shared/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

export const useIngredients = () => {
   const [ingredients, setIngredients] = useState<Ingredient[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    async function fetchIgredients() {
      try {
        setLoading(true)
        const response = await Api.ingredients.getAll();
        setIngredients(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIgredients();
  }, []);

  return { 
    ingredients,
    loading
  };
}