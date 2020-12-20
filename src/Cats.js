import { useState, useEffect } from 'react';

import { fetchCats, getCats } from './CatStore';
import CatCard from './CatCard';
import Header from './Header';
import './Cats.css';

function Cats() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCats()
      .then(
        () => {
          setIsLoaded(true);
          setItems(getCats());
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <>
      <Header />
      <main>
        <div className="clowder">
          <ul>
          {items.map(item => (
            <li key={item.id}>
              <CatCard cat={item} />
            </li>
          ))}
          </ul>
        </div>
      </main>
      <footer>
        <a href="/mash">Vote for your favorite!</a>
      </footer>
    </>
    );
  }
}

export default Cats;
