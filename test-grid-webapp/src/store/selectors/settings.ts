import { useTypeSelector } from "../../hooks/useTypedSelector";

export default function useSettingsSelectors() {
  const theme = useTypeSelector((s) => s.settings.theme);

  return {
    theme
  };
}
