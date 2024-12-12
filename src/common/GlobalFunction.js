class GlobalFunction {
  formatDate(date) {
    if (date == null) {
      const formattedDate = "";
      console.log(formattedDate);
      return formattedDate;
    } else {
      const parts = date.split("-");
      const year = parseInt(parts[0]);
      const month = parseInt(parts[1]);
      const day = parseInt(parts[2]);
      // const month1 = parseInt(parts[4]);
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const monthName = months[month - 1];
      const formattedDate = `${day}-${monthName}-${year}`;
      // open_date = this.formattedDate
      console.log(formattedDate);
      return formattedDate;
    }
  }
}
export default new GlobalFunction();
