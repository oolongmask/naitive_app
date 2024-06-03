from flask import Flask, request, jsonify



app = Flask(__name__)

@app.route('/calculate_electricity_cost', methods=['POST'])
def calculate_electricity_cost():
    # フォームデータを取得
    data = request.json
    power_consumption = float(data['power_consumption']) / 1000
    electricity_rate = float(data['electricity_rate'])
    days = float(data['days'])
    cost = power_consumption * electricity_rate * 24 * days
    return jsonify(cost=cost)

@app.route('/calculate_capacity', methods=['POST'])
def calculate_capacity():
    # フォームデータを取得
    data = request.json
    w = float(data['w'])
    number = float(data['number'])
    hours = float(data['hours'])
    capacity = (w * number * hours) / 1000
    return jsonify(capacity=capacity)

@app.route('/calculate_income', methods=['POST'])
def calculate_income():
    # フォームデータを取得
    data = request.json
    system_capacity = float(data['system_capacity'])
    annual_generation = float(data['annual_generation'])
    sale_ratio = float(data['sale_ratio']) / 100
    sale_price = float(data['sale_price'])
    result = system_capacity * annual_generation * sale_ratio * sale_price
    return jsonify(income=result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
