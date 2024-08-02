<<<<<<< HEAD
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate} from 'react-router-dom';
=======
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function getCSRFToken() {
    let csrfToken = null;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'csrftoken') {
            csrfToken = value;
            break;
        }
    }
    return csrfToken;
}
>>>>>>> Simanga-dev

// function BlogForm() {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const [image, setImage] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = event => {
//         event.preventDefault();

//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('content', content);
//         if (image) {
//             formData.append('image', image);
//         }

<<<<<<< HEAD
//         axios.get('http://localhost:8000/freshlyapp/blogs/', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//             .then(response => {
//                 navigate.push('/');
//             })
//             .catch(error => {
//                 console.error('There was an error creating the blog!', error);
//             });
//     };
=======
        const csrfToken = getCSRFToken();

        axios.post('http://localhost:8000/freshlyapp/blogs/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': csrfToken
            }
        })
        .then(response => {
            navigate('/');
        })
        .catch(error => {
            console.error('There was an error creating the blog!', error);
        });
    };
>>>>>>> Simanga-dev

//     return (
//         <div>
//             <h1>Create Blog</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Title</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={e => setTitle(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Content</label>
//                     <textarea
//                         value={content}
//                         onChange={e => setContent(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Image</label>
//                     <input
//                         type="file"
//                         onChange={e => setImage(e.target.files[0])}
//                     />
//                 </div>
//                 <button type="submit">Create</button>
//             </form>
//         </div>
//     );
// }

// export default BlogForm;
