import Button from '../button/Button';
import './Home.scss';

export default function Home() {

    return (
        <div className="home">
            <header>
                <div className="container">
                    <h1>
                        Разработка интернет-магазина с нуля за неделю
                    </h1>
                    <p>
                        Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета - от фирменного стиля до пользовательского интерфейса в сжатые сроки с командой Virtual Designers
                    </p>
                    <Button text='Заказать' type='secondary big' />
                </div>
            </header>
        </div>
    )
}