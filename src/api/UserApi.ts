import { useMutation, useQuery } from "react-query"
import { API_URL } from "./Helper"
import { useAuth0 } from "@auth0/auth0-react"
import toast from "react-hot-toast"
import { User } from "../utils/types"

export const useGetUserDetails = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getUserDetailsRequest = async (): Promise<User> => {
        const token = await getAccessTokenSilently();

        const response = await fetch(`${API_URL}/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        console.log(response)
        if (!response.ok) {
            throw new Error("Fetching User Request failed!!")
        }
        return response.json()
    }
    const { isLoading, error, data: currentUser } = useQuery("fetchCurrentUser", getUserDetailsRequest);

    if (error) {
        toast.error(error.toString());
    }
    return { isLoading, currentUser }
}


type CreateUserRequest = {
    auth0Id: string,
    email: string
}

export const useCreateNewUser = () => {
    const { getAccessTokenSilently } = useAuth0();
    const createNewUserRequest = async (user: CreateUserRequest) => {

        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`${API_URL}/user`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        console.log(response)
        if (!response?.ok) {
            throw new Error("Creating User Request failed!!")
        }
    }

    const { mutateAsync: NewUser, isLoading, isError, isSuccess } = useMutation(createNewUserRequest)

    return {
        NewUser, isLoading, isError, isSuccess
    }
}

type updateUser = {
    name: string,
    address: string,
    email: string,
    phone: number,
    city: string,
    country: string
}

export const useUpdateUserProfile = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateUserProfileRequest = async (formData: updateUser) => {
        const token = await getAccessTokenSilently()
        const response = await fetch(`${API_URL}/user`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })

        console.log(response);
        if (!response.ok) {
            throw new Error("Updating User Request failed!!")
        }
    }

    const { mutateAsync: UpdateUser, isLoading, isSuccess, reset, error } = useMutation(updateUserProfileRequest)

    if (isSuccess) {
        toast.success("Profile Updated Successfully!!")
    }

    if (error) {
        toast.error(error.toString());
        reset();
    }

    return { UpdateUser, isLoading }
}
