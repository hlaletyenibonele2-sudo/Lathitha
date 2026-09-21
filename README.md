# 🎂 Birthday Surprise Website

This version includes:

- Fake serious/confidential document opening
- First name + surname verification screen
- Verification loading animation
- Birthday reveal with confetti
- Personal name automatically inserted into the card
- 5 photo/message sections
- Scroll reveal animations
- Reading progress bar
- Floating hearts
- Desktop cursor-heart effect
- Animated final birthday message
- Music button
- Mobile-friendly layout
- No external libraries
- No server/database: entered name is only used in the current browser page

## Add your own photos

Put your five photos in `assets/`:

photo1.jpg
photo2.jpg
photo3.jpg
photo4.jpg
photo5.jpg

The fifth photo is also used on the final page. You can change that in `index.html`.

## Add your own messages

Open `index.html` and replace the paragraphs inside the five `.message` sections.

You can also change the headings.

## Change the final message

In `script.js`, find:

const text = "I hope today reminds you just how special you are....";

Replace that entire message with your own final birthday message.

## Change the signature

In `index.html`, find:

Your favourite person ❤️

and replace it with your name.

## Optional music

Put an MP3 file named:

music.mp3

inside the `assets` folder.

The music button is already built into the website.

Browsers often block automatic music playback, so the visitor may need to tap the Music button once.

## Put it on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`.
3. Upload the entire `assets` folder.
4. Go to Settings → Pages.
5. Select Deploy from a branch.
6. Select `main` and `/ (root)`.
7. Save.
8. GitHub will give you the website link.

## Important

The name and surname are NOT uploaded anywhere. JavaScript uses them only to personalise the page in the current browser session.
