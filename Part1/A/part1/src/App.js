import { useState } from "react";

const Button = ({ event, text }) => {
  return <button onClick={event}>{text}</button>;
};

const Buttons = ({ arr }) => {
  const buttons = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    const event = () => arr[i].event(arr[i].value + 1);
    buttons.push(<Button event={event} text={arr[i].text} id={i} />);
  }
  return buttons;
};

const List = ({ arr }) => {
  const list = [];
  for (let value of arr) {
    list.push(
      <li>
        {value.text}
        {value.value}
      </li>
    );
  }
  return list;
};

const All = ({ arr }) => {
  let all = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].value > 0) {
      all++;
    }
  }
  return <li>All {all}</li>;
};

const Average = ({ good, bad, neutral }) => {
  const sum = good / (good + bad + neutral);
  return <li>Average {sum}</li>;
};

const Positive = ({ good, bad, neutral }) => {
  const sum = good / (good + bad + neutral);
  return <li>Postive {sum * 100}%</li>;
};

const Statistics = ({ arr, good, bad, neutral }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return <p>No FeedBack Given</p>;
  }
  return (
    <table>
      <List arr={arr} />
      <All arr={arr} />
      <Average good={good} bad={bad} neutral={neutral} />
      <Positive good={good} bad={bad} neutral={neutral} />
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const everything = [
    { event: setGood, text: "good", value: good },
    { event: setBad, text: "bad", value: bad },
    { event: setNeutral, text: "neutral", value: neutral },
  ];

  return (
    <>
      <p>Give FeedBack</p>
      <Buttons arr={everything} />
      <p>Statistics</p>
      <Statistics arr={everything} good={good} bad={bad} neutral={neutral} />
    </>
  );
};

export default App;
