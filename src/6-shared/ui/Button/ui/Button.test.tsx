import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('simple test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument(); // проверяет наличие в дом-дереве
        screen.debug();
    });

    test('with theme props', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear'); // проверяет наличие класса стиля
        screen.debug(); // чтобы увидеть что у нас отрендерилось, какая разметка
    });

    test('with theme props undefined', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('undefined'); // проверяет наличие класса стиля
        screen.debug(); // чтобы увидеть что у нас отрендерилось, какая разметка
    });
});
