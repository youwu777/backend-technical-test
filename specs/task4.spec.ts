import { saveDataToCsv } from '../task4';
import csvParser from 'csv-parser';
import fs from 'fs';

describe('saveDataToCsv', () => {
  it('should save transformed data to a CSV file', async () => {
    const transformedData = {
      'Year 1': {
        'Subject 1': ['Lesson 1'],
        'Subject 2': ['Lesson 2'],
      },
      'Year 2': {
        'Subject 1': ['Lesson 3', 'Lesson 4'],
        'Subject 3': ['Lesson 5'],
      },
    };

    await saveDataToCsv(transformedData,'./test.csv').then(() =>{
      const records: any = [];
      fs.createReadStream('./test.csv')
        .pipe(csvParser())
        .on('data', (data:any) => {
          records.push(data);
        })
        .on('end', () => {
          expect(records).toHaveLength(5);
        });
      fs.unlinkSync('./test.csv');
    });
  });
});
