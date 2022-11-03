/* 
    Buscando e contando dados em Arrays 8
*/

//Contar o número de categorias e o número de livros em cada categoria
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milion�ria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babil�nia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Intelig�ncia Emocional",
        books: [
            {
                title: "Voc� � Insubstitu�vel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade � Como enfrentar o mal do s�culo",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 h�bitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

//Contar o número de autores

function countAuthors(){
    let authors = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores:", authors.length)
}
countAuthors();

//Mostrar livros do autor Auguto Cury

function booksOfAugustoCury(){
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Augusto Cury'){
                books.push(book.title)
            }
        }
    }
    console.log("Livros do autor Augusto Cury:", books)
}
booksOfAugustoCury();

/* Transformar a função acima em uma função que irá receber 
o nome do autor e devolver os livros desse autor.*/

function booksOfAuthor(author){
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury');
