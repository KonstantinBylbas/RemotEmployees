import { useState } from 'react';
import Button from '../button/Button';
import './Nav.scss';

export default function Nav() {

    const[isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <nav>
            <div className="container row">
                <svg xmlns="http://www.w3.org/2000/svg" width="242" height="59" viewBox="0 0 242 59" fill="none" className='logo'>
                    <path d="M47.0197 11.9021L30.8045 58.4481H73.3676V11.9021H47.0197Z" fill="url(#paint0_linear_601_15)" />
                    <path d="M49.0465 17.8545H57.1527L66.8818 34.9194L57.1527 52.4019H49.0465L57.9627 34.9194L49.0465 17.8545Z" fill="white" />
                    <path d="M26.3479 46.3796L42.5602 0H0V46.3796H26.3479Z" fill="url(#paint1_linear_601_15)" />
                    <path d="M24.7251 40.5H16.6189L6.88983 23.435L16.6189 5.95264H24.7251L15.8089 23.435L24.7251 40.5Z" fill="white" />
                    <path d="M79.7692 21.1847C81.3669 20.9451 82.9799 20.8319 84.5943 20.8459C87.5184 20.8459 89.3291 21.3359 90.8347 22.4066C92.5071 23.5983 93.5831 25.5552 93.5831 28.4378C93.5831 31.6348 92.4138 33.7127 90.9315 34.9075C89.2643 36.2444 86.7786 36.8402 83.8106 36.8402C82.4592 36.8582 81.1083 36.7723 79.7692 36.5831V21.1847ZM83.8281 33.5282C84.114 33.5677 84.4025 33.5829 84.6908 33.5735C87.3222 33.6069 89.2703 32.1127 89.2703 28.5709C89.2703 25.5038 87.5158 24.0611 85.0651 24.0611C84.6504 24.0491 84.2356 24.0836 83.8281 24.1639V33.5282Z" fill="white" />
                    <path d="M108.427 30.3372H102.973V33.2287H109.076V36.6646H98.908V20.9668H108.755V24.4028H102.973V26.9374H108.427V30.3372Z" fill="white" />
                    <path d="M118.305 36.6646L113.483 20.9668H117.946L119.557 27.1462C120.034 28.9035 120.452 30.6214 120.818 32.6358H120.861C121.226 30.7213 121.662 28.9035 122.107 27.2157L123.756 20.9729H128.084L123.113 36.6707L118.305 36.6646Z" fill="white" />
                    <path d="M142.413 30.3372H136.95V33.2287H143.048V36.6646H132.886V20.9668H142.732V24.4028H136.95V26.9374H142.413V30.3372Z" fill="white" />
                    <path d="M148.466 20.9668H152.531V33.141H158.38V36.6646H148.466V20.9668Z" fill="white" />
                    <path d="M176.92 28.6583C176.92 33.7064 173.996 36.9216 169.317 36.9216C164.638 36.9216 162.006 33.2709 162.006 28.9094C162.006 24.3392 164.899 20.7126 169.548 20.7126C174.441 20.7126 176.92 24.4572 176.92 28.6583ZM166.317 28.8337C166.317 31.7858 167.56 33.5915 169.501 33.5915C171.443 33.5915 172.621 31.6225 172.621 28.7945C172.621 26.0904 171.452 24.0428 169.478 24.0428C167.563 24.0428 166.32 25.9362 166.32 28.8337H166.317Z" fill="white" />
                    <path d="M182.245 21.1846C183.902 20.9334 185.575 20.8202 187.248 20.8458C189.433 20.8458 190.998 21.2541 192.062 22.098C192.614 22.5456 193.057 23.12 193.358 23.7757C193.658 24.4315 193.806 25.1505 193.79 25.8758C193.79 27.4667 193.276 28.858 192.314 29.7473C191.088 30.8845 189.307 31.3897 187.26 31.3897C186.865 31.3897 186.518 31.3564 186.269 31.3383V36.6646H182.245V21.1846ZM186.278 28.111C186.585 28.1603 186.897 28.1805 187.208 28.1715C188.787 28.1715 189.778 27.3246 189.778 25.9755C189.778 24.805 189.03 24.0126 187.483 24.0126C187.078 24.0048 186.674 24.0412 186.278 24.1215V28.111Z" fill="white" />
                    <path d="M208.47 30.3372H203.016V33.2287H209.11V36.6646H198.951V20.9668H208.794V24.4028H203.016V26.9374H208.47V30.3372Z" fill="white" />
                    <path d="M214.532 21.1846C216.156 20.9459 217.796 20.8326 219.436 20.8458C221.776 20.8458 223.425 21.1785 224.568 22.0556C225.542 22.8239 226.065 23.943 226.065 25.4795C226.065 27.4364 224.647 28.8277 223.465 29.2754V29.357C224.475 29.8047 225.018 30.8058 225.407 32.17C225.864 33.764 226.363 36.0475 226.656 36.6525H222.503C222.273 36.1988 221.878 34.9708 221.439 33.0229C221.026 31.1416 220.471 30.7514 219.217 30.7514H218.555V36.6374H214.532V21.1846ZM218.555 27.751H219.614C221.146 27.751 222.03 26.9767 222.03 25.8001C222.03 24.6235 221.281 23.9551 219.93 23.943C219.47 23.9233 219.009 23.9547 218.555 24.0368V27.751Z" fill="white" />
                    <path d="M231.847 32.4844C233.075 33.1021 234.418 33.4335 235.783 33.4553C237.172 33.4553 237.859 32.9562 237.859 32.1638C237.859 31.3714 237.178 30.9721 235.462 30.3642C232.905 29.4265 231.201 27.9656 231.201 25.6306C231.201 22.854 233.464 20.7246 237.297 20.7246C238.702 20.6898 240.097 20.963 241.392 21.5262L240.541 24.8866C239.505 24.399 238.38 24.1454 237.242 24.1425C236.005 24.1425 235.324 24.6113 235.324 25.3009C235.324 26.0964 236.128 26.417 238.043 27.1581C240.778 28.1924 242 29.7078 242 31.8916C242 34.6138 239.953 36.9094 235.532 36.9094C233.701 36.9094 231.928 36.4134 231.069 35.9537L231.847 32.4844Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_601_15" x1="-84794.9" y1="63458.2" x2="-84794.9" y2="56091.9" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#ACC0FE" />
                            <stop offset="1" stop-color="#4B086D" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_601_15" x1="-89303.2" y1="65070.2" x2="-89303.2" y2="57730.6" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#ACC0FE" />
                            <stop offset="1" stop-color="#4B086D" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className={`menu ${isOpenMenu ? 'open' : ''}`}>
                    <a href="#services" onClick={() => setIsOpenMenu(false)}>
                        Услуги
                    </a>
                    <a href="#portfolio" onClick={() => setIsOpenMenu(false)}>
                        Портфолио
                    </a>
                    <a href="#stages" onClick={() => setIsOpenMenu(false)}>
                        Этапы
                    </a>
                    <a href="#designers" onClick={() => setIsOpenMenu(false)}>
                        Дизайнеры
                    </a>
                    <Button text='Заказать' type='secondary' />
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="13" viewBox="0 0 49 13" fill="none" className='menuBtn' onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <circle cx="42.5" cy="6.5" r="6.5" fill="white" />
                    <circle cx="24.5" cy="6.5" r="6.5" fill="white" />
                    <circle cx="6.5" cy="6.5" r="6.5" fill="white" />
                </svg>
            </div>
        </nav>
    )
}