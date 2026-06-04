import axios from "axios";

try {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  console.log(response.data);
} catch (error) {
  console.error(error.message);
}