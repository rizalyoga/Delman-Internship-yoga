export const fetchDataUser = async () => {
  try {
    const res = await fetch("https://randomuser.me/api");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
