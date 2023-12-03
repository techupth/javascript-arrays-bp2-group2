const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// เมื่อเพิ่มพนักงานเสร็จแล้ว ให้ console.log เพื่อดูค่าของ Array employees
// ซึ่ง Object จะมี Property ดังนี้
// พนักงานคนที่ 1 มี Property ของ Object ดังนี้
// Key name มี Value เป็น "Alicia"
// Key age มี Value เป็น 29
// Key hobbies มี Value เป็น “Shopping" และ “Reading novels"
// พนักงานคนที่ 2 มี Property ของ Object ดังนี้
// Key name มี Value เป็น "Kody"
// Key age มี Value เป็น 19
// Key hobbies มี Value เป็น “Computer games" และ “Wakeboard"
// Start coding here
const Alicia = {
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Readin novels"],
};
const Kody = {
  name: "Kody",
  age: 19,
  hobbies: ["Computer game", "Wakeboard"],
};

employees.push(Alicia);
employees.push(Kody);
employees;
