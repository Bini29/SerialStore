declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.module.css";
declare module "*.webp" {
  const value: import("react-native").ImageSourcePropType;
  export default value;
}
declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
  }
}
