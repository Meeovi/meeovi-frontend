import { useRuntimeConfig } from '#imports';

async function findOrCreateUserInMagento(firebaseUser) {
    const config = useRuntimeConfig();
    // Check if the user exists in Magento
    const searchResponse = await $fetch(`${config.public.commerceUrl}/customers/search`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.public.commerceApiToken}`, // Replace with your admin token
        },
        body: {
            searchCriteria: {
                filterGroups: [
                    {
                        filters: [
                            { field: "email", value: firebaseUser.email, condition_type: "eq" },
                        ],
                    },
                ],
            },
        },
    });

    const existingCustomer = searchResponse.items?.[0];

    if (existingCustomer) {
        return existingCustomer; // Return existing user
    }

    // Create a new customer in Magento
    const newCustomer = await $fetch(`${config.public.commerceUrl}/customers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.public.commerceApiToken}`, // Replace with your admin token
        },
        body: {
            customer: {
                email: firebaseUser.email,
                firstname: firebaseUser.name.split(" ")[0],
                lastname: firebaseUser.name.split(" ")[1] || "",
            },
            password: "<GENERATE_A_PASSWORD>", // Replace with a secure password logic
        },
    });

    return newCustomer;
}
