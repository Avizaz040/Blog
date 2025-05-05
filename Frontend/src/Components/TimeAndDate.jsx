


function TimeAndDate() {
const today = new Date();
const getDay = (date) => {
  return new Intl.DateTimeFormat(
    'en-IN',
    { weekday: 'long' }
  ).format(date);
}
const formatDate = (date) => {
  return date.toLocaleDateString('en-GB'); // 'en-GB' locale uses dd/mm/yyyy format
};

  return (
    <p>
      {getDay(today)}, {formatDate(today)}
    </p>
  )
}

export default TimeAndDate