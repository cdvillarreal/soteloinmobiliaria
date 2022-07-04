import { Button, Col, Row } from 'react-bootstrap';

const AboutPage = () => {
	return (
		<>
			<h1>Nosotros</h1>
			<p>
				Somos una una inmobiliaria ubicada en la ciudad de Villa Carlos Paz. Relativamente nuevos en
				el sector, estamos ampliamente calificados para brindar una eficiente gestión inmobiliaria a
				propietarios, compradores e inquilinos, de manera personalizada y acompañándolos durante el
				transcurso de toda la negociación.
			</p>
			<p>
				Las operaciones inmobiliarias significan decisiones importantes, implicando muchas veces un
				cambio de vida, emprendimientos, proyectos de familia y laborales. Compromiso, capacidad,
				proactividad y una conducta ética caracterizan la actuación de Cynthia Sotelo Negocios
				Inmobiliarios, cuyo principal objetivo es brindar al cliente asesoramiento y atención
				personalizada desde el comienzo hasta el cierre de la operación.
			</p>
			<Row>
				<Col>
					<img src='../../assets/mission.png' alt='Misión' className='imgMission' />
					<h3>Misión</h3>
					<p>
						Acompañar a nuestros clientes y asesorar en la decisión más adecuada a sus operaciones
						inmobiliarias. Facilitando la compra, venta, alquiler o proyecto inmobiliario al mejor
						precio del mercado, protegiendo legalmente el patrimonio de todas las partes con
						transparencia y credulidad.
					</p>
				</Col>
				<Col>
					<img src='../../assets/vision.png' alt='Visión' className='imgVision' />
					<h3>Misión</h3>
					<p>
						Convertirnos en una alternativa diferente dentro del sector. Ofreciendo servicios
						fundados sobre la base de la confianza, el trabajo y seriedad.
					</p>
				</Col>
				<Col>
					<img src='../../assets/values.png' alt='Valores' className='imgValues' />
					<h3>Valores</h3>
					<p>Transparencia Ética</p>
					<p>Honestidad Profesionalidad</p>
					<p>Eficiencia</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<img src='../../assets/cynthia.jpg' alt='Cynthia Sotelo' className='imgRealtor' />
					<h3>Cynthia Sotelo</h3>
					<p>Corredora Inmobiliaria</p>
					<p>CPI: 6377</p>
				</Col>
			</Row>
			<h2>Encuentre su propiedad</h2>
			<Button className='btn btn-primary'>Buscar propiedad</Button>
		</>
	);
};
export default AboutPage;
