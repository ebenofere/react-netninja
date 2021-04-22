import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id:1, title: 'My new website', author: 'mario', body: 'lorem ipsum...' },
        { id:2, title: 'Welcome to the party', author: 'eben', body: 'lorem ipsum...' },
        { id:3, title: 'Web dev top tips', author: 'mario', body: 'lorem ipsum...' }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log(`use effect ran`);
        console.log(blogs);
    });

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;