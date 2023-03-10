import {APIGatewayProxyEvent} from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent) => {
  /*
    Get Query params from url
    event: APIGatewayProxyEvent
    ===========
    const {
      owner,
      orderBy = 'created',
      order = DESC,
      page = DEFAULT_PAGE,
      perPage = DEFAULT_PER_PAGE,
    } = event.queryStringParameters as unknown as GetSquaresByOwnerQueryParams;
  */

  /*
    S3 Event
    event: S3Event
    ===========

    const { awsRegion, s3 } = event.Records?.[0] ?? {};
    const bucket = s3.bucket.name;
    const key = decodeURIComponent(s3.object.key.replace(/\+/g, ' '));
    const uri = `https://${bucket}.s3-${awsRegion}.amazonaws.com/${key}`;
   */

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

}