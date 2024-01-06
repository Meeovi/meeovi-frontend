// newsfeed.js
import { ref, onMounted } from 'vue';
import { useAsyncQuery, useMutation } from '@nuxt/http';

export const useNewsfeed = () => {
  const GET_POSTS_QUERY = `
    query {
      posts {
        id
        text
        user
        timestamp
        image
        video
        smileys
        backgrounds
        liked
        likes
        comments
      }
    }
  `;

  const ADD_POST_MUTATION = `
    mutation($text: String!, $image: String, $video: String, $smileys: [String!], $backgrounds: [String!]) {
      addPost(text: $text, image: $image, video: $video, smileys: $smileys, backgrounds: $backgrounds) {
        id
        text
        user
        timestamp
        image
        video
        smileys
        backgrounds
        liked
        likes
        comments
      }
    }
  `;

  const newPostText = ref('');
  const selectedFiles = ref([]);
  const posts = ref([]);

  const fetchPosts = async () => {
    const { data } = await useAsyncQuery(GET_POSTS_QUERY);
    if (data) {
      posts.value = data.data.posts;
    }
  };

  const addPost = async () => {
    const image = ''; // Implement logic to upload image to Directus and get the URL
    const video = ''; // Implement logic to upload video to Directus and get the URL

    const { data: newPostData } = await useMutation(ADD_POST_MUTATION, {
      text: newPostText.value,
      image,
      video,
      smileys: [], // Implement logic to extract smileys from the text
      backgrounds: [], // Implement logic to extract backgrounds from the text
    });

    if (newPostData) {
      posts.value.unshift(newPostData.data.addPost);
      newPostText.value = '';
    }
  };

  onMounted(fetchPosts);

  return {
    newPostText,
    selectedFiles,
    posts,
    addPost,
    fetchPosts,
  };
};
