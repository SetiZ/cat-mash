import './CatCard.css';

const CatCard = ({cat}) => {
  return (
    <div className="cat_card">
        <img className="cat_img" src={cat.url} loading="lazy" alt={cat.id} />
        <div className="cat_score">{cat.score}</div>
    </div>
  );
}

export default CatCard;