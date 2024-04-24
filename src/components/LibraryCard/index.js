import {GoNote} from 'react-icons/go'
import './index.css'

const myLibraryElements = [
  {User: 'My Saved Library 1', dateOfBirth: 'dd-mm-yyyy', color: '#66B2FF'},
  {User: 'My Saved Library 2', dateOfBirth: 'dd-mm-yyyy', color: '#3333FF'},
  {User: 'My Saved Library 3', dateOfBirth: 'dd-mm-yyyy', color: '#FF3333'},
  {User: 'My Saved Library 4', dateOfBirth: 'dd-mm-yyyy', color: '#FF8000'},
  {User: 'My Saved Library 5', dateOfBirth: 'dd-mm-yyyy', color: '#00CC66'},
]

const LibraryCard = () => {
  return (
    <>
      <div>
        <ul>
          {myLibraryElements.map(eachItem => (
            <li key={eachItem.User} className="LibraryCard">
              <div className="LibraryCardItem">
                <GoNote
                  style={{color: eachItem.color}}
                  className="noteBookIcon"
                />
                <h1>{eachItem.User}</h1>
                <p>{eachItem.dateOfBirth}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default LibraryCard
