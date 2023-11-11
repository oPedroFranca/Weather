// dateUtils.ts
export function getNextDayAndDate(currentDay: string, currentDate: Date) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentIndex = daysOfWeek.indexOf(currentDay);
  const nextIndex = (currentIndex + 1) % 7;
  const nextDay = daysOfWeek[nextIndex];

  const nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + 1);

  return { nextDay, nextDate };
}

export function getMonth(date: Date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[date.getMonth()];
}
