const ambilDataUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const { username, email } = user;
                console.log(username);
                console.log(email);
            });
        });
};

export default ambilDataUser;