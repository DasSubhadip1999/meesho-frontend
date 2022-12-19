import Image from "next/image";

const LearningCard = ({ img, heading, sub }) => {
  return (
    <div className="card bg-base-100 shadow-md mx-8 mb-10">
      <figure>
        <Image src={img} alt="pngs" width={300} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default LearningCard;
