"use server";

import { checkUser } from "@/lib/checkUser";
import { DUMMY_RECIPE_RESPONSE } from "@/lib/dummy";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// Get or generate recipe
export async function getOrGenerateRecipe(formData) {
  try {
    const user = await checkUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const recipeName = formData.get("recipeName");

    // TODO: Connect this to actual AI generation or Strapi database lookup
    // Currently returns the working dummy recipe to ensure the build compiles immediately
    return DUMMY_RECIPE_RESPONSE;
  } catch (error) {
    console.error("Error getting/generating recipe:", error);
    return { success: false, message: error.message || "Failed to get recipe" };
  }
}

// Save to collection
export async function saveRecipeToCollection(formData) {
  try {
    const user = await checkUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const recipeId = formData.get("recipeId");
    if (!recipeId) {
      throw new Error("Recipe ID is required");
    }

    // TODO: Submit to Strapi API -> /api/collections or similar
    return {
      success: true,
      alreadySaved: false,
      message: "Recipe saved to your collection!",
    };
  } catch (error) {
    console.error("Error saving recipe:", error);
    return { success: false, message: error.message || "Failed to save recipe" };
  }
}

// Remove from collection
export async function removeRecipeFromCollection(formData) {
  try {
    const user = await checkUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const recipeId = formData.get("recipeId");
    if (!recipeId) {
      throw new Error("Recipe ID is required");
    }

    // TODO: Delete from Strapi API
    return {
      success: true,
      message: "Recipe removed from collection",
    };
  } catch (error) {
    console.error("Error removing recipe:", error);
    return { success: false, message: error.message || "Failed to remove recipe" };
  }
}
