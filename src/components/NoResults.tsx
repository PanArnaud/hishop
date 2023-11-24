import { useTranslation } from "react-i18next";

const NoResults = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500">
      {t("list.empty")}
    </div>
  );
};

export default NoResults;
