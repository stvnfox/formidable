import { useFetch, useNuxtApp } from "#app";

export const useCreateForm = async () => {
    const { $auth } = useNuxtApp();
    const userId = $auth.user?.id;

    if (!userId) {
        throw new Error("User not found");
    }

    const { data, status } = await useFetch("/api/forms/create", {
        method: "POST",
        body: {
            userId: userId
        }
    })

    return {
        data: data.value,
        status: status.value
    }
}