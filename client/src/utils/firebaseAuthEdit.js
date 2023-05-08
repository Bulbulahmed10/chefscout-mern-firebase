const firebaseErrorEdit = (err) => {
    return err.message
      .match(/\(([^)]+)\)/)[1]
      .split("/")[1]
      .replace(/-/g, " ");
  };
  
  export default firebaseErrorEdit;