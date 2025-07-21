import { useParams, useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';

function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catégorie : {category}</h1>
      <Button variant="primary" onClick={handleReturn}>
        Retour à la page d'accueil
      </Button>
    </div>
  );
}

export default Category;
