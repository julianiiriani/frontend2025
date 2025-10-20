const ambilDataUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        users.forEach(user => {
            console.log(`Nama Lengkap: ${user.name}`);
        });
    } catch (error) {
        console.log(error);
    }
};

export default ambilDataUser;