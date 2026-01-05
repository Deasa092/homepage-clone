
type Props = {
  label: string;
};
const Label = ({ label }: Props) => {
  return <label className="text-basic text-gray-600">{label}</label>;
};

export default Label;
