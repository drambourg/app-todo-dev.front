// Convert timestamp to a user display
export const timestampToDisplay = (timestamp) => {
    try {
      return new Date(timestamp).toLocaleDateString();
    } catch (e) {
      console.log(e);
    }
  };
  