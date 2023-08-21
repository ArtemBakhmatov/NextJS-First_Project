import { Metadata } from "next";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`, {
        next: {         // этот объект для кэширования 
            revalidate: 60 // промежуток времени (60 секунд)
        }
    });
    return response.json();
}

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const post = await getData(id);
    return {
        title: post.title
    }
}

// export function generateMetadata({ params: { id } }: Props) {
//     return {
//         title: id
//     }
// }

const Post = async ({ params: { id } }: Props) => {
    const post = await getData(id);
    console.log(post);
    return (
        <>
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
        </>
    );
};

export default Post;