import "./Card.css"
type CardProps = {
  title: string;
};

export const Card = ({ title }: CardProps) => {
  return (
    <div className="cardone">
      <h3>{title}</h3>
    </div>
  );
};
