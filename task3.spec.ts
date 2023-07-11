import { transformData, TransformedData } from './task3';

describe('transformData', () => {
  it('should transform content browser data into transformed data format', () => {
    const contentBrowserData = {
      contentBrowser: {
        topics: [
          {
            name: 'Topic 1',
            units: [
              {
                name: 'Unit 1',
                lessons: [
                  {
                    id: '1',
                    name: 'Lesson 1',
                    subjects: [
                      {
                        id: '1',
                        name: 'Subject 1',
                      },
                    ],
                    years: [
                      {
                        id: '1',
                        name: 'Year 1',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    };

    const expectedTransformedData: TransformedData = {
      'Year 1': {
        'Subject 1': ['Lesson 1'],
      },
    };

    const transformedData = transformData(contentBrowserData);

    expect(transformedData).toEqual(expectedTransformedData);
  });

  it('should transform content browser data with multiple years and subjects', () => {
    const contentBrowserData = {
      contentBrowser: {
        topics: [
          {
            name: 'Topic 1',
            units: [
              {
                name: 'Unit 1',
                lessons: [
                  {
                    id: '1',
                    name: 'Lesson 1',
                    subjects: [
                      {
                        id: '1',
                        name: 'Subject 1',
                      },
                      {
                        id: '2',
                        name: 'Subject 2',
                      },
                    ],
                    years: [
                      {
                        id: '1',
                        name: 'Year 1',
                      },
                      {
                        id: '2',
                        name: 'Year 2',
                      },
                    ],
                  },
                  {
                    id: '2',
                    name: 'Lesson 2',
                    subjects: [
                      {
                        id: '3',
                        name: 'Subject 3',
                      },
                    ],
                    years: [
                      {
                        id: '2',
                        name: 'Year 2',
                      },
                      {
                        id: '3',
                        name: 'Year 3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    };

    const expectedTransformedData: TransformedData = {
      'Year 1': {
        'Subject 1': ['Lesson 1'],
        'Subject 2': ['Lesson 1']
      },
      'Year 2': {
        'Subject 1': ['Lesson 1'],
        'Subject 2': ['Lesson 1'],
        "Subject 3": ['Lesson 2'],
      },
      'Year 3': {
        'Subject 3': ['Lesson 2'],
      },
    };

    const transformedData = transformData(contentBrowserData);

    expect(transformedData).toEqual(expectedTransformedData);
  });
});
