'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvelidText(text){
  return !text || text.trim() === '';
}

export async function shareMeal(prevState ,formData) {

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if(
    isInvelidText(meal.title) || 
    isInvelidText(meal.summary) || 
    isInvelidText(meal.instructions) || 
    isInvelidText(meal.creator) || 
    isInvelidText(meal.creator_email) ||
    !meal.creator_email.instructions('@') ||
    !meal.image || meal.image.size === 0
  )  {
    return {
      message: 'Invalid input.'
    }
  }

  await saveMeal(meal);
  revalidatePath('/meals')
  redirect('/meals');
}