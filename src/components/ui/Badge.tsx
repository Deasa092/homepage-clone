type Props = {
  value: number;
  max?: number;
};

const Badge = ({ value, max = 99 }: Props) => {
  return (
    <span className="absolute min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-small font-medium flex items-center justify-center rounded-full -top-1 -right-1 z-10">
      {value > max  ? `${max}+` : value}
    </span>
  );
};

export default Badge;
