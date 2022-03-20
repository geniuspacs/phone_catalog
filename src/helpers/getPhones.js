export const getPhones = async () => {
    const url = 'http://localhost:8080/phones';

    const resp = await fetch(url);

    const { phones } = await resp.json();

    return phones;
}