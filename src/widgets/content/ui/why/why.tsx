import Image from 'next/image';

import style from './why.module.css';

export function Why() {
	return (
		<section className={style['why-wrapper']}>
			<div className={style.why}>
				<div className={style['header']}>
					<Image
						loading='lazy'
						width={820}
						height={365}
						className={style['header-sign']}
						src="/assets/sign.png"
						alt='sign'
					/>
					<p className={style['header-text']}>Почему мы?</p>
				</div>
				<div className={style.content}>
					<div className={style['content-item']}>
						<div className={style['content-number']}>1</div>
						<b className={style['item-header']}>ЦЕНИМ ВАШЕ ВРЕМЯ</b>
						<span className={style['item-body']}>
							Работа исполняется в срок, без нюансов.
						</span>
					</div>
					<div className={style['content-item']}>
						<div className={style['content-number']}>2</div>
						<b className={style['item-header']}>ШИРОКИЙ КРУГ КОМПЕТЕНЦИЙ</b>
						<span className={style['item-body']}>
							Мы будем рады сотрудничать как с профессионалами в архитектурной и
							конструкторской среде, так и участвовать в разработке персональных интерьерных решений.
						</span>
					</div>
					<div className={style['content-item']}>
						<div className={style['content-number']}>3</div>
						<b className={style['item-header']}>НЕ ЗЛОУПОТРЕБЛЯЕМ ДОВЕРИЕМ</b>
						<span className={style['item-body']}>
							Все представленные на сайте материалы получены по согласованию с клиентами,
							мы не разглашаем персональных данных и не проводим рекламных компаний на их базе.
							Строго соблюдаем нормы NDA.
						</span>
					</div>
					<div className={style['content-item']}>
						<div className={style['content-number']}>4</div>
						<b className={style['item-header']}>УВАЖАЕМ БЮДЖЕТЫ</b>
						<span className={style['item-body']}>
							Все бюджетные соглашения окончательны и не изменятся в процессе работы.
						</span>
					</div>
					<div className={style['content-item']}>
						<div className={style['content-number']}>5</div>
						<b className={style['item-header']}>ВДОХНОВЛЯЕМСЯ ВАМИ</b>
						<span className={style['item-body']}>
							Каждый проект это возможность поработать с креативными и интересными
							заказчиками, мы подходим к каждому индивидуально и внимательно слушаем.
						</span>
					</div>
					<div className={style['content-item']}>
						<div className={style['content-number']}>6</div>
						<b className={style['item-header']}>ВСЕГДА НА СВЯЗИ</b>
						<span className={style['item-body']}>
							Мы с готовностью сотрудничаем в долгосрочной перспективе
							и охотно отвечаем на любые вопросы.
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
