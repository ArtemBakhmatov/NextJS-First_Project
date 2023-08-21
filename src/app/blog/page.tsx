import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {  // для сео оптимизации
	title: 'Blog | Next App',
}

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/postsww', {
        next: {         // этот объект для кэширования 
            revalidate: 60 // промежуток времени (60 секунд)
        }
    });
    if (!response.ok) throw new Error('Unable to fetch posts!');

    return response.json();
}

const Blog = async () => {
    const posts = await getData();
    return (
        <>
            <h1>
                Blog Page
            </h1>
            <ul>
                { posts.map((post: any) => 
                    <li key={ post.id }>
                        <Link href={`/blog/${ post.id }`} style={{color: 'black'}}>{ post.title }</Link>
                    </li>
                )}
            </ul>
        </>
    );
};

export default Blog;