<template>
        <nav>
            <a href="./index.html" class="logo">
                <img src="../assets/multiforme_logo.png" alt="logo">
            </a>
            <ul>
                <li><a href="#">La multi</a></li>
                <li><a href="#">Profes</a></li>
                <li><a href="#">Talleres</a></li>
                <li><a href="#">Libros</a></li>
                <li><a href="#">Iniciar sesión</a></li>
            </ul>
        </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav{
    position:absolute;
    top:0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;
    background: #5761b2;
}

nav img{
    width: 80px;
    height: auto;
}

nav ul{
    display: flex;
    justify-content: center;
    align-items: center;

}
nav ul li{
    list-style: none;
    display: inline-block;
    margin: 20px;
    position: relative;

}
nav ul li a{
    text-decoration:  none;
    padding: 6px 15px;
    color: #fff;
}

nav ul li a::after{
    content: '';
    height: 3px;
    width: 0;
    background: #ffa44e;
    position: absolute;
    left: 0;
    bottom: -10px;
    transition: 0.5s;
}
nav ul li a:hover::after{
    width: 100%;
}
</style>
