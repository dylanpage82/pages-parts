# Pages Part Store
Pages Parts is a part store website that allows you to brouse parts and look at the description of the part. If you sign-up and login you will gain access to edit the part information, delete the part, and add new parts to inventory.

### Technologies Used
HTML, CSS, Javascript, MongoDB, JSX, Node.js

## Getting started

## Next steps
I would like to build in a search bar that takes you to the show page of the part you type in. I would also like to make it to were there are two log-ins one for the general user to buy and shop and another for the admin to edit the website

Action | URL          |HTTP Verb | JSX view filename | mongoose method
-------|--------------|----------|-------------------|------------------
Index  |/parts/        |GET       | Index.jsx         | Part.find                
Show   |/parts/:id     |GET       | Show.jsx          | Part.findById
New    |/parts/new     |GET       | New.jsx           | none
Create |/parts         |POST      | none              | Part.create(req.body)
Edit   |/parts/:id/edit|GET       | Edit.jsx          |
Update |/parts/:id     |PUT       | none              | Part.findByIdAndUpdate
Destroy|/parts/:id     |DELETE    | none              | Part.findByIdAndDelete