document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const messagesNotification = document.querySelector("#messages-notification");
  const messages = document.querySelector(".messages");
  const messageItems = messages.querySelectorAll(".message");
  const messageSearch = document.querySelector("#message-search");

  const theme = document.querySelector("#theme");
  const themeModal = document.querySelector(".customize-theme");
  const fontSizes = document.querySelectorAll(".choose-size span");

  const root = document.querySelector(":root");

  const colorPalette = document.querySelectorAll(".choose-color span");

  const Bg1 = document.querySelector(".bg-1");
  const Bg2 = document.querySelector(".bg-2");
  const Bg3 = document.querySelector(".bg-3");

  // Remove active class from all menu items
  const changeActiveItem = () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  };

  // Toggle active class for menu items
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      changeActiveItem();
      item.classList.add("active");
      if (item.id !== "notifications") {
        document.querySelector(".notifications-popup").style.display = "none";
      } else {
        document.querySelector(".notifications-popup").style.display = "block";
        document.querySelector("#notifications .notification-count").style.display = "none";
      }
    });
  });

  // Close notifications popup when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !document.querySelector(".notifications-popup").contains(e.target) &&
      !messagesNotification.contains(e.target)
    ) {
      document.querySelector(".notifications-popup").style.display = "none";
    }
  });

  // Handle messages notification click to show popup
  messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
      messages.style.boxShadow = "none";
    }, 2000);
  });

  // Message search functionality
  const searchMessage = () => {
    const searchTerm = messageSearch.value.trim().toLowerCase();
    messageItems.forEach((message) => {
      const name = message.querySelector("h5").textContent.toLowerCase();
      if (name.includes(searchTerm)) {
        message.style.display = "flex";
      } else {
        message.style.display = "none";
      }
    });
  };

  messageSearch.addEventListener("input", searchMessage);

  // Theme customization modal functionality
  const openThemeModal = () => {
    themeModal.style.display = "grid";
  };

  const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
      themeModal.style.display = "none";
    }
  };

  themeModal.addEventListener("click", closeThemeModal);
  theme.addEventListener("click", openThemeModal);

  // Remove active class from spans or font size selectors
  const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
      size.classList.remove("active");
    });
  };

  // Font size functionality
  fontSizes.forEach((size) => {
    size.addEventListener("click", () => {
      removeSizeSelector();
      let fontSize;
      size.classList.toggle("active");

      if (size.classList.contains("font-size-1")) {
        fontSize = "10px";
        root.style.setProperty("--sticky-top-left", "5.4rem");
        root.style.setProperty("--sticky-top-right", "5.4rem");
      } else if (size.classList.contains("font-size-2")) {
        fontSize = "13px";
        root.style.setProperty("--sticky-top-left", "5.4rem");
        root.style.setProperty("--sticky-top-right", "-7rem");
      } else if (size.classList.contains("font-size-3")) {
        fontSize = "16px";
        root.style.setProperty("--sticky-top-left", "-2rem");
        root.style.setProperty("--sticky-top-right", "-17rem");
      } else if (size.classList.contains("font-size-4")) {
        fontSize = "18px";
        root.style.setProperty("--sticky-top-left", "-5rem");
        root.style.setProperty("--sticky-top-right", "-25rem");
      } else if (size.classList.contains("font-size-5")) {
        fontSize = "22px";
        root.style.setProperty("--sticky-top-left", "-10rem");
        root.style.setProperty("--sticky-top-right", "-33rem");
      }

      document.querySelector("html").style.fontSize = fontSize;
    });

    // Check if size already has 'active' class in HTML
    if (size.classList.contains("font-size-3")) {
      size.classList.add("active");
    }
  });

  // Remove active class from color selectors
  const removeColorSelector = () => {
    colorPalette.forEach((color) => {
      color.classList.remove("active");
    });
  };

  // Change primary colors
  colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
      removeColorSelector();
      color.classList.add("active");
      let primaryHue = 252; // Default primary hue
      if (color.classList.contains("color-1")) {
        primaryHue = 252;
      } else if (color.classList.contains("color-2")) {
        primaryHue = 52;
      } else if (color.classList.contains("color-3")) {
        primaryHue = 352;
      } else if (color.classList.contains("color-4")) {
        primaryHue = 152;
      } else if (color.classList.contains("color-5")) {
        primaryHue = 202;
      }
      root.style.setProperty("--primary-color-hue", primaryHue);
    });
  });

  // Background color functionality
  let lightColorLightness;
  let whiteColorLightness;
  let darkColorLightness;

  const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
  };

  Bg1.addEventListener("click", () => {
    Bg1.classList.add("active");
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    window.location.reload();
  });

  Bg2.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    Bg2.classList.add("active");
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
  });

  Bg3.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    Bg3.classList.add("active");
    Bg1.classList.remove("active");
    Bg2.classList.remove("active");
    changeBG();
  });

  // Set default font size active based on HTML setting
  document.querySelector(".font-size-3").classList.add("active");

  // Set default color active based on HTML setting
  document.querySelector(".color-2").classList.add("active");
});
