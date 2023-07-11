import { retriveData } from './task2';
import { transformData } from './task3';
import { saveDataToCsv } from './task4';
import { uploadCsvToS3 } from './task5';

const hello = async (): Promise<void> => {
  const csvName = 'csvdata.csv'
  const contentBrowserData = await retriveData();
  const transformedData = transformData(contentBrowserData);
  await saveDataToCsv(transformedData,csvName)
  await uploadCsvToS3(csvName)
}
hello();