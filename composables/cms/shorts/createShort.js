// composables/cms/shorts/createSpace.js
import { createItem } from '@directus/sdk';

export default async function createSpace(shortData) {
    const { $directus } = useNuxtApp();
    
    try {
        const short = await $directus.request(createItem('shorts', {
            name: shortData.name,
            description: shortData.description,
            status: shortData.status,
            type: shortData.type,
            video: shortData.video,
            video_url: shortData.video_url,
            age_restriction: shortData.age_restriction,
            duration: shortData.duration,
            thumbnailFile: shortData.thumbnailFile,
            videoFile: shortData.videoFile,
            creator: shortData.creator,
            // Match the structure from your GraphQL query
            departments: {
                create: [{
                    departments_id: shortData.departments
                }]
            }
        }));
        
        return short;
    } catch (error) {
        console.error('Error creating short:', error);
        throw error;
    }
}