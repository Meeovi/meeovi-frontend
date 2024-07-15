import { Client } from '@elastic/elasticsearch';
//import auth from '../middleware/auth';

const client = new Client({ node: process.env.ELASTICSEARCH_URL });

export default defineEventHandler(async (event) => {
  //  auth(event); // Ensure this runs before your handler logic
    const body = await useBody(event);
    const { indexName, data } = body;
  
    try {
      const response = await client.index({
        index: indexName,
        body: data,
      });
  
      await client.indices.refresh({ index: indexName });
      return { success: true, response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  });
