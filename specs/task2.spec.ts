import axios from 'axios';
import { retriveData, ContentBrowserData } from '../task2';

jest.mock('axios');

describe('retriveData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('should retrieve data from the Inquisitive GraphQL endpoint', async () => {
    const expectedData: ContentBrowserData = {
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

    const mockResponse = {
      data: {
        data: expectedData,
      },
    };

    (axios.post as jest.Mock).mockResolvedValue(mockResponse);

    const data = await retriveData();

    expect(data).toEqual(expectedData);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      'https://api2.inquisitive.com/latest/graphql',
      expect.any(Object)
    );
  });

  it('should handle error when making the POST request', async () => {
    const errorMessage = 'Network error';

    (axios.post as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(retriveData()).rejects.toThrowError(errorMessage);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      'https://api2.inquisitive.com/latest/graphql',
      expect.any(Object)
    );
  });
});