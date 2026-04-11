const fs = require('fs');

function countStudents(path) {
  try {
    // استخدمي readFileSync مباشرة داخل الـ try
    const data = fs.readFileSync(path, 'utf8');
    
    // تقسيم الأسطر والتخلص من الأسطر الفارغة
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // إزالة الترويسة (header)
    const students = lines.slice(1);
    
    if (students.length > 0) {
      console.log(`Number of students: ${students.length}`);
      
      const fields = {};
      for (const student of students) {
        const details = student.split(',');
        // التأكد من أن السطر يحتوي على بيانات كافية
        if (details.length >= 4) {
          const firstName = details[0];
          const field = details[3];
          
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }
      }

      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    // هذا السطر هو اللي غالباً يسبب اللون الأحمر لو فيه حرف غلط
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
