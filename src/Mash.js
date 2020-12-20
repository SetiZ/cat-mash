import { useState, useEffect } from 'react';
import { fetchCats, getRandomCats } from './CatStore';
import Header from './Header';

import './Mash.css';

const Mash = () => {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCats().then(() => {
      setItems(getRandomCats())
    },
    (error) => {
      setError(error);
    })
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else {
    return (
      <>
        <Header />
        <main>
          <div className="mash_container">
            { items[0] &&
              <section className="mash_compare"><img src={items[0].url} alt={items[0].id} loading="lazy" /></section>
            }
            { items[1] &&
              <section className="mash_compare"><img src={items[1].url} alt={items[1].id} loading="lazy" /></section>
            }
          </div>
        </main>
        <footer>
          <a href="/">See all cats</a>
          <br />
          <span className="cat_score"></span>
        </footer>
      </>
    );
  }
}

export default Mash;