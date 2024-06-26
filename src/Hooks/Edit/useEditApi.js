import supabase from '../../Services/supabase';

export const useEditApi = ({ key,id }) => {
  async function editFn(newData ) {
    // 1. Create
    const { data, error } = await supabase
      .from(key)
      .update(newData)
      .eq('id', id)
      .select();

    if (error) {
      console.error(error);
      throw new Error(`Item could not be edited`, error.message);
    }
    return data;
  }

  return { editFn };
};
