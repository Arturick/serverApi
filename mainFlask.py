import requests
import flask

app = flask.Flask(__name__)

PREFIX="https://bitrix24.key-corp.ru/rest/1/ps2x0nyo577jfumv/"

LIST_OF_MULTIPE_FIELDS=[
        "UF_CRM_1663688692420"
    ]

@app.route("/", methods=["GET"])
def addLead():
    params = flask.request.json
    listOfMultipleKeys = LIST_OF_MULTIPE_FIELDS
    # ***
    prefix = PREFIX  # Входящий вэбхук
    method = "crm.lead.add.json"

    s1 = "&".join(["FIELDS[{}]={}".format(k, params[k]) for k in params if k not in listOfMultipleKeys])

    s2 = [["FIELDS[{}][{}]={}".format(k, params[k].index(i), i) for i in params[k]] for k in params if
          k in listOfMultipleKeys]
    s2 = "&".join([a for b in s2 for a in b])

    s3 = [["FIELDS[{}][{}][VALUE]={}".format(k, params[k].index(i), i) for i in params[k]] for k in params if
          k in ["PHONE", "EMAIL"]]
    s3 = "&".join([a for b in s3 for a in b])

    s = s2 + "&" + s1 + "&" + s3

    response = requests.get(url=prefix + method + "?" + s)
    if response.status_code == 200:
        print("Created Lead ID: ", response.json()["result"])
        return {"result":response.json()["result"]}


    return {"result":response.json()["error"]}


if __name__ == '__main__':
    app.run(debug=True)
