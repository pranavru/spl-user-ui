export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: '2-digit', 
    hour: 'numeric',
    minute: 'numeric', 
    second: 'numeric' 
  };

  return new Date(date).toLocaleDateString('en-US', options);
};