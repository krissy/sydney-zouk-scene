<a id="readme-top"></a>


<!-- PROJECT HEADER -->
<br />
<div align="center">
<h3 align="center">Sydney Brazilian Zouk Scene website 🇦🇺🇧🇷</h3>

  <p align="center">
    Find this live at <a href="https://sydneybrazilianzoukscene.com"><strong>sydneybrazilianzoukscene.com</strong></a>    
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## 👯‍♂️ About

This is the source code for the Sydney Brazilian Zouk Scene website, a **responsive single page website** that lists Brazilian Zouk dance events in Sydney.

To keep information up-to-date, its **data source is a public google spreadsheet**, with edit access given to event organisers. You can find an example of the required spreadsheet format [here](https://docs.google.com/spreadsheets/d/1zXwfKeJVkRcvg3vubFCW1CWPjSkxwvci2B5wKLozBtg/edit?gid=0#gid=0).

It uses **vanilla HTML, JS and CSS** and is hosted on [Vercel](https://vercel.com) on a free tier, utilising its convenient **server functions** for fetching data.

**You’re welcome to copy this project** and make one for your local dance scene! See the instructions below.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ✨ Features

* **Responsive and lightweight layout** with vanilla HTML, JS and CSS only (no frameworks required)
* **Integration with Google Spreadsheets** to allow local organisers to keep event content up-to-date
* **Mobile-friendly burger menu**
* **Smooth scroll links** to sections and back to top
* **Easy to customise and expand**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## 🌱 Getting Started

To get a local copy up and running follow these steps. This project is beginner-friendly but assumes you have **basic coding knowledge** and your machine setup for development. 

***If you are **new to coding and curious to learn**, [Free Code Camp](https://www.freecodecamp.org/) is a great starting point!***

### ✂️ Prerequisites

1. Set up a [GitHub account](https://github.com/) to host your code if you haven't already.

2. Make sure you have node package manager installed:

* npm
  ```sh
  npm install npm@latest -g
  ```

3. Create a [vercel](vercel.com) account and set up the [vercel CLI](https://vercel.com/docs/cli) to run the site locally.

4. Create your own Google Spreadsheet in the correct format, and make it publicly viewable to anyone with the link. You can copy the [example spreadsheet here](https://docs.google.com/spreadsheets/d/1zXwfKeJVkRcvg3vubFCW1CWPjSkxwvci2B5wKLozBtg/edit?gid=0#gid=0).


### 🔨 Installation

1. Click the **Fork button** at the top-right of this page to copy it to your GitHub account.

2. **Clone your repository** to your local machine using: 
   ```sh
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
   ```

3. **Install package dependencies** using NPM (Node Package Manager):

   ```sh
   npm install
   ```

4. **Create a .env file** in your root directory and add your `SPREADSHEET_URL` to it. You can **copy the .env.example provided**, and use the [example spreadsheet](https://docs.google.com/spreadsheets/d/1zXwfKeJVkRcvg3vubFCW1CWPjSkxwvci2B5wKLozBtg/edit?gid=0#gid=0) to start, but to make edits and play with real data please replace the spreadsheet ID with your own copy. *Note: This .env file you create will be excluded from being tracked in git for privacy's sake.*

   ```js
   cp .env.example .env
   ```

   ```
   SPREADSHEET_URL=https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/gviz/tq?tqx=out:json&sheet=Sheet1
   ```

5. **Run it locally** using vercel's dev server
   ```js
   vercel dev 
   ```

6. **View it in your browser** at http://localhost:3000

7. **Customise away!**

* **Update HTML content:** Replace any text, images, links, colours, or icons in the HTML and CSS.
* **Update the menu:** Add your own links to the navbar.
* **Update embedded content:** Update YouTube or Instagram embed codes with your content.
* **Update SEO and social share content:** Replace the metatags used for SEO (search engine optimisation) keywords and link sharing
* **Customise the spreadsheet and data:** Add different fields to your spreadsheet and update the content accordingly.
* **Expand:** Optionally add more pages or features or even plug in a content management system if you're feeling fancy

Find more details in the How To Use section below.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🛠️ How to Use

### 📁 Main Files

* **index.html** — The homepage for all main content, SEO keywords and metadata
* **styles.css** — All your custom styles
* **/images folder** - please replace the main banner `images/banner.png` with your own (we used [Canva](https://canva.com) to create ours)
* **favicon.ico** - please replace the `favicon.ico` with your own (you can use sites like [favicon.io](https://favicon.io) to create one)
* **.env** - copy of your environment variables including your JSON-formatted spreadsheet URL (see `.env.example`). NB: You will need to add these environment variables in Vercel once hosted.
* **fetchData.js** - this makes the server call to your Google spreadsheet. You shouldn't have to make edits to this.

### 💡 Embeds

To **embed a YouTube or Instagram video**:

* Paste the appropriate `<iframe>` or `<blockquote>` code inside your HTML file. You can find instructions [here for YouTube](https://support.google.com/youtube/answer/171780?hl=en) and [here for Instagram](https://help.instagram.com/620154495870484?helpref=faq_content).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📤 Sharing Your Version

* **Prepare your data:** Create your dance scene data Google spreadsheet (you can copy the [example Google spreadsheet here](https://docs.google.com/spreadsheets/d/1zXwfKeJVkRcvg3vubFCW1CWPjSkxwvci2B5wKLozBtg/edit?gid=0#gid=0)).

* **Host your website:** Once you've customised your site, you can host it for free on [vercel](https://vercel.com), and it will be available on a free **yourchosensubdomain.vercel.app** URL. You can optionally choose to purchase a .com domain or equivalent on a domain name registrar like [Namecheap](https://www.namecheap.com/) and set it up to point to your vercel site.

* **Update your enviroment variables:** Don't forget to copy your `SPREADSHEET_URL` to your [environment variables](https://vercel.com/docs/environment-variables) in vercel

* **Make it searchable:** Once it's up and running, add your URL to the [Google Search Console](https://search.google.com/search-console/about) so it can be discovered on Google using all your Search Engine Optimisation (SEO) keywords and content.

* **Share it!:** Share your new space with your local community and **give your local organisers Edit access to the Google spreadsheet** to ensure your events stay up to date!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤗 Contributing

This site was made very quickly in my spare time and very much prioritised **getting it out there over perfection**! Any contributions you make to this project to clean it up or make it better are **greatly appreciated**. ☺️

1. Clone this repository and create your Feature Branch (`git checkout -b feature/AmazingFeature`)
2. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the Branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request
5. Let me know and I'll review and merge it which will deploy it to production

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Acknowledgments

* Lucien - for SEO content
* Ana - for festival and DJ links

<p align="right">(<a href="#readme-top">back to top</a>)</p>

