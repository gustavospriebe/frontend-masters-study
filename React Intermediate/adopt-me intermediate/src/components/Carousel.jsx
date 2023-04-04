import { useState } from "react";

function Carousel({ pet }) {
    const [active, setActive] = useState(
        pet[0] ?? "http://pets-images.dev-apis.com/pets/none.jpg"
    );

    return (
        <div className="carousel">
            <img src={active} alt="animal hero" />
            <div className="carousel-smaller">
                {pet.map((photo, index) => (
                    <img
                        src={
                            photo ??
                            "http://pets-images.dev-apis.com/pets/none.jpg"
                        }
                        key={photo}
                        alt="animal thumbnail"
                        onClick={() => setActive(pet[index])}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
