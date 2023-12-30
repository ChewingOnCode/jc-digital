document.addEventListener("DOMContentLoaded", function () {
  // Sample blog posts data (replace this with your actual data)
  var blogPosts = [
    {
      title: "Post 1",
      content: "Content for post 1...",
      date: "12/12/2023",
      cover: "/dist/assets/cover.png",
    },
    { title: "Post 2", content: "Content for post 2...", date: "12/13/2023" },
    // Add more posts as needed
  ];

  // Sort the blog posts by date in descending order
  blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the container element
  var blogPostsContainer = document.getElementById("blog-posts-container");

  // Render the latest post on the index.html
  var latestPost = blogPosts[0];
  renderBlogPost(blogPostsContainer, latestPost);

  // Function to render a blog post
  function renderBlogPost(container, post) {
    // Create a column for the post
    var columnDiv = document.createElement("div");
    columnDiv.classList.add("column", "is-half");

    // Create a card for the post
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add(
      "is-flex",
      "is-flex-direction-column",
      "is-justify-content-center",
      "is-align-items-center"
    );

    // Create card image
    var cardImageDiv = document.createElement("div");
    cardImageDiv.classList.add("card-image");
    var postImage = document.createElement("img");
    postImage.src = post.cover;
    postImage.alt = post.title;
    cardImageDiv.appendChild(postImage);
    cardDiv.appendChild(cardImageDiv);

    // Create card content
    var cardContentDiv = document.createElement("div");
    cardContentDiv.classList.add("card-content");

    // Create heading for the post
    var postTitle = document.createElement("p");
    postTitle.classList.add("title", "is-4");
    postTitle.textContent = post.title;

    // Create subtitle for the post (date and author information can be added here)
    var postSubtitle = document.createElement("p");
    postSubtitle.classList.add("subtitle", "is-6");
    postSubtitle.textContent = "Published on " + post.date;

    // Create content for the post
    var postContent = document.createElement("div");
    postContent.classList.add("content");
    postContent.textContent = post.content;

    // Append heading, subtitle, and content to the card content div
    cardContentDiv.appendChild(postTitle);
    cardContentDiv.appendChild(postSubtitle);
    cardContentDiv.appendChild(postContent);

    // Append the card content to the card
    cardDiv.appendChild(cardContentDiv);

    // Append the card to the column
    columnDiv.appendChild(cardDiv);

    // Append the column to the container
    container.appendChild(columnDiv);

    // Create "Read More" button
    var readMoreButton = document.createElement("a");
    readMoreButton.classList.add("button", "is-link", "is-small");
    readMoreButton.textContent = "Read More";
    readMoreButton.href =
      "post.html#" + post.title.toLowerCase().replace(/\s+/g, "-");
    // Append the "Read More" button to the card content
    cardContentDiv.appendChild(readMoreButton);
  }

  // Render the older posts on the blog.html
  var olderPosts = blogPosts.slice(1);
  var blogPageContainer = document.getElementById("blog-posts-container");

  olderPosts.forEach(function (post) {
    renderBlogPost(blogPageContainer, post);
  });

  // Add a Back button
  var backButtonDiv = document.createElement("div");
  backButtonDiv.classList.add("section");

  var backButton = document.createElement("a");
  backButton.href = "index.html";
  backButton.classList.add("button", "is-primary");
  backButton.textContent = "Back to Home";

  backButtonDiv.appendChild(backButton);

  // Append the Back button to the body
  document.body.appendChild(backButtonDiv);
});
