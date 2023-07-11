import { retriveData } from './task2';
import { transformData } from './task3';
import { saveDataToCsv } from './task4';
import { uploadCsvToS3 } from './task5';

const hello = async (): Promise<void> => {
  const contentBrowserData = await retriveData();
  const transformedData = transformData(contentBrowserData);
  const csvPath = saveDataToCsv(transformedData)
  await uploadCsvToS3(csvPath)
}
hello();