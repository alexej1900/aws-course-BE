
export const buildResponse = (statusCode: number, body: any) => ({
    statusCode: statusCode,
    headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control_Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
})