import { useParams, useNavigate } from 'react-router';

function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catégorie : {category}</h1>
      <button onClick={handleReturn}>Retour à la page d'accueil</button>
    </div>
  );
}

export default Category;
