# WeddingStory Header Navigation Design Specification

This document outlines the design and functionality of the header navigation for the WeddingStory website.

## 1. Navigation Items
Based on the site's purpose and structure, the navigation will contain the following 5 items:

- **Home**: Scrolls to the top of the page.
- **Welcome**: Scrolls to the `#greeting` section.
- **Gallery**: Scrolls to the `#gallery` section.
- **Date & Venue**: Scrolls to the `#info` section.
- **Access Map**: Scrolls to the `#map` section.

## 2. Header Behavior on Scroll (PC & Mobile)
The header will implement a "hiding" or "shy" behavior to maximize screen real estate for content.

- When the user scrolls **down**, the header will disappear.
- When the user scrolls even slightly **up**, the header will reappear.

## 3. Desktop View (Viewport >= 768px)
- The header will display the site title, "Wedding Story", on the left.
- The navigation items will be displayed horizontally on the right.

## 4. Mobile View (Viewport < 768px)
- The header will adopt a **hamburger menu** design.
- The site title will be displayed on the left, and a hamburger menu icon will be displayed on the right.
- The navigation links will be hidden by default.

### Mobile Menu Interaction
- Tapping the hamburger icon will cause a navigation menu panel to **slide in from the right** side of the screen.
- The menu will contain the 5 navigation items, stacked vertically.
- A "Close" (X) button will be present in the menu to dismiss it.
- Tapping the semi-opaque overlay outside the menu will also dismiss it.
- Tapping a navigation link will:
    1. Smoothly scroll to the corresponding section.
    2. Automatically close the menu.
