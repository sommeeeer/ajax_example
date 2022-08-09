from flask import Flask, render_template, url_for, request


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/sensor_data')
def sensor_data():
    sensor = request.args.get('sensor')
    print(sensor)
    return {
        sensor: {'sensor': [1337.1337, 123.133, 123.13444], 'rul': [1337.2313131, 23131.3131, 12313.3131]},
        '23': {'sensor': [4515.13351237, 12513.112533, 512.1245], 'rul': [31.213, 5675.979, 4636.75]}
    }


if __name__ == '__main__':
    app.run(port=8080, debug=True)
