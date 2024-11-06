import isEqual from "react-fast-compare";
import { Event } from "../../types";

export const getTimeUsingISOString = (date: string) => new Date(date).getTime();

export const isSaveEnabled = (currentData: Event | null, savedData: Event | null) => {
  if (!currentData) {
    return false;
  }
  
  return [
    !isEqual(currentData, savedData),
    currentData.name,
    currentData.startDate.length > 0,
    getTimeUsingISOString(currentData.startDate) > Date.now(),
    currentData.location.length > 0,
    currentData.endDate.length > 0,
    getTimeUsingISOString(currentData.startDate) < getTimeUsingISOString(currentData.endDate),
  ].every((condition) => condition);
};