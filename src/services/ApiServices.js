

export default async function getPosts() {
    let plainPosts = await loadPlainPosts();
    let users = await loadUsers();

    if (plainPosts !== undefined || users !== undefined) {

        if (plainPosts.length > 0 && users.length > 0) {
            const posts = plainPosts.map(post => {
                const { userId, id, title, body } = post;
                const user = users.find(user => user.id === userId);
                const username = user ? user.username : '';
                const website = user ? user.website : '';
                const city = user ? user.address.city : '';

                return {
                    userID: userId,
                    postID: id,
                    title,
                    body,
                    username,
                    website,
                    city
                };
            });

            return posts;
        } else {
            return [];
        }
    } else {
        console.log("its undefined");
        return [];
    }
}

async function loadPlainPosts() {
    let plainPosts;

    await fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'content-type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((json) => plainPosts = shuffle(json))
        .catch((e) => { console.log("Error loading plain posts: ", e) });

    console.log(plainPosts);
    return plainPosts;
}

async function loadUsers() {
    let users;

    await fetch('https://jsonplaceholder.typicode.com/users', {
        headers: {
            'content-type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((json) => users = json)
        .catch((e) => { console.log("Error loading users: ", e) });

    console.log(users);
    return users;
}

/**
 * Fisher-Yates shuffle algo
 * @param {Array} array what to shuffle
 * @returns shuffled array in random order
 */
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}