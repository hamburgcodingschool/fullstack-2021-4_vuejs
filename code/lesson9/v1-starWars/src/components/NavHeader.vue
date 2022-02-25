<template>
    <nav>
        <ul>
            <li><RouterLink to="/">Movies</RouterLink></li>
            <li><RouterLink to="/characters">Characters</RouterLink></li>
            <li><RouterLink to="/planets">Planets</RouterLink></li>
            <li><RouterLink to="/spaceships">Spaceships</RouterLink></li>
        </ul>
    </nav>
</template>

<style scoped>
ul {
    display: flex;
    gap: 20px;
    
    list-style-type: none;
    padding: 20px 0;

    background-color: lightblue;
}

a {
    padding: 5px;
    color: blue;
    text-decoration: none;
}

.router-link-exact-active {
    border-bottom: solid 2px blue;
}

a:hover {
    border-bottom: solid 2px blue;
}

</style>