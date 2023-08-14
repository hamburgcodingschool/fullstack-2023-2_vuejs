<template>
    <header>
        <h1>The Logo</h1>
        <nav>
            <ul>
                <li><a href="#">Homepage</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: white;
    padding: 10px;
}

nav ul {
    display: flex;
    gap: 20px;
}

nav li {
    display: inline-block;
}

nav a {
    text-decoration: none;
    color: black
}

nav a:hover {
    text-decoration: underline;
}
</style>