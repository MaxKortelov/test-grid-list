import { useTypeSelector } from "../../hooks/useTypedSelector";

export default function useAuthSelectors() {
  const user = useTypeSelector((s) => s.auth.user);

  return {
    user
  };
}
