from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_data', methods=['POST'])
def get_data():
    # Dummy data (replace with your actual data)
    data = {'subject_name1': 'english', 'number1': 113, 'subject_name2': 'marathi', 'number2':311, 'subject_name3':'hindi','number3':'not defined'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
    
    
    
