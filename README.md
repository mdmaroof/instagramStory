# Instagram Stories Feature

This project implements an Instagram stories feature using Next.js and TypeScript.

## Setup

1. Clone the repository:
   ```bash
   git clone <https://github.com/mdmaroof/instagramStory.git>
   cd instagram-stories
   ```

2. Install dependencies:
   ```bash
   yarn add
   ```

3. Run the development server:
   ```bash
   yarn dev
   ```

4. Run tests:
   ```bash
   yarn test
   ```

## Design Choices

- **Performance**: Preloaded images and efficient state management to ensure smooth transitions and minimal delays.
- **Scalability**: Modular component design and API abstraction to easily extend features and support larger datasets.

## Assumptions

- The backend API serves a static list of stories without database interactions.
- The application is optimized for mobile view and may not be fully responsive on desktop screens.

## Deployment

The application is deployed using Vercel. You can access it [here](https://instagram-story-three.vercel.app/).

## Author

Mohd Maroof