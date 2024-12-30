const ItemCard = ({ src, label }) => {
  return (
    <div className="flex flex-row relative ">
      <div className="h-[48px] mr-[0.5rem] w-[48px] relative">
        <img src={src} alt="card" />
      </div>
      <div className="flex items-center leading-[1.3] text-lg font-medium text-black tracking-normal text-left">
        {label}
      </div>
    </div>
  );
};

export default ItemCard;
