import React, { useState } from 'react';
import styles from './PopupModel.module.css';
import { X } from 'lucide-react';
import axios from '../../axiosConfig';

function PopupModel({ onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [processing, setProcessing] = useState(false);
  const [lengthError, setLengthError] = useState('');
  const MAX_TITLE_LENGTH = 150;
  const MAX_DESCRIPTION_LENGTH = 500;

  // Function to handle title input change
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    if (newTitle.length > MAX_TITLE_LENGTH) {
      setLengthError(`Title cannot exceed ${MAX_TITLE_LENGTH} characters`);
    } else {
      setLengthError('');
    }
  };

  // Function to handle description input change
  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);

    if (newDescription.length > MAX_DESCRIPTION_LENGTH) {
      setLengthError(`Description cannot exceed ${MAX_DESCRIPTION_LENGTH} characters`);
    } else {
      setLengthError('');
    }
  };

  // Function to handle post submission
  const handlePost = async () => {
    setProcessing(true);

    if (!title || !description) {
      alert('Please fill in required fields');
      setProcessing(false);
      return;
    }

    const newQuestion = { title, description };
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/questions/ask-question', newQuestion, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response, "this is the resp");
      setProcessing(false);
      onClose();
      window.location.reload();
    } catch (err) {
      console.log('Error posting question', err);
      setProcessing(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.popup_container}>
        <button onClick={onClose} className={styles.close_btn}>
          <X size={40} />
        </button>
        <h3>Post Your Question</h3>
        <div className={styles.input}>
          <input
            className={styles.title}
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange} // Use the new handleTitleChange function
            placeholder="Summarize your question in one-line title"
          />
          <textarea
            className={styles.description}
            name="describe"
            value={description}
            onChange={handleDescriptionChange} // Use the new handleDescriptionChange function
            placeholder="Describe your question in more detail"
          />
        </div>
        {lengthError && <p style={{color:'red'}}>{lengthError}</p>}
        <button className={styles.post_btn} onClick={handlePost}>
          {processing ? <p>Posting ...</p> : 'Post Question'}
        </button>
      </div>
    </div>
  );
}

export default PopupModel;

