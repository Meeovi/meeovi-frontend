// composables/cms/spaces/createSpace.js
import { createItem } from '@directus/sdk';

export default async function createSpace(spaceData) {
    const { $directus } = useNuxtApp();
    
    try {
        const space = await $directus.request(createItem('spaces', {
            name: spaceData.name,
            description: spaceData.description,
            status: spaceData.status,
            type: spaceData.type,
            coverFile: spaceData.coverFile,
            avatarFile: spaceData.avatarFile,
            creator: spaceData.creator,
            // Match the structure from your GraphQL query
            departments: {
                create: [{
                    departments_id: spaceData.departments
                }]
            }
        }));
        
        return space;
    } catch (error) {
        console.error('Error creating space:', error);
        throw error;
    }
}
