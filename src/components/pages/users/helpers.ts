export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: '2-digit', 
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h12',
    timeZone: 'America/new_york'
  };

  return new Date(date).toLocaleDateString('en-US', options);
};