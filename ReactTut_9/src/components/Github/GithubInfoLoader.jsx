async function GithubInfoLoader() {
    let res = await fetch('https://api.github.com/users/sage-enc')
    return res.json();
}

export default GithubInfoLoader