import { render, screen } from '@testing-library/react';
import { Sidebar } from '3-widgets/Sidebar';

describe('Sidebar', () => {
    test('simple test', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument(); // проверяет наличие в дом-дереве
        // screen.debug();
    });
});
