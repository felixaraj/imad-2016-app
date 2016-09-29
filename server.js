var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne: {
        title: `Article-one | Felix Arokiya Raj`,
        heading: `Article-one`,
        date: `September 28, 2016`,
        content:`<p>
                    First, you need to switch to command mode. This can be done by hitting the [Escape] key. Next, you can type the following commands:
                    :q to quit.
                    :q! to quit without saving data/file.
                    :x save and quit.
                    Please note that whenever you type :, a vim or vi : will appear at the bottom of the screen. You need to type the rest of the command at the bottom of the screen.
                </p>
                <p>
                    The 7-Zip program can unzip and untar Linux gzipped tar files from Windows Explorer.  Once installed, you simply right-click the file you want to unzip and/or untar in Windows Explorer, and select 7-Zip from the right-click menu.  If your file is gzipped and tarred, you need to execute the 7-Zip extract twice: first on the .tgz file, and then again on the generated .tar file.
                    It is Open Source and licenced under LGPL.  It can be obtained at:
                    <a href='http://www.7-zip.org/'>7-zip</a> 
                </p>`
        },
    articleTwo: {
         title: `Article-two | Felix Arokiya Raj`,
        heading: `Article-two`,
        date: `September 29, 2016`,
        content:`<p>
                    <a href='https://howtonode.org/how-to-install-nodejs'> Installing NodeJS </a>
                 <br>
                Sep 11, 2010 - To do so, follow these steps: Install cygwin. Use setup.exe in the cygwin folder to install the following packages: devel → openssl. devel → g++-gcc. devel → make. python → python. devel → git. Open the cygwin command line with Start > Cygwin > Cygwin Bash Shell . Run the below commands to download and build node.
                </p>
                 </div>
                 <div>
                <p>
                Dear Sir,
                Please see the circular and give the details in a weeks time.
                Dr. Sudhindra Nath Panda
                Director
                National Institute of Technical Teachers Training and Research
                Taramani, Chennai - 600 113
                Ph: 044 2254 5406  Fax: 044 2254 1126 
                </p>`
        
    },
    articleThree: { 
        title: `Article-three | Felix Arokiya Raj`,
        heading: `Article-three`,
        date: `SSeptember 28, 2016, 19:30`,
        content:`<p>
                    What is Responsive Web Design?
                <a href='http://www.w3schools.com/html/html_responsive.asp'>Responsive Web Design</a> makes your web page look good on all devices (desktops, tablets, and phones).
                    <br>
                Responsive Web Design is about using CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen:
                 </p>
                </div>
                 <div>
                <p>
                Dear Sir,
                Please see the circular and give the details in a weeks time.
                Dr. Sudhindra Nath Panda
                Director
                National Institute of Technical Teachers Training and Research
                Taramani, Chennai - 600 113
                Ph: 044 2254 5406  Fax: 044 2254 1126 
                </p>`
        },
};
    
    
    function createTemplate (data) {
            var title = data.title;
            var heading = data.heading;
            var date = data.date;
            var content = data.content;
            var htmlTemplate = `
                <html>
                <head>
                    <title>
                        ${title}
                    </title>
                        <link href="/ui/style.css" rel="stylesheet" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
                <body>
                    <div class="container">
                        <div>
                        <a href='/'>HOME</a> 
                            <hr/>
                    </div>
                    <div>
                        <h2>
                            ${heading}
                        </h2>
                    </div>
                            <hr/>
                            <h3>
                                ${date}
                            </h3>
                    <div>
                     ${content}
                    </div>
                </body>
            </html>
                `;
                return htmlTemplate;
    }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/png-sunflower.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'png-sunflower.png'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
