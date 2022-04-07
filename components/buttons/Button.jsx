const Button = (props) => {
  const onClick = props.onClick;
  return (
    <button onClick={onClick} className="button">
      {props.children}
    </button>
  );
};

export default Button;
