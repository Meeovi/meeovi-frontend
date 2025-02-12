import {
    createClient
} from '@supabase/supabase-js';
import 'dotenv'

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export default defineEventHandler(async (event) => {
    try {
        const {
            method
        } = event.node.req;

        if (method === 'GET') {
            const {
                postId
            } = getQuery(event);
            const {
                data,
                error
            } = await supabase
                .from('comments')
                .select('*')
                .eq('post_id', postId);

            if (error) throw createError({
                statusCode: 500,
                message: error.message
            });
            return data;
        }

        if (method === 'POST') {
            const body = await readBody(event);
            const {
                data,
                error
            } = await supabase.from('comments').insert(body);

            if (error) throw createError({
                statusCode: 500,
                message: error.message
            });
            return data;
        }

        if (method === 'DELETE') {
            const {
                id
            } = getQuery(event);
            const {
                error
            } = await supabase.from('comments').delete().eq('id', id);

            if (error) throw createError({
                statusCode: 500,
                message: error.message
            });
            return {
                success: true
            };
        }

        throw createError({
            statusCode: 405,
            message: 'Method not allowed'
        });
    } catch (error) {
        handleError(error, 'API error occurred.');
        throw createError({
            statusCode: 500,
            message: error.message
        });
    }
});