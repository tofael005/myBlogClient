import { useEffect } from "react";
import { useState } from "react";
import Single from "./single";




const About = () => {
    const [cards, setCards] = useState()

    useEffect(() => {
            fetch("http://localhost:3000/mealbd")
            .then(res => res.json())
            .then(data => setCards(data.data))
    }, [])
    console.log(cards)
    return (
        <div className="max-w-[1240px] mx-auto mt-14">
            {
               cards?.map((SingleCard, i) => <Single key={i} SingleCard={SingleCard} />)
            }

        </div>
    );
};

export default About;