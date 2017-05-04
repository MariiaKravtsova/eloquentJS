const fetch = require("node-fetch")

// async function showGithubUser(handle) {
//     const url = `https://api.github.com/users/${handle}`;
//     const response = await fetch(url);
//     return await response.json();
// }

class GitHubApiClient {
    async showGithubUser(handle) {
        const url = `https://api.github.com/users/${handle}`;
        const response = await fetch(url);
        return await response.json();
    }
}

(async () => {
    const client = new GitHubApiClient();
    const user = await client.showGithubUser('MariiaKravtsova');
    console.log(user.name);
    console.log(user.location);
})();



