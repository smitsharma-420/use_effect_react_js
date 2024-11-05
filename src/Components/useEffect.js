import React, { useEffect, useState} from 'react'

function UseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("I am Good");

        if (count >= 1) {
          document.title = `Chats (${count})`;
        } else {
            document.title = `Chats`;
        }
    }, [count] );
    
    useEffect(() => {

        console.log("I am Fine");

    }, []);
    
    console.log("Hello From Outside");
    
  return (
    <div className="useEffect">
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me👋</button>
      </div>
    </div>
  );
}

export default UseEffect;
