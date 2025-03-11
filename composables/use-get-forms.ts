import { computed } from "vue";
import { useFetch, useNuxtApp } from "#app";

export const useGetForms = async () => {
    const { $auth } = useNuxtApp();
    const userId = $auth.user?.id;

    if (!userId) {
        throw new Error("User not found");
    }

    const params = computed(() => ({
        id: userId
    }))

    // console.log(params.value)
    const { data, status } = await useFetch("/api/forms", {
        params
    })

    if (!data.value) {
        throw new Error("Failed to fetch forms");
    }

    return {
        data: data.value.items,
        status: status.value
    }
}