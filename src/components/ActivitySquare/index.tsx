import './activity-square.css';

export const ActivitySquare = ({
  active,
  ready,
}: {
  active: boolean;
  ready: boolean;
}) => {
  return <div className="act-square" data-active={active} data-ready={ready} />;
};
