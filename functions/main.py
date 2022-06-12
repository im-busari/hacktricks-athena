import os
import vonage

key=os.environ.get('KEY')
secret=os.environ.get('SECRET')
website=os.environ.get('WEBSITE_URL')
client = vonage.Client(key=key, secret=secret)
headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

def send_invite(request):
    if request.method == 'OPTIONS':
        return ('', 204, headers)

    print(f"Account balance is: {client.account.get_balance()}")

    print("Sending invite SMS")

    request_json = request.get_json(silent=True)

    if request_json and 'phone_number' in request_json:
        phone_number = request_json['phone_number']

    client.sms.send_message({
        "from": "Vonage",
        "to": phone_number,
        "text": f"Hi, Sarah. This is HackTrick Mentoring. We have a growing community of female / non-binary founders, who are all using the SaltPay platform. We believe learning from people who have been here before, will help accelerate your business. See this link for more information: {website}"
    })

    return 'OK', 200

def send_confirmation(request):
    if request.method == 'OPTIONS':
        return ('', 204, headers)

    print(f"Account balance is: {client.account.get_balance()}")

    print("Sending confirmation SMS")

    request_json = request.get_json(silent=True)

    if request_json and 'mentor_name' in request_json:
        mentor_name = request_json['name']

    if request_json and 'phone_number' in request_json:
        phone_number = request_json['phone_number']

    if request_json and 'date' in request_json:
        date = request_json['date']
    
    client.sms.send_message({
        "from": "Vonage",
        "to": phone_number,
        "text": f"Hi, Sarah. We can confirm that your meeting request with your mentor {mentor_name}, has been sent. You will be meeting them on {date}. They will contact you with more information."
    })

    return 'OK', 200
