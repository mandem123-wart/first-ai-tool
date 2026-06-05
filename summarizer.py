import os
from openai import OpenAI

def summarize_text(file_path):
    # Check if the text file exists locally
    if not os.path.exists(file_path):
        print(f"Error: The file '{file_path}' was not found.")
        return

    # Read the text contents of the document
    with open(file_path, 'r', encoding='utf-8') as file:
        text_content = file.read()

    print("Document successfully loaded. Sending request to the AI model...")

    # Initialize the API client using an environment variable
    client = OpenAI(api_key=os.environ.get("AI_API_KEY"))

    try:
        # Send the text to the model for quick summary processing
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant. Provide a concise bullet-point summary highlighting the main ideas of the text."},
                {"role": "user", "content": text_content}
            ]
        )
        
        print("\n--- Document Summary ---")
        print(response.choices[0].message.content)
        
    except Exception as e:
        print(f"An error occurred while calling the API: {e}")

if __name__ == "__main__":
    # Standard configuration file name for local testing
    target_file = "document.txt"
    summarize_text(target_file)
  
