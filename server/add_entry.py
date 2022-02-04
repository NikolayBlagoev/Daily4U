import json
import os
dirpath = os.path.dirname(os.path.realpath(__file__))
data = {
    'dateString': None,
    'quote': {
        'quote': None,
        'quoteBy': None,
        'quoteSource': None,
        'quotePicture': None,
    },
    
    'poem': {
        'text': None,
        'author': None
    },
    'movie': {
        'title': None,
        'director': None,
        'poster': None
    },
    'fact': {
        'text': None,
        'source': None
    }, 
    'book': {
        'title': None,
        'author': None,
        'description': None,
        'picture': None
    }
}
choice = input('Do you want to make a new entry (new/n) or do you want to edit an existing one (edit/e)? ')
if choice == 'new' or choice == 'n':
    data['dateString'] = input('Date for the entry? (YYYY-MM-DD) ')
    data['quote']['quote'] = input('Enter the quote: ')
    data['quote']['quoteBy'] = input('Enter the quote author: ')
    data['quote']['quoteSource'] = input('Enter the quote source: ')
    data['quote']['quotePicture'] = input('URL to the authors picture: ')
elif choice == 'e' or choice == 'edit':
    exit()
json_string = json.dumps(data)
print(json_string)
with open(dirpath+'/entries/'+data['dateString']+'.json', 'w') as outfile:
    outfile.write(json_string)