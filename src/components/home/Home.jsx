import Button from '../button/Button';
import List from '../list/List';
import './Home.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SendMessage from '../../services/sendMessage';
import MobileHeader from './assets/background/mobile/mobileHeader.webp';
import MobileSection3 from './assets/background/mobile/mobileSection3.webp';
import MobileSection4 from './assets/background/mobile/mobileSection4.webp';

export default function Home() {

    let tmp = 0;

    const settings = {
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 6000,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.2,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="home">
            <header>
                <div className="column">
                    <img src={MobileHeader} alt="" className='mobile' />
                    <div className="container">
                        <h1>
                            Разработка интернет-магазина с нуля за неделю
                        </h1>
                        <p>
                            Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета - от фирменного стиля до пользовательского интерфейса в сжатые сроки с командой Virtual Designers
                        </p>
                        <Button text='Заказать' type='secondary big' />
                    </div>
                </div>
            </header>

            <section className='home_section_0' id='services'>
                <div className="container">
                    <h2>
                        Что входит в услугу по созданию дизайна интернет-магазина?
                    </h2>

                    {
                        [['Дизайн портала', 'Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.'], ['Дизайн адаптивной мобильной версии', 'Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий. При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML. \nОдин URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии.'], ['Дизайн десктопной версии', 'Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.'], ['Пользовательский интерфейс', 'Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания.'], ['Микро UX', 'Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов.']].map(list =>
                            <List head={list[0]} body={list[1]} />
                        )
                    }
                </div>
            </section>

            <section className='home_section_1' id='stages'>
                <div className="container">
                    <h2>
                        Этапы разработки интернет-магазина
                    </h2>

                    <Slider {...settings}>
                        {
                            tmp = 1,
                            [['Анализ', 'Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение.'], ['Визуальное решение', 'Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт. '], ['Техническая реализация', 'После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.'], ['Наполнение контентом', 'Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом.'], ['Тестирование', 'Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.']].map(block =>
                                <div className='block'>
                                    <div>
                                        <h3>
                                            {tmp + '. ' + block[0]}
                                        </h3>
                                        <p>
                                            {block[1]}
                                        </p>
                                    </div>
                                    <img src={require(`./assets/stages/${tmp++}.webp`)} alt={`Онлайн-магазин ` + block} />
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </section>

            <section className='home_section_2' id='portfolio'>
                <div className="container">
                    <h2>
                        Примеры онлайн-магазинов
                    </h2>

                    <div className="grid">
                        {
                            tmp = 0, ['для оптовых покупок', 'для флористов', 'для парикмахеров', 'для визажистов', 'для кондитеров', 'для художников'].map(block =>
                                <a href='#'>
                                    <img src={require(`./assets/examples/${tmp++}.webp`)} alt={`Онлайн-магазин ` + block} />
                                    <span>
                                        <h3>
                                            Онлайн-магазин
                                        </h3>
                                        <p>
                                            {block}
                                        </p>
                                    </span>
                                </a>
                            )
                        }
                    </div>
                </div>
            </section>

            <section className='home_section_3' id='designers'>
                <div className="container column">
                <img src={MobileSection3} alt="" className='mobile' />
                    <h2>
                        Необходимо больше информации?
                    </h2>
                    <p>
                        Если Вы владелец онлайн-магазина или только начинаете свой путь в электронной коммерции и вам нужен уникальный дизайн онлайн магазина для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий период времени, он поможет  визуализировать ваш веб проект.
                    </p>
                    <Button text='Оставить заявку' type='secondary big' />
                </div>
            </section>

            <section className='home_section_4'>
                    <div className="container column">
                        <h2>
                            Обсудить проект
                        </h2>
                        <p>
                            Расскажите о своих бизнес-целях и мы поможем вам в их достижении
                        </p>
                        <form onSubmit={(event) => SendMessage(event)}>
                            <input type="text" name='name' placeholder='Имя' required minLength={2} />
                            <input type="text" name='messanger' placeholder='Telegram/Viber' required minLength={2} maxLength={30} />
                            <input type="email" name='email' placeholder='Email' required />
                            <Button text='Отправить' type='secondary big' />
                        </form>

                        <img src={MobileSection4} alt="" className='mobile' />
                    </div>
            </section>
        </div>
    )
}