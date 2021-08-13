import { gql } from '@apollo/client';

export const GET_ME = gql`
    query thoughts()
    

`
//must use User for me query and have Book as part of the object

/*
Must look something like this

me {
    _id
    username
    email
    bookCount
    saveBooks [Book] {
        bookId
        authors
        description
        title
        image
        link
    }

}



*/