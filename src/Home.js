import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id:1, title: 'My new website', author: 'mario', body: 'lorem ipsum...' },
        { id:2, title: 'Welcome to the party', author: 'eben', body: 'lorem ipsum...' },
        { id:3, title: 'Web dev top tips', author: 'mario', body: 'lorem ipsum...' }
    ]);

    const[name, setName] = useState('Higuain');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log(`use effect ran`);
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />

            <button onClick={() => setName('Benzema')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}

export default Home;