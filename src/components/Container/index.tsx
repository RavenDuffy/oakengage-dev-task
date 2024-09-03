import './container.css';

export const Container = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={(event) => onClick?.(event)}
      data-message="toggle active"
      data-active={active}
    >
      {children}
    </button>
  );
};
