# Pages Part Store
Pages Parts is a part store website that allows you to brouse parts and look at the description of the part. If you sign-up and login you will gain access to edit the part information, delete the part, and add new parts to inventory.

<img src = "image/Screen Shot 2022-11-04 at 7.42.31 PM.png">

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

[TrelloBoard](https://trello.com/b/JUFogYFr/pages-parts#)

[WireFrame](https://wireframepro.mockflow.com/editor.jsp?editor=on&publicid=M6df4f3087254da39c8b165d90ead37a31667527077065&perm=Create&projectid=MVd3H3K5Dh&spaceid=&ptitle=Untitled&bgcolor=white&category=featured&pcompany=C2e4e1f60bf564d5c8c838096d9f7ba03#/page/80b7351004144a1ca9667d9de870b798/sidebar/off)

[ERD](https://lucid.app/lucidchart/6b8579c8-f388-4dda-9d15-20d61882f4ba/edit?invitationId=inv_2784c601-444a-4926-b03c-c565dcf59098&page=0_0#)