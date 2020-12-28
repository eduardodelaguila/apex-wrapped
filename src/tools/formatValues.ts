import dayjs from 'dayjs';

const formatDate = (date: Date, dateFormat: undefined | string): string => {
  const format = dateFormat ? dateFormat : 'MM/DD/YYYY';
  return dayjs(new Date(date)).format(format);
};

export { formatDate };
