import Code from "./Code";
import Welcome from "./Welcom";

export default function ConditionalComponent() {
  const display = false;
  //   if (display) {
  //     return <Welcome />;
  //   } else {
  //     return <Code />;
  //   }

  //   let message;
  //   const display = false;
  //   if (display) {
  //     message = <h1>This is message 1</h1>;
  //   } else {
  //     message = <h1>This is message 2</h1>;
  //   }

  //   return message;

  return display ? <Welcome /> : <Code />;
}
