'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysInMonth = new Date(year, month, 0).getDate();
  let firstDay = new Date(year, month - 1, 1).getDay();
  let lastDay = new Date(year, month - 1, daysInMonth).getDay();

  firstDay = firstDay === 0 ? 7 : firstDay;
  lastDay = lastDay === 0 ? 7 : lastDay;

  const table = document.createElement('table');

  // Header row
  const headerRow = document.createElement('tr');
  const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'cб', 'нд'];

  for (let i = 0; i < days.length; i++) {
    const headerItem = document.createElement('th');

    headerItem.innerHTML = days[i];
    headerRow.append(headerItem);
  }

  table.append(headerRow);

  // Rows of weeks
  let numberOfWeeks = 5;

  if (firstDay === 1 && daysInMonth === 28) {
    numberOfWeeks = 4;
  } else if ((firstDay === 6 && daysInMonth === 31)
    || (firstDay === 7 && daysInMonth >= 30)) {
    numberOfWeeks = 6;
  }

  for (let j = 1, day = 1; j <= numberOfWeeks; j++) {
    const newRow = document.createElement('tr');

    for (let k = 1; k <= 7; k++) {
      const newItem = document.createElement('td');

      if ((k < firstDay && j === 1) || (k > lastDay && j === numberOfWeeks)) {
        newRow.append(newItem);
      } else {
        newItem.innerHTML = day++;
        newRow.append(newItem);
      }
    }

    table.append(newRow);
  }

  element.append(table);
}

calendarTable(2999, 12, calendar);
