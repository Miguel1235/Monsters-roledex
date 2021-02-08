import Card from '../Card/Card';
import './CardList.css'

interface Monster {
  id: string;
  name: string;
  email: string;
  address: {
    city: string
  };
}

const CardList = ({ monsters }: any) => {
  return (
    <div className="cardListContainer ">
      {
        monsters.map(({ id, name, email, address }: Monster) => (
          <Card key={id} name={name} email={email} city={address.city} />
        ))
      }
    </div>
  )
}
export default CardList;
