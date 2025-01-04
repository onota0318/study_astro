import { useEffect } from "react";

interface Props {
  children: string;
  hoge: string;
}

export const SampleParts: React.FC<Props> = ({ children, hoge }: Props) => {
  const text = children;

  useEffect(() => {
    console.log("SampleParts mounted：" + text);
    return () => {
      console.log("SampleParts unmounted");
    };
  }, []);

  return (
    <div>
      <h1>TEXT: {text}</h1>
      <h1>HOGE: {hoge}</h1>
    </div>
  );
};
