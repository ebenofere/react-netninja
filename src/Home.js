import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id:1, title: 'My new website', author: 'mario', body: 'lorem ipsum...' },
        { id:2, title: 'Welcome to the party', author: 'eben', body: 'lorem ipsum...' },
        { id:3, title: 'Web dev top tips', author: 'yoshi', body: 'lorem ipsum...' }
    ]);
 
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
        </div>
    );
}

export default Home;