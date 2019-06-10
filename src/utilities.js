export const collectIdsAndsDocs = doc => {
  return { id: doc.id, ...doc.data() };
};
