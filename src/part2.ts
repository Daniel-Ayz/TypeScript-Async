
// PPL 2023 HW4 Part2

// Q 2.1 

// Specify the return type.
export const delayedSum = async (a: number, b: number, delay: number):Promise<number> => {
    return Promise.resolve().then(v => {
        setTimeout(()=>null, delay);
        return a+b;
    })
}


export const testDelayedSum = () => {
    console.log("here1");
    let sum = delayedSum(3, 2, 5000);
    console.log("here2");
    return sum;
 }

testDelayedSum()
 

// Q 2.2

// Values returned by API calls.
export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// When invoking fetchData(postsUrl) you obtain an Array Post[]
// To obtain an array of posts
export const postsUrl = 'https://jsonplaceholder.typicode.com/posts'; 

// Append the desired post id.
export const postUrl = 'https://jsonplaceholder.typicode.com/posts/'; 

// When invoking fetchData(invalidUrl) you obtain an error
export const invalidUrl = 'https://jsonplaceholder.typicode.com/invalid';

// Depending on the url - fetchData can return either an array of Post[] or a single Post.
// Specify the return type without using any.
export const fetchData = async (url: String): Promise<Post | Post[] | null> => {
    return fetch(url.toString()).then(res => res.json());
}

export const testFetchData = async() => {
    // let val1 = await fetchData(postsUrl);
    let val2 = await fetchData(postUrl + "1");
    let val3 = await fetchData(invalidUrl);
    console.log(val2, val3);
}
// testFetchData()
// Q 2.3

// Specify the return type.
export const fetchMultipleUrls = async (urls: string[]):Promise<(Post[]|Post|null)[]> =>
{
    const data = urls.map(async u => fetchData(u))
    const result =  Promise.all(data);
    return result;
}

export const testFetchMultipleUrls = async() => {
    const start = Date.now();
    const urls_created = [];
    for(let i=1; i<=20; i++){
        urls_created.push(postUrl+i.toString());
    }
    const data = await fetchMultipleUrls(urls_created);
    const end = Date.now()
    console.log(data);
    console.log(end - start);

}
// testFetchMultipleUrls();

