const commentHandler = async (event) => {
  event.preventDefault();
  
  const title = document.querySelector('#post-name').value.trim();
  const description = document.querySelector('#post-desc').value.trim();

   if (title && description) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/blogPost');
    } else {
      alert('Failed to create comment');
    }
  }
};

document
.querySelector('.post-list')
.addEventListener('click', commentHandler);