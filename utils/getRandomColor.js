// Function for get color random
export const getRandomColor = (running) => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  if (running) {
    return color;
  }

  return "#000";
};
