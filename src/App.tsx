import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  const handleClick1 = () => {
    console.log('Click 1')
  }
  return (
    <section>
      <h1>Hola mundo</h1>
      <Button handleClick={handleClick1}>
        <span>Submit</span>
        😀
      </Button>
      <Counter></Counter>
    </section>
  );
}

export default App
