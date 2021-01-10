import axios from "axios";

export const booksAPI = {
    getBooks() {
        return axios.get(`/books.json`)
            .then(response => {
                return response.data;
            });
    }

}