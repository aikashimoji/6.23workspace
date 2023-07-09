import json
import boto3
import uuid
from decimal import Decimal

# Define the DecimalEncoder class.
class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super(DecimalEncoder, self).default(obj)

def handler(event, context):
    # Get the DynamoDB client.
    dynamodb = boto3.resource('dynamodb')

    # Get the Todo table.
    app_table = dynamodb.Table('aikaAppUser-staging')
    # リクエストメソッドとボディをログに出力
    print('Received event: ' + str(event))
    # POSTリクエストの場合
    if event['httpMethod'] == 'POST':
        body = json.loads(event['body'])
        action = body.get('action', '')
        if action == 'hospital_reserve':
            userId = body.get('userId', '')
            entries = body.get('entries', [])
            for entry in entries:
                date = entry.get('date', '')
                hospital = entry.get('hospital', '')
                location = entry.get('location', '')
                priority = entry.get('priority', '')

                # Scan the table and filter items

                # Generate a new UUID for the id field
                id = str(uuid.uuid4())
                response = app_table.scan(
                    FilterExpression='#u = :user_id AND #p = :priority',
                    ExpressionAttributeNames={
                        '#u': 'user_id',
                        '#p': 'priority',
                    },
                    ExpressionAttributeValues={
                        ':user_id': userId,
                        ':priority': priority,
                    }
                )

                if response['Items']:
                    # Update the existing item
                    id = response['Items'][0]['id']

                    app_table.update_item(
                        Key={
                            'id': id,
                            'user_id': userId
                        },
                        UpdateExpression='SET #d = :date, hospital = :hospital, #l = :location, #s = :status',
                        ExpressionAttributeNames={
                            '#d': 'date',
                            '#l': 'location',
                            '#s': 'status'
                        },
                        ExpressionAttributeValues={
                            ':date': date,
                            ':hospital': hospital,
                            ':location': location,
                            ':status': False,
                        }
                    )
                else:
                    # Put a new item
                    app_table.put_item(
                        Item={
                            'id': id,
                            'user_id': userId,
                            'date': date,
                            'hospital': hospital,
                            'location': location,
                            'priority': priority,
                            'status': False,
                        }
                    )

        elif action == 'hospital_reserve_status':
            userId = body.get('userId', '')

            # Scan the table and filter items
            response = app_table.scan(
                FilterExpression='#u = :user_id',
                ExpressionAttributeNames={
                    '#u': 'user_id',
                },
                ExpressionAttributeValues={
                    ':user_id': userId,
                }
            )

            # Construct the response body
            responseBody = {
                'userId': userId,
                'entries': []
            }

            for item in response['Items']:
                responseBody['entries'].append({
                    'date': item['date'],
                    'hospital': item['hospital'],
                    'location': item['location'],
                    'priority': float(item['priority']),
                    'status': item['status']
                })

            body = responseBody

        response = {
            'statusCode': 200,
            'body': json.dumps(body),
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        return response

    # GETリクエストの場合
    elif event['httpMethod'] == 'GET':
        # パラメータをそのままレスポンスとして返す
        response = {
            'statusCode': 200,
            'body': json.dumps(event['queryStringParameters']),
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        return response

    # その他のHTTPメソッドの場合
    else:
        response = {
            'statusCode': 400,
            'body': 'Invalid request method',
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        return response