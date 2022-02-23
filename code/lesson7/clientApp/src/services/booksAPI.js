const serverURL = "http://localhost:8080";

async function addBook(newBook) {
    
    const url = serverURL + "/newbook";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    });
    const result = await response.json();

    return result;
}

async function getAllBooks() {
    const url = serverURL + "/";
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export default {
    addBook,
    getAllBooks
}