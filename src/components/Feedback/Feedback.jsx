export const Feedback = countFeedback => {
  return (
    <>
      <button onClick={event => countFeedback(event)}>Good</button>
      <button onClick={() => countFeedback()}>Neutral</button>
      <button onClick={() => countFeedback()}>Bad</button>
    </>
  );
};
