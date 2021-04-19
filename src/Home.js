import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id:1, title: 'My new website', author: 'mario', body: 'lorem ipsum...' },
        { id:2, title: 'Welcome to the party', author: 'eben', body: 'lorem ipsum...' },
        { id:3, title: 'Web dev top tips', author: 'mario', body: 'lorem ipsum...' }
    ]);
 
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's Blogs!" />
        </div>
    );
}

export default Home;