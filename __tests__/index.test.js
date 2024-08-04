import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import '@testing-library/jest-dom';
import Home from '../app/page';

jest.mock('axios');
const storiesData = [
    { id: 1, image: 'https://example.com/image1.jpg', text: 'Story 1' },
    { id: 2, image: 'https://example.com/image2.jpg', text: 'Story 2' },
];
axios.get.mockResolvedValue({ data: storiesData });

describe('Stories Component', () => {
    test('renders stories', async () => {
        render(<Home />);

        const firstStory = await screen.findByText('Story 1');
        expect(firstStory).toBeInTheDocument();

        fireEvent.click(firstStory);

        const secondStory = await screen.findByText('Story 2');
        expect(secondStory).toBeInTheDocument();
    });
});