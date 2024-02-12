import { useEffect } from "react";
import { useState } from "react";





const About = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/blogs")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto mt-14">
            {
                cards?.map((data) => {
                    <p>{data.des}</p>
                })
            }

        </div>
    );
};

export default About;