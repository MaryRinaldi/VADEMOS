import React, { useState } from 'react';
import Modal from '../pages/Modal';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
        countryRepresented: '',
        regionRepresented: '',
        useForTool: '',
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
      setFeedback({
        countryRepresented: '',
        regionRepresented: '',
        useForTool: '',
        usabilityMap: 0,
        usabilityPredictionTool: 0,
        additionalComments: '',
        overallExperience: 0,
        featureRequests: '',
      });
      setShowModal(false);
    } else {
      alert('Failed to submit feedback');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h3>We appreciate your feedback</h3>  
      <label>
      Country of representation:
        <textarea
          name="countryRepresented"
          value={feedback.countryRepresented}
          onChange={handleInputChange}
        />
      </label>
      <label>
      Region of representation:
        <textarea
          name="regionRepresented"
          value={feedback.regionRepresented}
          onChange={handleInputChange}
        />
      </label>
      <label id='radioLabel'>
  You used VADEMOS to:
    <input
      type="radio"
      name="useForTool"
      value="predict vaccination need"
      checked={feedback.useForTool === "predict vaccination need"}
      onChange={handleInputChange}
      required
    />
     <span className="radioInputText">Predict vaccination need</span>
    <input
      type="radio"
      name="useForTool"
      value="understand outbreaks"
      checked={feedback.usabilityTool === "understand outbreaks"}
      onChange={handleInputChange}
      required
    />
     <span className="radioInputText">Understand outbreaks</span>
</label>
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
        What functionalities would you like to see in VADEMOS?
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
      <br></br>
      <button type="submit" className='submit-button'>Submit Feedback</button>
    </form>
    </>
  );
};

export default Feedback;
