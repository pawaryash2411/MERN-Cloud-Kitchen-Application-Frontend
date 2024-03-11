import { useMutation, useQuery } from "react-query"
import { API_URL } from "./Helper"
import { useAuth0 } from "@auth0/auth0-react"
import toast from "react-hot-toast"

export const useCreateRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const CreateRestaurantRequest = async (formData: FormData) => {


        const token = await getAccessTokenSilently();

        const response = await fetch(`${API_URL}/restaurant`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(formData)
        })
        console.log(response)
        if (!response.ok) {

            throw new Error("Add Restaurant Request Failed!!")
        }
        return response.json();
    }
    const { mutate: CreateRestaurant, isLoading, error, reset, isSuccess } = useMutation(CreateRestaurantRequest);

    if (error) {
        toast.error(error.toString())
        reset()
    }

    if (isSuccess) {
        toast.success("Restaurants Created Successfully!!")
    }

    return {
        CreateRestaurant, isLoading
    }
}