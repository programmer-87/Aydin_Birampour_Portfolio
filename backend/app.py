from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from datetime import datetime

app = Flask(__name__)
# فعال‌سازی CORS برای اینکه سایتت (فرانت‌اند) بتونه به این بک‌اند وصل بشه
CORS(app, origins=["https://aydinbeyrampor.ir", "https://www.aydinbeyrampor.ir", "http://localhost:5500"])

# تابع برای ساخت دیتابیس در صورت عدم وجود
def init_db():
    conn = sqlite3.connect('contacts.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT,
            message TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# فراخوانی تابع ساخت دیتابیس در شروع برنامه
init_db()

@app.route('/api/contact', methods=['POST'])
def receive_message():
    data = request.get_json()
    
    # گرفتن اطلاعات از فرم
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject', 'بدون موضوع')
    message = data.get('message')
    
    if not name or not email or not message:
        return jsonify({"status": "error", "message": "لطفاً همه فیلدهای ضروری را پر کنید."}), 400

    try:
        conn = sqlite3.connect('contacts.db')
        cursor = conn.cursor()
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        cursor.execute('''
            INSERT INTO messages (name, email, subject, message, created_at)
            VALUES (?, ?, ?, ?, ?)
        ''', (name, email, subject, message, current_time))
        
        conn.commit()
        conn.close()
        
        return jsonify({"status": "success", "message": "پیام شما با موفقیت دریافت شد."}), 200
        
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=False, port=5000)