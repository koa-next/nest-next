import React, { useEffect, useState } from 'react';

function Index() {
  const [count] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, []);

  return (
    <div>
      <p>hello world</p>
    </div>
  );
}

export default Index;
