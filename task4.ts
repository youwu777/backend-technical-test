import { TransformedData, RecordsData } from './types'
import { createObjectCsvWriter } from 'csv-writer'
import * as path from 'path';


function flattenRecords(transformedData :TransformedData): RecordsData{
  let recordsData : RecordsData = [];
  Object.keys(transformedData).forEach(year => {
    Object.keys(transformedData[year]).forEach(subject => {
     transformedData[year][subject].forEach(lesson => {
        recordsData.push({
          year,
          subject,
          lesson,
        });
      });
    });
  });
  return recordsData
}

function saveDataToCsv(transformedData : TransformedData): string {
  const fileName = "csvdata.csv";
  const writer = createObjectCsvWriter({
    path: path.resolve(__dirname, fileName),
    header: [
      { id: 'year', title: 'year' },
      { id: 'subject', title: 'subject' },
      { id: 'lesson', title: 'lesson' },
    ],
  });

  const recordsData = flattenRecords(transformedData);

  try {
    // write data into csv
    writer.writeRecords(recordsData);
    console.log(`data been written into ${path.resolve(__dirname, fileName)}`);
  } catch (error) {
    console.error('Error writing CSV file:', error);
    throw error;
  }
  return path.resolve(__dirname, fileName);
}

export { saveDataToCsv }