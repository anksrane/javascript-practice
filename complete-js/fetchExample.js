fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response=>{
        if(!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(data=>{
        console.log("Fetched Data: ",data);
        fetch("https://jsonplaceholder.typicode.com/posts/2")
            .then(response2=>{
                if(!response2.ok) throw new Error(response2.statusText);
                return response2.json();
            })
            .then(data2=>{
                console.log("Fetched Data 2: ",data2);
            })
            .catch(error=>{
                console.error("Error: ",error);
            })
    })
    .catch(error=>{
        console.error("Error: ",error);
    });