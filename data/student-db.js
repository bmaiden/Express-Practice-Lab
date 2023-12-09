const students = [
  { name: "Dan Miller", graduate: true },
  { name: "Peter Pan", graduate: false },
  { name: "Shirley Temple", graduate: true },
  { name: "Chester Cat", graduate: false },
];

module.exports = {
  getAll: function () {
    return students;
  },
};
