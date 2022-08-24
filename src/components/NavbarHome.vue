<template>
<nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="../assets/yawlogo.png" width="30px;" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">Entrar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register" tabindex="-1" aria-disabled="true">Cadastrar</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Negócio</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li><a class="dropdown-item" href="/servicer/login">Entrar</a></li>
              <li><a class="dropdown-item" href="/servicer/register">Registrar</a></li>
              <li><a class="dropdown-item" href="#">Informações</a></li>
            </ul>
          </li>
        </ul>
        <form>
          <input class=" d-none form-control" type="text" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
    
 }
</script>

<style scoped>
    
a {
    color: #bea562;
}
    
</style>