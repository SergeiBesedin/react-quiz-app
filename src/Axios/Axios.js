import axios from "axios";

export default axios.create({
  baseURL:
    "https://react-quiz-app-10101-default-rtdb.europe-west1.firebasedatabase.app/",
});
