import { shortcuts } from "../assets/data/shortcuts";
import Button from "../components/ui/Button";

const Shortcut = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-3 py-2">
        {shortcuts.map((item) => (
          <Button
            key={item.label}
            icon={<item.icon/>}
            size="md"
            variant="secondary"
            onClick={()=>console.log("Pilih :", item.label)            }
            className="
              flex shrink-0 items-center gap-2
              rounded-xl border border-gray-300
              bg-white px-4 py-2
              text-xs font-medium text-gray-800
              hover:bg-gray-50
            "
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Shortcut;
