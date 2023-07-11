type Year = {
  id: string;
  name: string;
};

type Subject = {
  id: string;
  name: string;
}

type Lesson = {
  id: string;
  name: string;
  subjects: Subject[];
  years: Year[]
};

type Unit = {
  name: string;
  lessons: Lesson[]
};

type Topic = {
  name: string;
  units: Unit[];
};

type ContentBrowserData = {
  contentBrowser: {
    topics: Topic[];
  }
}

type TransformedData = {
  [year: string]: {
    [subject: string]: string[];
  };
};

type RecordsData = {
  year: string;
  subject: string;
  lesson: string;
}[]

export { ContentBrowserData, TransformedData, RecordsData }