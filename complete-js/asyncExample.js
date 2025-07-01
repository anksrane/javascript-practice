async function getPosts(params) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if(!response.ok) throw new Error(response.statusText);

        const post=await response.json();
        console.log("Post fetched using async/await:", post);
    } catch (error) {
        console.error("Error : ",error);
    }
}

getPosts();