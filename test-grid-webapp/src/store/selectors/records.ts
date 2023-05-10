import { useTypeSelector } from "../../hooks/useTypedSelector";

export default function useRecordsSelectors() {
  const records = useTypeSelector((s) => s.records.records);
  const pagination = useTypeSelector((s) => s.records.pagination);
  const filters = useTypeSelector((s) => s.records.filters);

  return {
    records,
    pagination,
    filters
  };
}
