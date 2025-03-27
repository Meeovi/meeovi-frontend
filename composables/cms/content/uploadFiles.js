import { uploadFiles } from '@directus/sdk';

export default async function uploadFile({ imageFile, documentFile, videoFile, audioFile }) {
    const { $directus } = useNuxtApp();
    const uploadedFiles = {};
  
    try {
      if (imageFile) {
        const formDataImage = new FormData();
        formDataImage.append('file', imageFile);
        const uploadedImage = await $directus.request(uploadFiles(formDataImage));
        uploadedFiles.imageId = uploadedImage.id;
      }
  
      if (documentFile) {
        const formDataDocument = new FormData();
        formDataDocument.append('file', documentFile);
        const uploadedDocument = await $directus.request(uploadFiles(formDataDocument));
        uploadedFiles.documentId = uploadedDocument.id;
      }

      if (videoFile) {
        const formDataVideo = new FormData();
        formDataVideo.append('file', videoFile);
        const uploadedVideo = await $directus.request(uploadFiles(formDataVideo));
        uploadedFiles.videoId = uploadedVideo.id;
      }

      if (audioFile) {
        const formDataAudio = new FormData();
        formDataAudio.append('file', audioFile);
        const uploadedAudio = await $directus.request(uploadFiles(formDataAudio));
        uploadedFiles.audioId = uploadedAudio.id;
      }
  
      return uploadedFiles;
    } catch (error) {
      console.error('Error uploading files:', error);
      throw error;
    }
  }
