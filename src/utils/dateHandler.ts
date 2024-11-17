// utils/dateUtils.ts

/**
 * Converts a date string or Date object to a formatted string like '12 February 2025'.
 * @param date - A date string or Date object to format.
 * @returns A formatted date string.
 */
export const formatDate = (date: string | Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-GB', options); 
};
