const button = (text: string) => {
  return (
    <button class="button is-large" style={{ color: 'white', backgroundColor: '#FFC000', fontWeight: 'bold' }}>
      {text}
    </button>
  );
};

const primaryButton = (text: string) => {
  return (
    <button class="button is-primary is-large" style={{ color: 'white', backgroundColor: '#92D050', fontWeight: 'bold' }}>
      {text}
    </button>
  );
};

const successButton = (text: string) => {
  return <button class="button is-success is-large">{text}</button>;
};

const infoButton = (text: string) => {
  return <button class="button is-info is-large">{text}</button>;
};

const warningButton = (text: string) => {
  return <button class="button is-warning is-large">{text}</button>;
};

const dangerButton = (text: string) => {
  return <button class="button is-danger is-large">{text}</button>;
};

export default button;

export { primaryButton, successButton, infoButton, warningButton, dangerButton };
