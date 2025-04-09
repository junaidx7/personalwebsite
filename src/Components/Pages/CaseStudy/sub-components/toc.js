const toc = () => {
  console.log('This is toc code!');

  // Select all the headings inside SFCs
  const headings = document.querySelectorAll('.sfc h4');

  // Select the element where the table of contents will be inserted
  const tocList = document.querySelector('.tocc');

  // Generate table of contents links
  headings.forEach(function (heading, index) {
    // Create a new <a> element for the link
    const link = document.createElement('a');

    // Set the link text to the heading text
    link.textContent = heading.textContent;

    // Set the link href to the heading itself (for scrolling)
    link.href = '#heading-' + index;

    // Add an id to the heading for linking
    heading.id = 'heading-' + index;

    // Create a new <li> element for the list items
    const listItem = document.createElement('li');

    // Append the link to the list item
    listItem.appendChild(link);

    // Append the list item to the table of contents list
    tocList.appendChild(listItem);
  });

  let lastActiveLink = null; // Initialize a variable to store the last active link

  // Add click event listener to TOC links
  const tocLinks = document.querySelectorAll('.tocc a');
  tocLinks.forEach(function (link) {
    console.log('toc count :' + tocLinks.length);
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.hash);

      // Remove the active class from the last active link
      if (lastActiveLink) {
        lastActiveLink.classList.remove('active');
      }

      // Add a temporary class to the clicked link
      this.classList.add('temp-active');

      // Scroll to the target element smoothly
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Listen for the scrollIntoView event
      target.addEventListener('scrollIntoView', function scrollHandler(event) {
        // Update the active link in the TOC
        updateActiveLink(link);

        // Remove the temporary class
        link.classList.remove('temp-active');

        // Remove the event listener to prevent multiple calls
        target.removeEventListener('scrollIntoView', scrollHandler);
      }, { once: true });
    });
  });

  // Update active link based on scroll position
  window.addEventListener('scroll', function () {
    // Get the current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    tocLinks.forEach(function (link) {
      // Select the heading the link points to
      const target = document.querySelector(link.hash);

      // Check if the target element is in view
      if (target.offsetTop <= scrollPosition + 100 && (target.offsetTop + target.offsetHeight) > scrollPosition) {
        // Update the active link in the TOC
        updateActiveLink(link);
      }
    });
  });

  // Function to update the active link in the TOC
  function updateActiveLink(link) {
    // Remove the 'active' class from the last active link
    if (lastActiveLink) {
      lastActiveLink.classList.remove('active');
    }

    // Add the 'active' class to the current link
    link.classList.add('active');

    // Update the last active link
    lastActiveLink = link;
  }
};

export default toc;