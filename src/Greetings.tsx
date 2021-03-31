import React from "react";

type Props = {
  name: string;
  mark: string;
  opstional?: string;
  onClick: (name: string) => void;
};

export default function Greetings({ name, mark, opstional, onClick }: Props) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello {name} {mark}
      {opstional && <p>{opstional}</p>}
      <div>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = { mark: "!" };

//! React.FC 를 쓸때의 장점은 children 을 받아오지않아도 된다 하지만 디폴트 프롭스가 먹통이 된다.
// import React from "react";

// type GreetingsProps = {
//   name: string;
//   mark?: string;
// };
// // React.FC 를 사용할때
// export const Greetings: React.FC<GreetingsProps> = ({ name, mark = "!" }) => {
//   return (
//     <div>
//       Hello, {name} {mark}
//     </div>
//   );
// };
