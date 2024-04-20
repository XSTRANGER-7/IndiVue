import os
from pathlib import Path
from django.conf import settings
from .models import Question, Choice # Replace 'myapp' with the name of your Django app and 'YourModel' with the name of your model

def fetch_data_and_write_to_file():
    # Fetch data from the database
    data = Choice.objects.all()

    # Define the file path
    file_path = os.path.join(settings.BASE_DIR, './data.txt')

    # Write data to the text file
    with open(file_path, 'w') as f:
        for item in data:
            f.write(f"ID: {item.id}, Name: {item.name}, OtherField: {item.other_field}\n")

    print("Data has been written to", file_path)

if __name__ == "__main__":
    fetch_data_and_write_to_file()
