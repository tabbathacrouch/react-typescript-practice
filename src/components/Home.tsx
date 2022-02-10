import React from "react";
import logo from "../logo.svg";

// better option
export interface IHomeProps {
  text: string;
}

// more customizable
export type IHomeProps2 = {
  text: string;
};

// type DaysOfTheWeek = "Monday" | "Tuesday" | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

// type DaysIWork = Pick<DaysOfTheWeek, "Monday" | "Wednesday" | "Friday">

// type MakeMine<T extends string> = `My${T}`

// type ToID<T extends string> = `${Lowercase<T>}_id`

// type MyDays = MakeMine<DaysOfTheWeek>

// type DayIDs = ToID<DaysOfTheWeek>

// function printDayOfWeek (day: DaysOfTheWeek) {
//     console.log(day)
// }

// printDayOfWeek('April')

const Home = ({ text }: IHomeProps2) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </header>
    </div>
  );
};

export default Home;
