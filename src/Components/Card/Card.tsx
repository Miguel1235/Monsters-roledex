import "./Card.css";
interface Props {
  name: string;
  email: string;
  city: string;
}
const Card = ({ name, email, city }: Props) => {
  return (
    <div className="gradient cardContainer">
      <div className="center">
        <p className="name">{name}</p>
        <img
          src={`https://robohash.org/${name}.png?set=set2&size=180x180`}
          alt="a monster"
          width="100px"
          height="100px"
        />
      </div>
      <div className="center">
        <p>{email}</p>
        <p>{city}</p>
      </div>
    </div>
  );
};
export default Card;
