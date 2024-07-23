import { Food } from "./app/shared/models/Food";

export const sample_food:Food[] = [
    {
        id:"1",
        name:"burger",
        price:4,
        cookTime:'40-50',
        favorite:true,
        origins:['America'],
        stars:3.0,
        imageUrl:'assets/food-1.jpg',
        tags:['Fastfood','Burger','Lunch']
    },
    {
        id:"2",
        name:"Pizza",
        price:9,
        cookTime:'40-50',
        favorite:false,
        origins:['Italy'],
        stars:4.0,
        imageUrl:'assets/food-2.jpg',
        tags:['Fastfood','Pizza','Lunch']
    }

]