import { api } from "../../api";
import { IEditRecord } from "../../models/editRecord";

export function getRecord(recordId: number): Promise<IEditRecord> {
  return api.get<IEditRecord>(`records/${recordId}`).then((res) => res.data);
}

export function deleteRecord(recordId: number): Promise<IEditRecord> {
  return api.delete<IEditRecord>(`records/${recordId}`).then((res) => res.data);
}

export function createRecord(record: IEditRecord): Promise<IEditRecord> {
  return api.post<IEditRecord>(`records`, record).then((res) => res.data);
}

export function updateRecord(record: IEditRecord): Promise<IEditRecord> {
  return api.put<IEditRecord>(`records`, record).then((res) => res.data);
}
