import Pet from "./Pet";

function Results({ pets }) {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No Pets found</h1>
            ) : (
                pets.map((pet) => (
                    <Pet
                        images={pet.images}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        location={`${pet.city}, ${pet.state}`}
                        key={pet.id}
                        id={pet.id}
                    />
                ))
            )}
        </div>
    );
}

export default Results;
