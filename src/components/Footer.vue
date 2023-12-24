<template>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>Redes sociales y contacto</h4>
                        <ul>
                            <li><a href="https://www.instagram.com/lamultiforme/"><i class="fab fa-instagram"> lamultiforme</i></a></li>
                            <li><a href="https://wa.me/5491126825124"><i class="fa-brands fa-whatsapp"></i> +54 9 11 2682-5124</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Dónde nos encontramos</h4>
                        <ul>
                            <li><a href="https://maps.app.goo.gl/xB7zxABXvBV2H8wE8">Ver mapa (Sgto. Baigorria 2433, Munro)</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Nuestro espacio</h4>
                        <ul><!--usar routerlink-->
                            <li><router-link to="/aviso-legal">Aviso legal</router-link></li>
                            <li><router-link to="/cancelar-suscripcion">Cancelar suscripción</router-link></li>
                            <li><router-link to="/politicas-de-privacidad">Politica de privacidad</router-link></li>
                            <li><router-link to="/terminos-y-condiciones">Términos y condiciones</router-link></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Creado por</h4>
                        <div class="social-links">
                            <a href="https://www.linkedin.com/in/ignacio-daniel-garc%C3%ADa-lasivita/"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/ignacioDanGarcia"><i class="fab fa-github"></i></a>
                        </div>
                        <ul><li><a href="#"><i class="fa-regular fa-copyright"></i> ignacioDanGarcia</a></li></ul>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.container{
	max-width: 1500px;
	margin:auto;
}
.row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
}
.footer{
	background-color: #5761b2;
    padding: 70px 0;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 18px;
	color: #fff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #fff;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	text-decoration: none;
	font-weight: 300;
	color: #ffa44e;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #fff;
	padding-left: 8px;
}
.footer-col .social-links{
    padding-left: 25px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: #ffa44e;
	margin:0 10px 10px 0;
    text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #fff;
	transition: all 0.5s ease;
    
}
.footer-col .social-links a i {
    top: 50%;
    left: 50%;
    transform: translate(0%, 0%);
}
.footer-col .social-links a:hover{
	color: #ffa44e;
	background-color: #fff;
}
@media(max-width: 767px){
    .footer-col{
      width: 50%;
      margin-bottom: 30px;
  }
  }
  @media(max-width: 574px){
    .footer-col{
      width: 100%;
  }
  }
</style>
