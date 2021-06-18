export const fetchUsernameByGender = async (isFemale) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(isFemale ? "Michelle Jordan" : "Michael Jordan");
    }, 5000);
  });
