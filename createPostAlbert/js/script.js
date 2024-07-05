const BASE_URL = "https://devto-clonejs-default-rtdb.firebaseio.com/posts.json";

const parserResponsePersonsFireBase = (object) => {
  const listPersonParsed = [];

  for (const key in object) {
    const obectParsed = {
      id: key,
      avatar: object[key].avatar,
      name: object[key].name,
      lastName: object[key].lastName,
      gender: object[key].gender,
      date: object[key].date,
      country: object[key].country,
      description: object[key].description,
    };
    listPersonParsed.push(obectParsed);
  }
  return listPersonParsed;
};

const getPostsApi = async () => {
  try {
    const response = await fetch(`${BASE_URL}/.json`, {
      method: "GET",
    });
    const parsed = await response.json();
    const results = parserResponsePersonsFireBase(parsed);
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

getPostsApi();
