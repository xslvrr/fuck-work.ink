## ‼️‼️ YOU NEED TO BE LOGGED OUT OF WORK.INK FOR IT TO WORK ‼️‼️
Not a bypass since it just does the steps extremely quick, needs you to be logged out due to how the process works.
### How to install it
1. Click on Extension.zip (or the extension folder if you don't trust me, you'll have to repeat the next step on all 3 files though).
2. You should see a download icon right under history on the rightside of the screen, click it and you will have downloaded the extension.
3. If you installed the zip, double click to unzip it in your file manager. If you downloaded all 3 files independently, create a folder and put the files inside of it.
4. Go to your browser go to the URL: chrome://extensions
5. In the very top right there should be a "Developer mode" toggle, enable it.
6. There should now be a "Load unpacked" button in the top left, click on it and it should bring up a file selector.
7. Single click on the folder with all the extension files in it then confirm your choice.
8. You're done! If you did all steps correctly, extension should now be ready to use on any Work.ink links.
### How it works
1. background.js replicates the verification which the extension provides, effectively tricking the site into thinking you installed their malicious extension.
2. content.js constantly checks for when buttons appear (you may need to do cloudflare verification yourself).
3. Once a button loads in it immediately clicks in the following order to skip all waiting times: Go To Destination > Get instant Access > X (top right) > Go To Destination > Go To Destination (not a typo)
4. If done quick enough it may instantly redirect you, if not, wait a few seconds on the Google Safe Browsing API check (it doesn't actually use the API they're fucking lying) and it should redirect you.
5. If all goes well you should go through undetected since you technically did all steps.
### Why I despise Work.ink
I did a deep dive into Work.ink's practices, initially because of their use of Google Safe Browsing API and how the timer doesn't seem to progress when the tab is unfocused. It also had you forcibly download an extension and for the first time ever it actually detected it, which needed code inside the extension to actually tell the site the user installed it. This was super sketchy and the PDF Editor chrome extension required is literally under a work.ink email (you cannot make this up lmfao), meaning they do this so they can get the extension onto your device (VERY OBVIOUSLY FOR DATA). Looking at the source of the extension I found this image (refer to the bottom), which when reverse searched led to two more suspicious extensions which are both in foreign languages (Arabic and Indonesian respectively). There was clearly some scheme at play and I didn’t want to keep their malicious software on my computer, and I developed a genuine hatred for this obvious scam that people forcibly have to use. Also, the image had ZERO purpose in the code, they genuinely didnt even try to hide that it was malicious. Their inability to create a scam that isn't obvious is laughable, YET PEOPLE ACT LIKE IT'S NOTHING. This genuinely annoyed me which led to me creating this to avoid installing the extensions and fucking up their user engagement stats.
