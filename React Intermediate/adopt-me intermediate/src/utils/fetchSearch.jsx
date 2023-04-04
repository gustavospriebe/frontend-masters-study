async function fetchSearch({ queryKey }) {
    const { location, breed, animal } = queryKey[1];

    const apiRes = await fetch(
        `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    if (!apiRes.ok) {
        throw new Error(`Fetch Search failed.`);
    }

    return apiRes.json();
}

export default fetchSearch;
