import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";
import timeZones from "./timeZones";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

const formatDate = (date, country) => {
  const zone = timeZones[country] || "UTC";

  return dayjs(date).tz(zone).fromNow();
};
export default formatDate;