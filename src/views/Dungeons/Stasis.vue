<template>
  <v-container>
    <page-title>Stasis</page-title>
    <p class="body-1">
      Os calabouços possuem mecânica de dificuldade que é chamada de Stasis. Existem 50 níveis de dificuldade, divididos
      em 5 faixas de nível:
    </p>

    <ul class="mb-4">
      <li>Rápido (1-10)</li>
      <li>Normal (11-20)</li>
      <li>Difícil (21-30)</li>
      <li>Especialista (31-40)</li>
      <li>Mestre (41-50)</li>
    </ul>

    <p class="body-1">
      Outro fator que pode aumentar a dificuldade (e consequentemente as recompensas) é o modo competitivo. Aumentar a
      dificuldade de um calabouço aumenta a experiência e as recompensas de cada combate. Alguns itens só podem ser
      obtidos após certo nível de Stasis. Itens lendários, épicos e relíquias só podem ser obtidos acima de S21. Outro
      detalhe, quanto maior a Stasis mais chances de aparecerem Mímikos durante as lutas.
    </p>

    <p class="body-1">
      Stasis menores que 11 diminuem a dificuldade dos monstros, e como consequencia, aplica penalidades na experiência
      e nos drops. Esses são os modificadores de PV e danos dos monstros:
    </p>

    <div class="d-flex justify-center">
      <v-simple-table dense class="text-center">
        <template #default>
          <thead>
            <tr>
              <th>Stasis</th>
              <th>Nomal</th>
              <th>Competitivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><v-chip color="secondary" label small style="width: 46px" class="justify-center">S1</v-chip></td>
              <td>60%</td>
              <td>60%</td>
            </tr>
            <tr>
              <td><v-chip color="secondary" label small style="width: 46px" class="justify-center">S11</v-chip></td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td><v-chip color="secondary" label small style="width: 46px" class="justify-center">S21</v-chip></td>
              <td>139%</td>
              <td>142%</td>
            </tr>
            <tr>
              <td><v-chip color="secondary" label small style="width: 46px" class="justify-center">S31</v-chip></td>
              <td>168%</td>
              <td>262%</td>
            </tr>
            <tr>
              <td><v-chip color="secondary" label small style="width: 46px" class="justify-center">S41</v-chip></td>
              <td>188%</td>
              <td>432%</td>
            </tr>
            <tr>
              <td><v-chip color="secondary" label small style="width: 46px" class="justify-center">S50</v-chip></td>
              <td>206%</td>
              <td>603%</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <h2 class="text-h5 mt-6 mb-2">Arquétipos</h2>

    <p class="body-1">
      Arquétipos são modificadores de combate que compensam as fraquezas do chefe do calabouço e também servem para
      limitar as estratégias que podem se tornar muito fortes em Stasis mais altos.
    </p>

    <p class="body-1">
      Todos os chefes de calabouço recebem um arquétipo, que estará ativo em combate a partir da Stasis 11. Existem 5
      arquétipos clássicos:
    </p>

    <v-row class="mb-4 mt-1">
      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="px-2 mb-1 pt-2 fill-height">
          <img :src="`${$baseURL}/states/5595.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Arquétipo - Invocador</h3>
          <p class="body-2">
            A cada 3 turnos a partir do 4º turno:<br />
            - Por monstro morto (salvo invocação): 5% de danos infligidos (infinito)<br />
            - Se o chefe tiver sofrido uma perda de PM: +1 PM (infinito)<br />
            - Se o chefe estiver com mais de 75% dos PV: 50% de danos infligidos (1 turno)<br />
            <br />
            A cada 6 turnos a partir do 7º turno:<br />
            - Destrói as invocações e mecanismos de bloqueio próximos ao chefe (CÍRCULO 5) se houver 3 ou mais
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="px-2 pt-2 fill-height">
          <img :src="`${$baseURL}/states/5596.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Arquétipo - Distância</h3>
          <p class="body-2">
            A cada 3 turnos a partir do 4º turno:<br />
            - Por jogador a menos de 4 células de distância do chefe: 15% de danos infligidos (infinito)<br />
            - Se o chefe tiver sofrido uma perda de alcance: +1 de AL (infinito)<br />
            - Se o chefe estiver com mais de 75% dos PV: 50% de danos infligidos (1 turno)<br />
            - Não pode ser bloqueado (1 turno)<br />
            <br />
            A cada 6 turnos a partir do 7º turno:<br />
            - Destrói as invocações e mecanismos de bloqueio próximos ao chefe (CÍRCULO 5) se houver 3 ou mais
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="px-2 pt-2 fill-height">
          <img :src="`${$baseURL}/states/5597.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Arquétipo - Corpo a Corpo</h3>
          <p class="body-2">
            A cada 3 turnos a partir do 4º turno:<br />
            - Por jogador a mais de 6 células de distância do chefe: 10% de danos infligidos (infinito)<br />
            - Se o chefe tiver sofrido uma perda de PM: +1 PM (infinito)<br />
            - Se o chefe estiver com mais de 75% dos PV: 50% de danos infligidos (1 turno)<br />
            <br />
            A cada 6 turnos a partir do 7º turno:<br />
            - Destrói as invocações e mecanismos de bloqueio próximos ao chefe (CÍRCULO 5) se houver 3 ou mais
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="px-2 pt-2 fill-height">
          <img :src="`${$baseURL}/states/5598.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Arquétipo - Berserker</h3>
          <p class="body-2">
            A cada 3 turnos a partir do 4º turno:<br />
            - Por monstro vivo (salvo invocação): 10% de danos infligidos (infinito)<br />
            - Se o chefe tiver sofrido uma perda de alcance: +1 de AL (infinito)<br />
            - Se o chefe estiver com mais de 75% dos PV: 50% de danos infligidos (1 turno)<br />
            <br />
            A cada 6 turnos a partir do 7º turno:<br />
            - Destrói as invocações e mecanismos de bloqueio próximos ao chefe (CÍRCULO 5) se houver 3 ou mais
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="px-2 pt-2">
          <img :src="`${$baseURL}/states/5599.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Arquétipo - Tank</h3>
          <p class="body-2">
            A cada 3 turnos a partir do 4º turno:<br />
            - Por % de PV retirados do chefe: 0,5% de danos infligidos (infinito)<br />
            - Se o chefe tiver sofrido uma perda de alcance: +1 de AL (infinito)<br />
            - Se o chefe tiver sofrido uma perda de PM: +1 PM (infinito)<br />
            <br />
            A cada 6 turnos a partir do 7º turno:<br />
            - Destrói as invocações e mecanismos de bloqueio próximos ao chefe (CÍRCULO 5) se houver 3 ou mais
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="px-2 pt-2 fill-height">
          <img :src="`${$baseURL}/states/5619.png`" alt="" @error="$event.target.src = `${$baseURL}/states/798.png`" />
          <h3 class="body-1 font-weight-medium">Arquétipo - Chefe Supremo</h3>
          <p class="body-2">
            A cada 3 turnos a partir do 4º turno:<br />
            - Se o chefe tiver sofrido uma perda de alcance: +1 AL (infinito)<br />
            - Se o chefe tiver sofrido uma perda de PM: +1 PM (infinito)<br />
            <br />
            A cada 6 turnos a partir do 7º turno:<br />
            - Destrói as invocações e mecanismos de bloqueio próximos ao chefe (CÍRCULO 5) se houver 3 ou mais
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-alert color="info" border="left" text dense>
      Os chefes supremos (UB's) possuem uma dificuldade mínima de Stasis S11. Também possuem um Arquétipo específico,
      que é igual para todos os chefes supremos.
    </v-alert>

    <h2 class="text-h5 mt-6 mb-2">Modificador de Combate</h2>

    <p class="body-1">
      Modificadores de combate (ou Afixos) são ativados com Stasis 11+. Eles favorecem os jogadores que conseguirem
      ativá-los. Os monstros são afetados por eles somente nas primeiras salas (mas não na sala do chefe).
    </p>

    <v-list three-line class="mb-4">
      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5492.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Vórtex</v-list-item-title>
          <p class="body-2 mb-0">
            No começo da rodada: Coloca Vórtex em torno de 2 monstros aleatoriamente. <br />
            Quando um jogador pisa em um Vórtex (uma vez por turno): Teleporta-o para o outro Vórtex e +50% de dano
            infligido (1 turno).
          </p>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5499.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Abstração</v-list-item-title>
          <p class="body-2 mb-0">
            No começo do turno de cada jogador: Coloca uma Abstração (25% de danos de alvo único infligidos, 2 turnos)
            em torno de 1 monstro aleatoriamente a uma distância de 6 célula(s) ou mais.
          </p>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5501.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Agitação</v-list-item-title>
          <p class="body-2 mb-0">
            No começo do turno de cada jogador: Coloca Agitação (25% de danos de corpo a corpo infligidos, 2 turnos) em
            torno de 1 jogador(es) aleatoriamente a uma distância de 6 célula(s) ou mais.
          </p>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5504.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Congelamento</v-list-item-title>
          <p class="body-2 mb-0">
            No começo da rodada: Aplica Congelamento em 1 monstro aleatoriamente.<br />
            Se o portador terminar seu turno na mesma célula em que tiver começado: +100 de Resistência Elemental pra
            todos os jogadores (1 turno).
          </p>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5507.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Vingativo</v-list-item-title>
          <p class="body-2 mb-0">
            No começo da rodada: Aplica Vingativo em 1 monstro aleatoriamente.<br />
            Se o portador não infligir danos durante seu turno: +20% de dano infligido pra todos os jogadores (1 turno).
          </p>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5510.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Derrota</v-list-item-title>
          <p class="body-2 mb-0">
            No começo da rodada: Aplica 'Derrota - Lateral', 'Derrota - Frente' ou 'Derrota - Costas' em 2 monstros
            aleatoriamente.<br />
            +15% de danos recebidos pelo portador do estado na respectiva orientação.
          </p>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5520.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Ricochete</v-list-item-title>
          <p class="body-2 mb-0">
            No começo da rodada: Aplica Ricochete em 1 monstro aleatoriamente.<br />
            Se o portador sofrer uma colisão: +1 MP pra todos os jogadores (1 turno).
          </p>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5544.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Servidão</v-list-item-title>
          <p class="body-2 mb-0">
            No começo da rodada: Aplica Servidão em 1 monstro aleatoriamente.<br />
            Se o portador sofrer uma retirada de PA ou PM: +10 de Vontade nos monstros em torno (CÍRCULO 2).
          </p>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5547.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Cordão</v-list-item-title>
          <p class="body-2 mb-0">
            No começo da rodada: Aplica Cordão em 1 monstro aleatoriamente.<br />
            No fim do turno do portador: -100 de Resistência Elemental nos monstros alinhados com ele (1 turno).
          </p>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5550.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Rancor</v-list-item-title>
          <p class="body-2 mb-0">
            Quando o portador fica abaixo de 50% de PV máximos: -20 Resistência Elemental (infinito) nos monstros ao
            redor (CÍRCULO 2).<br /><br />
          </p>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-list-item-avatar tile>
          <img :src="`${$baseURL}/states/5552.png`" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Afixo - Combustão</v-list-item-title>
          <p class="body-2 mb-0">
            No começo da rodada: Aplica Combustão em 1 monstro aleatoriamente.<br />
            Se o portador for nocauteado: Cura 100% do jogador que nocauteia.
          </p>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import PageTitle from '@/components/layout/page-title';

export default {
  name: 'StasisInfo',
  components: { PageTitle }
};
</script>
