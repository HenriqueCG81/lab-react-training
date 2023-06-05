const IdCard = (props) => {
  return (
    <div className="card">
      <div className="profile">
        <img src={props.picture} alt="" className="imageStud" />
        <div className="info">
          <p>First name: {props.firstName}</p>
          <p>Last name: {props.lastName}</p>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height}</p>
          <p>Birth: {props.birth}</p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
