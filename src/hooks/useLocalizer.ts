import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

export function useLocalizer(): TFunction {
  const { t } = useTranslation();
  return t;
}
