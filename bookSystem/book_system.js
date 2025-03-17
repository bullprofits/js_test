let books = [];


function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;


    //todo create an object with all of our elements
    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            bookName: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        books.push(book);
        showBooks(books);
        clearInputs();
    }
    else {
        alert('Please fill in all the field correctly');
    }
    return;
}

function clearInputs(){
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
    return;
}

function showBooks(booksToDisplay){
    const bookList = document.getElementById('books'); // Ensure there's an element with this ID in HTML
    bookList.innerHTML = ''; // Clear previous list

    booksToDisplay.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.innerHTML = `
            <strong>${book.bookName}</strong> by ${book.authorName} 
            <br> ${book.bookDescription} 
            <br> Pages: ${book.pagesNumber} 
            <br><button onclick="deleteBook(${index})">Delete</button>
            <hr>
        `;
        bookList.appendChild(bookItem);
    });
}