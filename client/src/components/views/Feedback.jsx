import React, { useState } from 'react';
import Modal from '../pages/Modal';

const Feedback = () => {
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState({
    usabilityMap: 0,
    usabilityPredictionTool: 0,
    additionalComments: '',
    overallExperience: 0,
    featureRequests: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });

    if (response.ok) {
      alert('Feedback submitted successfully!');
      setShowModal(false);
    } else {
      alert('Failed to submit feedback');
    }
  };

  const modalContent = (
    <form onSubmit={handleSubmit}>
      <h3>We appreciate your feedback</h3>
      
      <label>
        Usability of the map:
        <input
          type="number"
          name="usabilityMap"
          value={feedback.usabilityMap}
          onChange={handleInputChange}
          min="0"
          max="5"
          required
        />
      </label>

      <label>
        Comments about the map:
        <textarea
          name="additionalComments"
          value={feedback.additionalComments}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Usability of prediction tool:
        <input
          type="number"
          name="usabilityPredictionTool"
          value={feedback.usabilityPredictionTool}
          onChange={handleInputChange}
          min="0"
          max="5"
          required
        />
      </label>

      <label>
        What functionalities would you like in VADEMOS?
        <textarea
          name="featureRequests"
          value={feedback.featureRequests}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Overall experience with VADEMOS:
        <input
          type="number"
          name="overallExperience"
          value={feedback.overallExperience}
          onChange={handleInputChange}
          min="0"
          max="5"
          required
        />
      </label>

      <button type="submit">Submit Feedback</button>
    </form>
  );

  return (
    <div id="root">
      <h1>Feedback Survey</h1>
      <button className="home-button" onClick={() => setShowModal(true)}>
        Give Feedback
      </button>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} modalContent={modalContent} />
    </div>
  );
};

export default Feedback;
