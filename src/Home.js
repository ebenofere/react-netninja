import { useState } from 'react';

const Home = () => {
    // let name = 'Mario';
    const [blogs, setBlogs] = useState([
        { id:1, title: 'My new website', author: 'mario', body: 'lorem ipsum...' },
        { id:2, title: 'Welcome to the party', author: 'eben', body: 'lorem ipsum...' },
        { id:3, title: 'Web dev top tips', author: 'yoshi', body: 'lorem ipsum...' }
    ]);


    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>

                </div>
            ))
            }
        
        </div>
    );
}

export default Home;