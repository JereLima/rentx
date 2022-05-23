import { eachDayOfInterval, format } from "date-fns";

import { MarkedDateProps, DayProps } from ".";

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((item) => {
    const date = format(item, "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? 'pink'
            : 'blue',

        textColor:
          start.dateString === date || end.dateString === date
            ? 'blue'
            : 'pink'
      },
    };
  });

  return interval;
}
