import { uploadCsvToS3 } from '../task5';
import fs from 'fs';
import AWS from 'aws-sdk';

describe('uploadCsvToS3', () => {
  it('should upload the CSV file to the specified S3 bucket', async () => {
    // Mock AWS S3 SDK
    const putObjectMock = jest.fn().mockReturnThis();
    const promiseMock = jest.fn();
    const consoleLogSpy = jest.spyOn(console, 'log');
    putObjectMock.mockImplementation(() => ({ promise: promiseMock }));
    const s3Mock = {
      putObject: putObjectMock,
    };
    jest.spyOn(AWS, 'S3').mockImplementation(() => s3Mock);

    // Mock file stream
    const fileStreamMock = {
      pipe: jest.fn(),
    };
    jest.spyOn(fs, 'createReadStream').mockReturnValue(fileStreamMock);

    const filePath = 'path/to/your/csv/file.csv';

    await uploadCsvToS3(filePath);

    expect(putObjectMock).toHaveBeenCalledTimes(1);
    expect(putObjectMock).toHaveBeenCalledWith({
      Bucket: 'inquisitive-backend-developer-tests',
      Key: 'youwu/result.csv',
      Body: fileStreamMock,
    });
    expect(promiseMock).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `CSV file '${filePath}' uploaded to S3 bucket 'inquisitive-backend-developer-tests' with key 'youwu/result.csv'`
    );
  });

  it('should handle error when uploading the CSV file to S3', async () => {
    // Mock AWS S3 SDK
    const putObjectMock = jest.fn().mockReturnThis();
    const consoleErrorSpy = jest.spyOn(console, 'error');
    putObjectMock.mockImplementation(() => { throw new Error('Upload error'); });
    const s3Mock = {
      putObject: putObjectMock,
    };
    jest.spyOn(AWS, 'S3').mockImplementation(() => s3Mock);

    // Mock file stream
    const fileStreamMock = {
      pipe: jest.fn(),
    };
    jest.spyOn(fs, 'createReadStream').mockReturnValue(fileStreamMock);

    const filePath = 'path/to/your/csv/file.csv';

    await expect(uploadCsvToS3(filePath)).rejects.toThrowError('Upload error');
    expect(putObjectMock).toHaveBeenCalledTimes(1);
    expect(putObjectMock).toHaveBeenCalledWith({
      Bucket: 'inquisitive-backend-developer-tests',
      Key: 'youwu/result.csv',
      Body: fileStreamMock,
    });
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error uploading CSV file to S3:', expect.any(Error));
  });
});
