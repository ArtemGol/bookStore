import axios from "axios";

export const booksAPI = {
    getBooks() {
        return axios.get(`/books.json`)
            .then(response => {
                return response.data;
            });
    }

}

export const authAPI = {
    login(email, password) {
        return axios.post('https://reqres.in/api/login', {
            email, password
        }).then(response => {
            return response.data
        })
    }
}