import type { ButtonProps } from "../interface";

const Button = ({
  text,
  onClick,
  className,
  href,
  target,
  download,
}: ButtonProps) => {
  if (href) {
    return (
      <a href={href} target={target} download={download} className={className}>
        {text}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
