// composables/createContact.js
import { createItem } from '@directus/sdk';

export default async function createContact(contactData) {
    const route = useRoute();

    const id = route.params.id;
    const { $directus } = useNuxtApp();
  
    try {
      const contact = await $directus.request(createItem('contacts', [
        {
          first_name: contactData.first_name,
          last_name: contactData.last_name,
          company: contactData.company,
          department: contactData.department,
          job_title: contactData.job_title,
          email: contactData.email,
          phone: contactData.phone,
          street: contactData.street,
          postcode: contactData.postcode,
          address_two: contactData.address_two,
          po_box: contactData.po_box,
          city: contactData.city,
          state: contactData.state,
          country: contactData.country,
          label: contactData.label,
          birthday: contactData.birthday,
          notes: contactData.notes,
          website: contactData.website,
          related_person: contactData.related_person,
          middle_name: contactData.middle_name,
          prefix: contactData.prefix,
          suffix: contactData.suffix,
          nickname: contactData.nickname,
          file_as: contactData.file_as,
          phonetic_first: contactData.phonetic_first,
          phonetic_middle: contactData.phonetic_middle,
          phonetic_last: contactData.phonetic_last,
          favorite: contactData.favorite,
          image: contactData.image,
          media: contactData.media,
          audio: contactData.audio,
          video: contactData.video,
          document: contactData.document,
          coverFile: null,
          avatarFile: null,
          username: contactData.username,
          spaces: [
            {
                spaces_id: {
                    id: id
                }
            }
        ],
        }
      ]));
      return contact;
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  }
  