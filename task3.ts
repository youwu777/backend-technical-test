import { ContentBrowserData, TransformedData } from './types';

function createOrPush(transformedData: TransformedData, year: string, subject: string,  lesson: string): TransformedData{
  if (!transformedData[year]){
    transformedData[year] = {};
  }
  if (!transformedData[year][subject]){
    transformedData[year][subject] = [];
  }

  transformedData[year][subject].push(lesson);
  return transformedData;
}

function transformData(contentBrowserData : ContentBrowserData): TransformedData {
  let transformedData : TransformedData = {};

  contentBrowserData.contentBrowser.topics.forEach((topic) => {
    topic.units.forEach((unit) => {
      unit.lessons.forEach((lesson) => {
        lesson.years.forEach((year) => {
          lesson.subjects.forEach((subject) => {
            transformedData = createOrPush(transformedData, year.name, subject.name, lesson.name)
          });
        });
      });
    });
  });

  console.log('Transformed data');
  return transformedData
}

export { transformData, TransformedData }