import { eachDayOfInterval, format, parseISO } from "date-fns";
import { DayProps, MarkedDateProps } from ".";
import { theme } from "../../theme";

function generateInterval(start: DayProps, end: DayProps): MarkedDateProps {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: parseISO(start.dateString),
    end: parseISO(end.dateString),
  }).forEach((item) => {
    const date = format(item, "yyyy-MM-dd");
    const isHeadDates = start.dateString === date || end.dateString === date;

    interval = {
      ...interval,
      [date]: {
        color: isHeadDates ? theme.colors.main : theme.colors.main_light,
        textColor: isHeadDates ? theme.colors.shape : theme.colors.title,
        endingDay: end.dateString === date ? true : false,
				startingDay: start.dateString === date ? true : false,
      },
    };
  });

  return interval;
}

export { generateInterval };
