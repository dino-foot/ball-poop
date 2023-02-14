const playButton = (text: string) => {
  return (
    <button class="button is-primary is-large" style={{ color: 'white', backgroundColor: '#92D050', fontWeight: 'bold' }}>
      {text}
    </button>
  );
};

export default playButton;
