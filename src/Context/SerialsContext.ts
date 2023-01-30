import { createContext, Dispatch, SetStateAction } from "react";

export const SerialsContext = createContext<{
  theme: string;
  onChange: Dispatch<SetStateAction<string>>;
}>({
  theme: "",
  onChange: () => {},
});
