import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


PROJECT_ID = 'pupdemo-b0bfb'

def main():
  # Use a service account
  cred = credentials.Certificate('/Users/shengyang/Downloads/pupdemo-18cdc15dfd5b.json')
  firebase_admin.initialize_app(cred)

  db = firestore.client()

  # Write
  doc_ref = db.collection(u'users').document(u'alovelace')
  doc_ref.set({
      u'first': u'Ada',
      u'last': u'Lovelace',
      u'born': 1815
  })

  doc_ref = db.collection(u'users').document(u'aturing')
  doc_ref.set({
      u'first': u'Alan',
      u'middle': u'Mathison',
      u'last': u'Turing',
      u'born': 1912
  })
  

  # Read all data
  users_ref = db.collection(u'users')
  docs = users_ref.stream()

  for doc in docs:
      print(doc.to_dict())


if __name__ == "__main__":
    main()