'use server'

import { signIn, signOut } from "@/auth";

//get all products

export async function fetchAllProducts() {
    try {
        const res = await fetch('https://dummyjson.com/products',{
            method: 'GET',
            cache: 'no-store'
        })
        const data = await res.json();
        return {
            success: true,
            data: data?.products,
        }
        
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'An error occurred while fetching products',
        }
        
    }

}


export async function fetchProductDetails(currentProductID) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${currentProductID}`,{
            method: 'GET',
            cache: 'no-store'
        })
        const data = await res.json();
        return data;
        
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'An error occurred while fetching product details',
        }
        
    }
}

export async function loginAction(){
    await signIn('github');
}

export async function logoutAction(){
    await signOut('github');
}