import { Directus, createItem, readItems, readItem } from '@directus/sdk';

const directus = new Directus('https://your-directus-instance.com');

export const useDirectus = async () => {
  const authToken = useCookie('authToken'); // Or however you're managing auth

  directus.auth.static(authToken.value);

  const list = await $directus.request(createItem('lists', listData));

  const addProductToList = async (data) => {
    return directus.items('list_products').createItem(data);
  };

  const getLists = async () => {
    return directus.items('lists').readItems();
  };

  const getProductsInList = async (listId) => {
    return directus.items('list_products').readItem({
      filter: { list: { _eq: listId } },
      fields: ['product_id', 'quantity', 'id'],
    });
  };

  return { createList, addProductToList, getLists, getProductsInList };
};
