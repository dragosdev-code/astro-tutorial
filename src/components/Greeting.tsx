import { useState } from "preact/hooks";

type Props = {
  messages: string[];
};

const Greeting: preact.FunctionComponent<Props> = ({ messages }) => {
  const [greeting, setGreeting] = useState(messages[0]);

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
};

export default Greeting;
