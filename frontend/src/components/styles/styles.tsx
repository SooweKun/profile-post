import { useColorStore } from "@/store/useColorStore";

export const Styles = () => {
  const { fill } = useColorStore();

  return (
    <style id="styles">
      {`
          :root {
            --h1-color: ${fill};
          }
        `}
    </style>
  );
};
