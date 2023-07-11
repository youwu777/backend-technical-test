import axios, { AxiosResponse } from 'axios';

type ContentBrowserData = {
  contentBrowser: {
    topics: {
      name: string;
      units: {
        name: string;
        lessons: {
          id: string;
          name: string;
          subjects: {
            id: string;
            name: string;
          }[];
          years: {
            id: string;
            name: string;
          }[];
        }[];
      }[];
    }[];
  }
}

async function retriveData(): Promise<ContentBrowserData> {
  const url = 'https://api2.inquisitive.com/latest/graphql';
  const payload = {
    operationName: 'ContentBrowser',
    query:
      'query ContentBrowser($input: ContentBrowserInput!) { contentBrowser(input: $input) {  topics { name  units { name  lessons { id name   subjects { id name } years { id name } }  } } }}',
    variables: {
      "input": {
        "years": ["1", "2", "3", "4"],
        "subjects": ["history", "science-and-technology", "english", "maths"],
        "curriculums": [],
        "includingDraft": false,
        "includingComingSoon": false,
        "includingFuture": false,
        "includingEmptyTopic": false,
        "initialTopics": 10,
        "topicIds": []
      }
    }
  };
  
  try {
    const response: AxiosResponse<any> = await axios.post(url, payload);
    console.log(`Retrived data from inquisitive graphql endpoint`);
    return response.data.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
}

export { retriveData, ContentBrowserData }