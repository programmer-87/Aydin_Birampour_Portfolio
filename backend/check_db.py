import sqlite3

# اتصال به دیتابیس
conn = sqlite3.connect('contacts.db')
cursor = conn.cursor()

# گرفتن همه پیام‌ها
cursor.execute("SELECT * FROM messages")
messages = cursor.fetchall()

print(f"تعداد پیام‌های ذخیره شده: {len(messages)}\n")

for msg in messages:
    print(f"ID: {msg[0]}")
    print(f"نام: {msg[1]}")
    print(f"ایمیل: {msg[2]}")
    print(f"موضوع: {msg[3]}")
    print(f"پیام: {msg[4]}")
    print(f"تاریخ: {msg[5]}")
    print("-" * 30)

conn.close()