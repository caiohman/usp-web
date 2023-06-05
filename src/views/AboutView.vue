<template>
    <div>
      <div class="controls">
        <div class="search-name">
          <label class="label" for="filtro-nome">Nome do Aluno</label>
          <input class="input" type="text" id="filtro-nome" v-model="filtroNome" />
        </div>
  
        <div class="program-filter">
          <label class="label">Tipo de Programa</label>
          <input type="radio" v-model="filtroPrograma" value="Todos" /> Todos
          <input type="radio" v-model="filtroPrograma" value="CCMC" /> CCMC
          <input type="radio" v-model="filtroPrograma" value="MECAI" /> MECAI
          <input type="radio" v-model="filtroPrograma" value="PIPGEs" /> PIPGEs
          <input type="radio" v-model="filtroPrograma" value="MAT" /> MAT  
          <input type="radio" v-model="filtroPrograma" value="PROFMAT" /> PROFMAT
          <input type="radio" v-model="filtroPrograma" value="MECAI" /> MECAI
        </div>
  
        <div class="course-filter">
          <label class="label">Tipo de Curso</label>
          <input type="radio" v-model="filtroCurso" value="Todos" /> Todos
          <input type="radio" v-model="filtroCurso" value="ME" /> ME
          <input type="radio" v-model="filtroCurso" value="DO" /> DO
        </div>
  
        <div class="select-wrapper">
          <label class="label" for="ordenacao">Ordenar por</label>
          <select class="input-select" id="ordenacao" v-model="ordenacao">
            <option value="">Nenhum</option>
            <option value="ano">Ano</option>
            <option value="curso">Curso</option>
            <option value="nome">Nome</option>
            <option value="programa">Programa</option>
          </select>
        </div>
      </div>
  
      <div class="list">
        <card
          v-for="defesa in defesasOrdenadas"
          :key="defesa.Ordem"
          :graduando="defesa.Nome"
          :programaCurricular="defesa.Programa"
          :curso="defesa.Curso"
          :dataDefesa="defesa.Data"
        ></card>
      </div>
    </div>
  </template>
  
  <script>
  import Card from '../components/icons/Card.vue';
  
  export default {
    components: {
      Card
    },
    data() {
      return {
        defesas: [],
        filtroNome: '',
        ordenacao: '',
        filtroPrograma: '',
        filtroCurso: ''
      };
    },
    computed: {
      defesasFiltradas() {
        const nomeFiltrado = this.filtroNome.toLowerCase().trim();
        return this.defesas.filter(defesa => {
          const nomeIncluiFiltro = defesa.Nome.toLowerCase().includes(nomeFiltrado);
          const programaCorrespondeFiltro = this.filtroPrograma === 'Todos' || defesa.Programa === this.filtroPrograma;
          const cursoCorrespondeFiltro = this.filtroCurso === 'Todos' || defesa.Curso === this.filtroCurso;
          return nomeIncluiFiltro && programaCorrespondeFiltro && cursoCorrespondeFiltro;
        });
      },
      defesasOrdenadas() {
        let defesas = [...this.defesasFiltradas]; // Cria uma cópia do array para não modificar o original
        if (this.ordenacao === 'ano') {
          defesas.sort((a, b) => a.Data.localeCompare(b.Data));
        } else if (this.ordenacao === 'curso') {
          defesas.sort((a, b) => a.Curso.localeCompare(b.Curso));
        } else if (this.ordenacao === 'nome') {
          defesas.sort((a, b) => a.Nome.localeCompare(b.Nome));
        } else if (this.ordenacao === 'programa') {
          defesas.sort((a, b) => a.Programa.localeCompare(b.Programa));
        }
        return defesas;
      }
    },
    mounted() {
      this.loadAPIdata();
    },
    methods: {
      async loadAPIdata() {
        try {
          const response = await fetch('http://thanos.icmc.usp.br:4567/api/v1/defesas');
          if (!response.ok) {
            throw new Error('Erro ao carregar os dados da API');
          }
          const data = await response.json();
          this.defesas = data.items;
        } catch (error) {
          console.log('Erro ao carregar os dados da API:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .controls {
    background-color: #f1f1f1;
    padding: 16px;
    border-radius: 0 0 8px 8px;
    margin-left: 16px;
    margin-right: 16px;
  }
  .list {
    padding: 16px;
  }
  .input {
    background-color: #ffffff;
    border-radius: 2px;
  }
  .input-select {
    background-color: #ffffff;
    border-radius: 2px;
  }
  .label {
    padding-right: 8px;
    font-weight: 700;
  }
  .search-name {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .program-filter {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .course-filter {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  
  .select-wrapper {
    position: relative;
    border-radius: 2px;
  }
  
  .select-wrapper i {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }
  </style>