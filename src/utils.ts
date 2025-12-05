import { format } from "date-fns";

export const formatDate = (timestamp: number) => {
  return format(timestamp, "MMM d, yyyy");
};
