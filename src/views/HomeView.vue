<template>

    <div class="container">
        <div class="image-container">
            <div class="container-dark-overlay"></div>
            <img :src="imagemUrl" alt="Descrição da imagem" />
            <div class="logo-overlay">
                <img :src="logoUrl" alt="Logo" />
            </div>
        </div>

        <v-card
            class="mx-auto"
            margin="16"
            variant="outlined">
            <v-card-item>
                <div>
                    <div class="text-overline mb-1">
                        SSC0961 - Desenvolvimento Web e Mobile
                    </div>
                    <div class="text-h6 mb-1">
                        Trabalho 1
                    </div>
                    <div class="profile-container">
                        <img class="profile-image" :src="caioUrl" alt="Descrição da imagem" />
                        <div>
                            <div class="text-caption">Caio Ohman Balthazar Gaudencio</div>
                            <div class="text-caption">10415227</div>
                        </div>
                    </div>
                    <div class="profile-container">
                        <img class="profile-image" :src="fellipeUrl" alt="Descrição da imagem" />
                        <div>
                            <div class="text-caption">Fellipe Tripovichy Andrade</div>
                            <div class="text-caption">9850332</div>
                        </div>
                    </div>
                </div>
            </v-card-item>
        </v-card>

        <div class="class-description">
            <div class="text-caption">Disciplina: SSC0961 - Desenvolvimento Web e Mobile</div>
            <div class="text-caption">Docente: Adenilso da Silva Simão</div>
            <div class="text-caption">Créditos aula: 2</div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
  return {
    imagemUrl: 'https://2.bp.blogspot.com/-Eye-HDXOIiU/WvBgjz-YbUI/AAAAAAAAJY8/CAPvYadqNwgxDPamgEklR9EpnuR-sYaBACLcBGAs/s1600/ICMC-6.jpg',
    logoUrl: 'https://www.icmc.usp.br/templates/icmc2015/img/logo.png',
    fellipeUrl: 'https://ca.slack-edge.com/T0342JUTV-U02BM54JG6M-8d3411a042f0-512',
    caioUrl: 'https://pps.whatsapp.net/v/t61.24694-24/223841648_1046827232572289_4591880074775105267_n.jpg?ccb=11-4&oh=01_AdRyZfWsPQlzoaVaCfCRNVtfpNz9h5P1y94mj94XWS5lKA&oe=648AE545'
  };
}
    };

</script>

<style scoped>

.container{
    margin-left: 16px;
    margin-right: 16px;
}

.profile-container{
    display: flex;
    align-items: center;
    margin-top: 16px;
}
.profile-image{
    width: 64px;
    margin-right: 16px;
    border-radius: 64px;
}

.class-description {
    padding: 32px
}
.class-description div{
    display: flex;
    justify-content: center;
}
.image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-dark-overlay{
    background-color: black;
}
.image-container img {
  position: relative;
  align-self: baseline;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.logo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 64px;
  margin-left: 64px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
}

.logo-overlay img {
  max-width: 200px; /* Defina o tamanho desejado para o logo */
  max-height: 200px; /* Defina o tamanho desejado para o logo */
}

</style>
