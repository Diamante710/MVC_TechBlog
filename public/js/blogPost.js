const newPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/blogposts`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post.');
      }
    }
  };
  
const commentForm = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document
  .querySelector('.comment-form')
  .addEventListener('submit', commentForm);


  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPost);
  
  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);
  