//Add message from array
export const addMessage = (array: any[], item: any) => {
    const set = new Set(array);
    set.add(item);
    return (Array.from(set)).reverse();
  };
//Remove message from array
  export const removeMessage = (array: any[], item: any) => {
    const set = new Set(array);
    set.delete(item);
    return Array.from(set);
  };
  