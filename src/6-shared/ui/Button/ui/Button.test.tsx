import { render, screen } from '@testing-library/react';
import { Button } from '6-shared/ui/Button';
import { ThemeButton } from '6-shared/ui/Button/ui/Button';

describe('Button', () => {
    test('simple test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument(); // проверяет наличие в дом-дереве
        // screen.debug();
    });

    test('with theme props', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear'); // проверяет наличие класса стиля
        // screen.debug(); // чтобы увидеть что у нас отрендерилось, какая разметка
    });

    test('with theme props fire', () => {
        render(<Button className="fire">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('fire'); // проверяет наличие класса стиля
        // screen.debug(); // чтобы увидеть что у нас отрендерилось, какая разметка
    });
});
