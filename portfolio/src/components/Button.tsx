import type { ButtonProps } from "../interface";

const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
