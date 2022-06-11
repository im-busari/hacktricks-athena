import os
import vonage

key=os.environ.get('KEY')
secret=os.environ.get('SECRET')
website=os.environ.get('WEBSITE_URL')
client = vonage.Client(key=key, secret=secret)

def send_invite(request):
    print(f"Account balance is: {client.account.get_balance()}")

    print("Sending invite SMS")

    request_json = request.get_json(silent=True)

    if request_json and 'phone_number' in request_json:
        phone_number = request_json['phone_number']

    client.sms.send_message({
        "from": "Vonage",
        "to": phone_number,
        "text": f"Hi, Sarah. This is SaltPay. We have a growing community of female / non-binary founders. See this link for more information: {website}"
    })

def send_confirmation(request):

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
        "text": f"Hi, Sarah. Your mentor's name is {mentor_name}. You will be meeting them on {date}"
    })
