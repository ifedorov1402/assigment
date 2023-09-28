import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Navbar'
import BlogPos from './assets/BlogPost'
import data  from './assets/data'

export default function App() {
  const posts = data.map(item => (
    <BlogPos
      key={item.title} // Add a unique key to each post
      {...item}
    />
  ));

  return (
    <div className='page'> 
      <Navbar />
      {posts}
      <button class="btn">Older Posts</button>
    </div>
  );
}

