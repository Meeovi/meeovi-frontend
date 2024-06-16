export const processCategories = (categories) => {
    const parentCategories = categories.filter(category => category.parent === 0);
    const childrenCategories = categories.filter(category => category.parent !== 0);
  
    const categorized = parentCategories.map(parent => ({
      ...parent,
      children: childrenCategories.filter(child => child.parent === parent.id)
    }));
  
    return categorized;
  };