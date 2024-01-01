declare module '*.png';
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.module.css';
declare module '*.module.scss';
