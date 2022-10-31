export default function getDate(num) {
  return new Date(num * 1000).toLocaleDateString("en-DE");
}

// https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
// export default function getDate(num) {
//   return new Date(num).toLocaleDateString("de-DE", {
//     weekday: "long",
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });
// }
