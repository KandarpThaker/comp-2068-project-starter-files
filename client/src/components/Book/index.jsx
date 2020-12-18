import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Book = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);

  const [book, setBook] = useState([]);

  useEffect(() => {
    if (!globalStore.REACT_APP_ENDPOINT) return;
    
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/books`)
    .then(({ data }) => {
      setBook(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the book: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="Books"/>

      <Container>
        {book && book.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Book Release Date</th>
              <th>Edit/Delete</th>
            </thead>

           
            <tbody>
              {book.map((bk, i) => (
                <tr key={i}>
                  <td>
                    {bk.bookName}
                  </td>
                  
                  <td>
                    {bk.bookAuthor}
                  </td>
                  <td>
                    {bk.bookReleaseDate}
                  </td>
                  <td>
                    <Link to={`book/edit/${bk._id}`}>
                      edit
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to={`book/destroy/${bk._id}`}>
                      delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
        <button> <Link to={`book/new`}> Add Book</Link></button>
      </Container>
    </>
  );
}
 
export default Book;