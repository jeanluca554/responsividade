import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			</Head>

			<body className={styles.body}>
				<section className={styles.hero}>
					<div className={styles.container}>
						<div>
							<h2>
								As melhores tecnologias em programação, direto ao ponto e do jeito
								certo.
							</h2>
							<p>
								No meio de tanta informação e da quantidade de ferramentas que
								surgem todos os dias, você precisa de alguém que te leve na direção
								certa.
							</p>
							<a href="#" className={styles.button}>Quero embarcar neste foguete!</a>
						</div>
						<img
							src="/melhores-tecnologias.svg"
							alt=""
						/>
					</div>
				</section>

				<main>
					<section className={styles.cards}>
						<div className={styles.card}>
							<div className={styles.image}>
								<img src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" />
							</div>
							<div className={styles.content}>
								<p className={`${styles.title} ${styles.textMedium}`}>
									Formulário Animado com JS puro e CSS Animation | Mayk Brito
								</p>
								<div className={styles.info}>
									<p className={styles.textMedium}>57 Min</p>
									<p className={`${styles.price} ${styles.textMedium}`}>Free</p>
								</div >
							</div >
						</div >
						<div className={styles.card}>
							<div className={styles.image}>
								<img src="https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg" />
							</div>
							<div className={styles.content}>
								<p className={`${styles.title} ${styles.textMedium}`}>
									Desvendando o CSS Grid na prática | Mayk Brito
								</p>
								<div className={styles.info}>
									<p className={styles.textMedium}>36 min</p>
									<p className={`${styles.price} ${styles.textMedium}`}>Free</p>
								</div >
							</div >
						</div >
						<div className={styles.card}>
							<div className={styles.image}>
								<img src="https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg" />
							</div>
							<div className={styles.content}>
								<p className={`${styles.title} ${styles.textMedium}`}>
									Array: Higher Order Functions | Mayk Brito
								</p>
								<div className={styles.info}>
									<p className={styles.textMedium}>54 min</p>
									<p className={`${styles.price} ${styles.textMedium}`}>Free</p>
								</div >
							</div >
						</div >
						<div className={styles.card}>
							<div className={styles.image}>
								<img src="https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg" />
							</div>
							<div className={styles.content}>
								<p className={`${styles.title} ${styles.textMedium}`}>
									O que é API? REST e RESTful? | Mayk Brito
								</p>
								<div className={styles.info}>
									<p className={styles.textMedium}>33 min</p>
									<p className={`${styles.price} ${styles.textMedium}`}>Free</p>
								</div >
							</div >
						</div >
						<div className={styles.card}>
							<div className={styles.image}>
								<img src="https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg" />
							</div>
							<div className={styles.content}>
								<p className={`${styles.title} ${styles.textMedium}`}>
									Desvendando a variável this no Javascript | Mayk Brito
								</p>
								<div className={styles.info}>
									<p className={styles.textMedium}>48 min</p>
									<p className={`${styles.price} ${styles.textMedium}`}>Free</p>
								</div >
							</div >
						</div >
						<div className={styles.card}>
							<div className={styles.image}>
								<img src="https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg" />
							</div>
							<div className={styles.content}>
								<p className={`${styles.title} ${styles.textMedium}`}>
									Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito
								</p>
								<div className={styles.info}>
									<p className={styles.textMedium}>33 min</p>
									<p className={`${styles.price} ${styles.textMedium}`}>Free</p>
								</div >
							</div >
						</div >
					</section >

				</main >



				<section className={styles.form}>
					<form action="">
						<h3>Quero Estudar na Rocket!</h3>
						<div className={styles.formGroup}>
							<input className={styles.inputControl} placeholder="Nome" />

							<input type="email" className={styles.inputControl} placeholder="Email" />
						</div>

						<div className={styles.formGroup}>
							<input className={styles.inputControl} placeholder="Empresa" />
						</div>

						<div className={styles.formGroup}>
							< input className={styles.inputControl} placeholder="Endereço" />
						</div>

						<div className={styles.formGroup}>
							< input className={styles.inputControl} placeholder="Cidade" />
							<input className={styles.inputControl} placeholder="Estado" />
							< input className={styles.inputControl} placeholder="CEP" />
						</div>

						<div className={styles.formGroup}>
							<button type="submit" className={styles.button}>Save</button>

						</div >

					</form >
				</section >

				<div className={styles.modalOverlay}>
					< div className={styles.modal}>
						<a className={styles.closeModal}>
							<svg viewBox="0 0 20 20">
								< path
									fill="#000000"
									d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
								></path >
							</svg >
						</a >
						<div className={styles.modalContent}>
							< div className={styles.VideoBackground}>
								<div className={styles.videoForeground}>
									<iframe
										src="https://www.youtube.com/embed/GykTLqODQuU"
										frameBorder="0"
										allowFullScreen
									></iframe>
								</div >
							</div >
						</div >
					</div >
				</div >
			</body >
		</div >
	)
}

export default Home
