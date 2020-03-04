<template>
  <div class="cart">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="rule"
              :counter="10"
              label="Primeiro Nome"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="rule"
              :counter="10"
              label="Sobrenome"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="cep" :rules="rule" :counter="10" label="CEP" required />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="endereco" :rules="rule" :counter="10" label="Endereço" required />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="cidade" :rules="rule" :counter="10" label="Cidade" required />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="estado" :rules="rule" :counter="10" label="Estado" required />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-switch v-model="isPagoEntrega" class="my-2" label="Pago na entrega" />
          </v-col>
          <v-col cols="12">
            <v-radio-group v-model="radioGroup" mandatory>
              <v-radio label="Manhã" value="manha" />
              <v-radio label="Tarde" value="tarde" />
              <v-radio label="Noite" value="noite" />
            </v-radio-group>
          </v-col>
          <v-col cols="12" align="center">
            <v-btn :loading="!valid" rounded color="primary" dark>Finalizar pedido</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="4"
            v-for="item in funcoes"
            :key="item.nome"
          >{{item.nome}}: {{item.func}}</v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPagoEntrega: true,
      radioGroup: "tarde",
      firstname: "",
      lastname: "",
      cep: "",
      endereco: "",
      cidade: "",
      estado: "",
      valid: false,
      rule: [
        v => !!v || "Required field",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      funcoes: [
        {
          nome: "Pago na entrega",
          func: this.getIsPagoEntrega
        },
        {
          nome: "Turno de entrega",
          func: this.radioGroup
        },
        {
          nome: "Primeiro nome",
          func: this.getFistName
        },
        {
          nome: "Sobrenome",
          func: this.getLastName
        },
        {
          nome: "CEP",
          func: this.getCep
        },
        {
          nome: "Endereço",
          func: this.getEndereco
        },
        {
          nome: "Cidade",
          func: this.getCidade
        },
        {
          nome: "Estado",
          func: this.getEstado
        }
      ]
    };
  },
  computed: {
    getIsPagoEntrega: function() {
      console.log(this)
      return this.isPagoEntrega;
    },

    getRadioGroup: function() {
      return this.radioGroup;
    },

    getFistName: function() {
      return this.firstname;
    },

    getLastName: function() {
      return this.lastname;
    },

    getCep: function() {
      return this.cep;
    },

    getEndereco: function() {
      return this.endereco;
    },

    getCidade: function() {
      return this.cidade;
    },

    getEstado: function() {
      return this.estado;
    }
  }
};
</script>