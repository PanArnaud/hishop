import { Menu, Transition } from "@headlessui/react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import IconButton from "./IconButton";
import Button from "./Button";
import { Fragment } from "react";

const lngs = {
  "fr-FR": { nativeName: "Français", flagCode: "FR" },
  "en-US": { nativeName: "English", flagCode: "US" },
};

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  return (
    <Menu>
      <Menu.Button>
        <ReactCountryFlag
          countryCode={Object.create(lngs)[i18n.language].flagCode}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="flex justify-between align-middle flex-col z-50 mt-10 rounded-3xl bg-white shadow-lg ring-black/5 focus:outline-none">
          <div className="">
            {Object.keys(lngs).map((lng, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Button
                    className={`w-full bg-white text-black flex items-center rounded-full px-4 py-2 ${
                      active && "bg-black text-white"
                    }`}
                    onClick={() => i18n.changeLanguage(lng)}
                  >
                    <ReactCountryFlag
                      countryCode={Object.create(lngs)[lng].flagCode}
                    />
                    <span className="text-sm font-medium ml-2">
                      {Object.create(lngs)[lng].nativeName}
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
