Hi Kurt, Hi Sarah, Hi Simon 👋🏼

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

#### Look at it live:

Visit the deployed version of the project here: 🎉

#### Or look at it locally:

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project. 🎉

.

## My thought process

- I chose to create a simple Next.js app with the App Router due to its efficiency, scalability and maintainability features like layouts and nested routing. While this app structure is not needed for part 2 of this assessment, I knew I would be needing it for part 3, and it's a structure I'm familiar with / an efficient way to build a modular design so I chose to use it for both 2 & 3.

- Instead of working with TypeScript, I chose JavaScript for this project because I’m more familiar with it—I knew I would be building basic features, and I wanted to be efficient for this small task. I am familiar with Typescript (see a recent project I’ve built with TypeScript [here](https://github.com/lulen11/airtime-website)) but I knew it would slow me down being strict.

- I used ESLint configuration. I'm very familiar with ESLint config and it makes me a faster developer. Setting a standard and automating my formatting.

- Styling choices: I’m also very familiar with Tailwind CSS but again, I’m faster without it. I prefer to use SCSS and to set up my projects with CSS modules. More on that below.

- Defined routes using App Router because it’s simply more familiar to me having used this set up in my last few projects. I also am familiar with the pages directory but now it feels like a legacy option. I prefer the layouts, nested routing and the organisation for scalability.

To finalise the initial setup, I created a git repository, initialised git in my project and linked the two. Ordinarily I would make my first commit on main, then branch off to `development` for working progress though I rushed this build and just worked entirely locally on `main`. Normally would work on a development branch (or a feature branch) to collaborate and secure version control.

From there, I set up the foundational styles for the design provided, including colour and typography variables, among other essentials. By setting up these foundations, I'm hoping the code is clean, well-structured and easier to read/maintain. I appreciate consistent and efficient workflows and wanted to demonstrate my workflow as scalable and adaptable for future needs.

The components are all setup individually and use CSS modules. This component-based architecture allows the work to be clean, organised and adaptable to be reused and easily maintained across the project. Some sections of the site haven't been moved into components just because I was running out of time but I think I've noted where those are in the comments.

.

### Activities 1, 2 & 3 Complete:

✅ (1) Analysed Lifecare web design for technical, UX/UI & acceessibility challenges
✅ (1) [Provided design thinking & development feedback](https://www.figma.com/design/1IbUzPhZHXhmPFaEaigCLd/FED-Job-Interview-Page-Design?node-id=0-1&t=moj76XSjlczbNEH9-1)
✅ (2) Built provided mockup into responsive page
✅ (2) Added some simple user interaction
✅ (2) Built into component-based architecture to extend in the future
✅ (3) Built mini YouTube app with component-based React framework
✅ (3) Users can search and play videos via the YouTube API
✅ (3) Users can utilise local storage to save videos into a 'Favourites' list
✅ (3) Designed into a simple but effective UX/UI

.

### Some notable points about the build:

- In the Lifecare page, few things I chose to bypass to continue onto the black belt task: including a favicon, proper links, nicer handling of the responsive menu animation - particularly on open & close. Here are a couple of sites you can browse that I've worked on recently. These demonstrate my focus on a webpage in it's entirety: [CLG](https://www.codelikeagirl.com/) & CLG's [School of Code](https://learnto.codelikeagirl.com/).
- For the video app: I created a 'YouTube Data API v3' API Key in Google Cloud Console, retrieved the generated API key and created a _.env.local_ file to store it in. I haven't done this in a long time so followed online guides and had it done promptly.
- Then setup my `PlayPage` and used a basic Fetch request to get videos from YouTube
- I created all the functionality I needed in `PlayPage` and then I split them out into components: `Searchbar` component, `VideoList`, `VideoPlayer` and `FaveVideos`. I used ChatGPT to help guide me through the functionality.
- Searchbar provides an input field to search for videos and triggers the search function
- The videoList component displays a list of video results fetched from the YouTube API
- The video is added to `localStorage`. The `useEffect` hook loads favourites from `localStorage` into the favourites state. When you click a Play button there or in the VideoList, the video is set as selectedVideo, and it plays in the iframe.
- Also added a 'Remove' button to the Favourites list which modifies the localStorage.
- I would have added a 'Load more' button to the video list, to load a new list of results. I started doing it by adding a `nextPageToken` a storing it in state, and modified the search function to handle pagination but then I started running into state-related issues. I was using chatGPT and could see that it was because I was passing `null` as the first argument instead of an event. I’m confident I’d be able to work through the steps to resolve these errors quite simply but instead I decided to prioritise completing the core functionality and refining the design.
- My focus was designing and building a clean and intuitive interface, with clear user flows for searching, playing, and managing videos. I didn't focus on setting up this app responsively, though would definitely prioritise that if it was a commercial project.
- Identified a UX improvement for future iterations: embedding video playback directly into the list for a more seamless experience. I almost restructured though by this time I had got it to a functional point and didn't want to create a mess restructuring it at the last hour. I do think that might be better UX though.
- Ensured the app was fully functional, with core features polished and a focus on balancing functionality and aesthetics.

.

---

I hope you enjoy exploring the project! 🎉 Looking forward to discussing with you.

Cheers,
Lara
