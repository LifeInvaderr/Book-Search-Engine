import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`
//must use User for me query and have Book as part of the object
/*
Must look something like this
{
me {
    _id
    username
    email
    bookCount
    savedBooks {
        bookId
        authors
        description
        title
        image
        link
    }
}
}
*/