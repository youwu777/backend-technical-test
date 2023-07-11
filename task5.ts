import * as dotenv from 'dotenv'
import AWS from 'aws-sdk';
import fs from 'fs';

async function uploadCsvToS3(filePath: string): Promise<void> {
  dotenv.config();
  console.log(`AWS_ACCESS_KEY_ID=${process.env.AWS_ACCESS_KEY_ID}`);
  console.log(`AWS_SECRET_ACCESS_KEY=${process.env.AWS_SECRET_ACCESS_KEY}`);

  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-southeast-2',
  });

  const s3 = new AWS.S3();
  const fileStream = fs.createReadStream(filePath);

  const bucketName = 'inquisitive-backend-developer-tests';
  const s3Key = 'youwu/result.csv';
  
  const params = {
    Bucket: bucketName,
    Key: s3Key,
    Body: fileStream,
  };

  try {
    // Upload the file to S3
    await s3.putObject(params).promise();
    console.log(`CSV file '${filePath}' uploaded to S3 bucket '${bucketName}' with key '${s3Key}'`);
  } catch (error) {
    console.error('Error uploading CSV file to S3:', error);
    throw error;
  }
}

export { uploadCsvToS3 }