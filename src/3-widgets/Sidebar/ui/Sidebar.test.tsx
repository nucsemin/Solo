import { render, screen } from '@testing-library/react';
import { Sidebar } from '3-widgets/Sidebar';
import { withTranslation } from 'react-i18next';

describe('Sidebar', () => {
    test('simple test', () => {
        const SidebarWIthTranslation = withTranslation()(Sidebar);
        render(<SidebarWIthTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument(); // проверяет наличие в дом-дереве
        // screen.debug();
    });
});
