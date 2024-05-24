import { format } from "date-fns";

export function formatDateString(dateString: string) {
  // return Date.parse(dateString).toString(); // må returnere formatert dato
  return format(new Date(dateString), "dd.MM.yy HH:mm");
}
