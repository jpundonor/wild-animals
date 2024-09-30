const fetchData = async () => {
  try {
    const response = await fetch("./assets/animales.json");
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export default fetchData;
