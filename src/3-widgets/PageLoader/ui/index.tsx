import { classNames } from '6-shared/lib/classNames/classNames';
import { Loader } from '6-shared/ui/Loader';
import s from './styles.module.scss';

interface PageLoaderProps {
  className?: string;
}

export function PageLoader({ className }: PageLoaderProps) {
    return (
        <div className={classNames(s.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
}
