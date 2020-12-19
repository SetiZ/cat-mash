import { useState, useEffect } from 'react';
import { fetchCats, getRandomCats } from './CatStore';
import Header from './Header';

const Mash = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCats().then(() => {
      setItems(getRandomCats())
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className="mash_container">
          {items.url &&
            <section className="mash_compare"><img src={items[0].url} alt={items[0].id} loading="lazy" /></section>
          }
          {items.url &&
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

export default Mash;