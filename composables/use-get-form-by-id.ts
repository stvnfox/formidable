import { computed } from "vue";
import { useFetch, useNuxtApp } from "#app";

export const useGetFormById = async (formId: string) => {
    const { $auth } = useNuxtApp();
    const userId = $auth.user?.id;

    if (!userId) {
        throw new Error("User not found");
    }

    const params = computed(() => ({
        userId,
        formId
    }))

    const { data, status } = await useFetch(`/api/forms/by-id`, {
        params
    })

    if (!data.value) {
        throw new Error("Failed to fetch form");
    }

    return { data: data.value, status: status.value }
}