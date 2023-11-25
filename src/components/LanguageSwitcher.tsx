import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { languages } from "../i18n";
import Button from "./Button";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="w-auto px-4 py-2 flex justify-center align-middle rounded-full bg-white font-semibold text-gray-900 hover:bg-gray-200">
          <ReactCountryFlag
            countryCode={Object.create(languages)[i18n.language].flagCode}
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-xl overflow-clip bg-white shadow-lg focus:outline-none">
          <div>
            {Object.keys(languages).map((lng, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Button
                    className={`w-full bg-white text-black flex items-center rounded-none px-4 py-2 ${
                      active && "bg-black text-white"
                    }`}
                    onClick={() => i18n.changeLanguage(lng)}
                  >
                    <ReactCountryFlag
                      countryCode={Object.create(languages)[lng].flagCode}
                    />
                    <span className="text-sm font-medium ml-2">
                      {Object.create(languages)[lng].nativeName}
                    </span>
                  </Button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSwitcher;
