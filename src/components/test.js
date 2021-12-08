
let initialCount = 0


function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }




  