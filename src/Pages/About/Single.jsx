

const Single = ({SingleCard}) => {
    const {value, name} = SingleCard;
    return (
        <div>
           
           <h1>{value}</h1>
           <p>{name}</p>
        </div>
    );
};

export default Single;