// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function API() {
//     const [users, setUsers] = useState([]);
//     const [text, setText] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     async function fetchData() {
//         try {
//             setLoading(true);
//             const { data } = await axios.get('https://dummyjson.com/posts');
//             setUsers(data.posts);
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     }

//     async function submitHandler() {
//         try {
//             setLoading(true);
//             const { data } = await axios('https://dummyjson.com/posts', { title: text });
//             console.log(data);
//             setText(''); // Clear input field after successful submission
//             fetchData(); // Refresh data after submitting a new post
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div className="">
//             <h1>Posts Data</h1>
//             <hr />
//             <input
//                 type="text"
//                 className="border border-black m-2 w-96"
//                 value={text}
//                 onChange={(e) => {
//                     setText(e.target.value);
//                 }}
//             />
//             <button className="bg-blue-600 p-2 rounded-sm text-white" onClick={submitHandler} disabled={loading}>
//                 {loading ? 'Submitting...' : 'Submit'}
//             </button>
//             {error && <p className="text-red-600">{error}</p>}
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 users.map(({ id, title }, i) => (
//                     <div key={i} className="flex gap-3 items-center">
//                         <h4>{id}</h4>
//                         <h4>{title}</h4>
//                         <button className="bg-yellow-500 p-2 rounded-md" onClick={() => setText(title)}>
//                             Edit
//                         </button>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default API;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [text,setText]=useState('')
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      setPosts(posts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = ( updatedContent) => {
    setText(updatedContent)
  };

  async function submitHandler(){
    let data=await axios.post('https://jsonplaceholder.typicode.com/posts',{title:text})
    console.log(data);
  }
  return (
    <div>
      <h1>Posts</h1>
      <input type="text" className=' border border-black w-96'  onChange={(e)=>setText(e.target.value)} value={text}/>
      <button onClick={submitHandler} className=' bg-blue-600 text-white p-2 rounded-sm'>submit</button>
  
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <div>{post.title}</div>
            {/* <div>{post.body}</div> */}
            <button onClick={() => handleEdit( post.title)} className=' bg-red-600 p-2 rounded-sm'>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
