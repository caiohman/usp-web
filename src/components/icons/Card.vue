<template>
    <div class="card">
        <div class="card-content">
            <h2>{{ graduando }}</h2>
            <p>Programa Curricular: {{ programaCurricular }}</p>
            <p>Curso: {{ curso }}</p>
            <p>Data da Defesa: {{ dataDefesa }}</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['graduando', 'programaCurricular', 'curso', 'dataDefesa']
  };
  </script>
  
  <style scoped>
  .card {
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 4px;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  </style>