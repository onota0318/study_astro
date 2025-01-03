import { useEffect } from "react";

export const SampleParts: React.FC = () => {
  useEffect(() => {
    console.log("SampleParts mounted");
    return () => {
      console.log("SampleParts unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Sample Parts</h1>
    </div>
  );
};
