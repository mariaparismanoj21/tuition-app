let students = [];
let fees = [];
let attendance = [];
let timetable = "";

function showSection(id) {
  const sections = document.querySelectorAll(".module");
  sections.forEach((sec) => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Student Module
function addStudent() {
  const name = document.getElementById("student-name").value.trim();
  if (name) {
    students.push(name);
    renderStudents();
    document.getElementById("student-name").value = "";
  }
}

function renderStudents() {
  const list = document.getElementById("student-list");
  list.innerHTML = "";
  students.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${s}`;
    list.appendChild(li);
  });
}

// Fee Module
function addFee() {
  const student = document.getElementById("fee-student").value.trim();
  const amount = parseFloat(document.getElementById("fee-amount").value);
  if (student && amount) {
    fees.push({ student, amount });
    renderFees();
    document.getElementById("fee-student").value = "";
    document.getElementById("fee-amount").value = "";
  }
}

function renderFees() {
  const list = document.getElementById("fee-list");
  list.innerHTML = "";
  fees.forEach((f, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${f.student} paid ₹${f.amount}`;
    list.appendChild(li);
  });
}

// Attendance Module
function markAttendance() {
  const student = document.getElementById("attendance-student").value.trim();
  const date = document.getElementById("attendance-date").value;
  if (student && date) {
    attendance.push({ student, date });
    renderAttendance();
    document.getElementById("attendance-student").value = "";
    document.getElementById("attendance-date").value = "";
  }
}

function renderAttendance() {
  const list = document.getElementById("attendance-list");
  list.innerHTML = "";
  attendance.forEach((a, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${a.student} present on ${a.date}`;
    list.appendChild(li);
  });
}

// Timetable
function saveTimetable() {
  timetable = document.getElementById("timetable-input").value;
  document.getElementById("timetable-display").textContent = timetable;
  document.getElementById("timetable-input").value = "";
}

// Reports
function generateReport() {
  const report = `
    Total Students: ${students.length}
    Total Fees Collected: ₹${fees.reduce((sum, f) => sum + f.amount, 0)}
    Attendance Records: ${attendance.length}
  `;
  document.getElementById("report-output").textContent = report;
}
