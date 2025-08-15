function compareSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName("Base1");
  const sheet2 = ss.getSheetByName("Base2");

  const data1 = sheet1.getDataRange().getValues();
  const data2 = sheet2.getDataRange().getValues();

  const maxRows = Math.max(data1.length, data2.length);
  const maxCols = Math.max(
    data1[0] ? data1[0].length : 0,
    data2[0] ? data2[0].length : 0
  );

  let differences = [];

  for (let i = 0; i < maxRows; i++) {
    for (let j = 0; j < maxCols; j++) {
      const val1 = (data1[i] && data1[i][j]) || "";
      const val2 = (data2[i] && data2[i][j]) || "";
      if (val1 !== val2) {
        differences.push(`Differences found at row ${i + 1}, coloumn ${j + 1}: "${val1}" vs "${val2}"`);
      }
    }
  }

  if (differences.length === 0) {
    SpreadsheetApp.getUi().alert("✅ No differences found.");
  } else {
    SpreadsheetApp.getUi().alert("❗ Differences found:\n" + differences.join("\n"));
  }
}



