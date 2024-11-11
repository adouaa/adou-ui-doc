export default () => {
  // 获取当前时间的 Date 对象
  let currentDate = new Date();

  // 获取年、月、日、时、分、秒
  let year = currentDate.getFullYear(); // 年
  let month = currentDate.getMonth() + 1; // 月 (注意：月份是从 0 开始计数的，所以要加 1)
  let day = currentDate.getDate(); // 日
  let hours = currentDate.getHours(); // 时
  let minutes = currentDate.getMinutes(); // 分
  let seconds = currentDate.getSeconds(); // 秒

  // 如果月、日、时、分、秒是单个数字，则在前面补零
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // 格式化成需要的字符串格式
  let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
