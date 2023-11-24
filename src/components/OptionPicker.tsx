import { capitalizeFirstLetter } from "../lib/utils";
import Button from "./Button";

interface OptionPickerProps {
  data: any;
  selection: any;
  selectionUpdateHandler: (option: string, value: string) => void;
}

const OptionPicker = ({
  data,
  selection,
  selectionUpdateHandler,
}: OptionPickerProps) => {
  return (
    <div className="flex flex-col gap-y-6">
      {Object.keys(data.options).map((option) => (
        <div key={option} className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">
            {capitalizeFirstLetter(option)}
          </h3>
          {Object.create(data.options)[option].map((optionValue: string) => {
            return (
              <Button
                key={optionValue}
                onClick={() => selectionUpdateHandler(option, optionValue)}
                className={`py-1 px-2 bg-transparent text-black border-black border-2 hover:opacity-75 ${
                  selection[option] === optionValue ? "bg-black text-white" : ""
                }`}
              >
                {capitalizeFirstLetter(optionValue)}
              </Button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default OptionPicker;
