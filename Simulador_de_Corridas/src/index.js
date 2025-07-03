const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const player3 = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const player4 = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player5 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player6 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}
async function playRaceEgine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habiblidade
    let totaltestSkill1 = 0;
    let totaltestSkill2 = 0;

    if (block == "RETA") {
      totaltestSkill1 = diceResult1 + character1.VELOCIDADE;
      totaltestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );
      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    if (block == "CURVA") {
      totaltestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totaltestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );
      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }
    if (block == "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME} 🥊`);

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );
      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2) {
        if (character2.PONTOS > 0) {
          character2.PONTOS--;
        }
      }

      if (powerResult1 < powerResult2) {
        if (character2.PONTOS > 0) {
          character2.PONTOS--;
        }
      }

      if (powerResult1 === powerResult2) {
        console.log(`Confronto empatado Nenhum ponto foi perdido`);
      }
    }

    // verificando o vencedor
    if (totaltestSkill1 > totaltestSkill2) {
      console.log(`${character1.NOME} marcou um ponto`);
      character1.PONTOS++;
    } else if (totaltestSkill1 < totaltestSkill2) {
      console.log(`${character2.NOME} marcou um ponto`);
      character2.PONTOS++;
    }
    console.log(`-----------------------------------------------`);
  }
}

async function declareWinner(character1, character2) {
  console.log(`Resultado final:`);
  console.log(`${character1.NOME}:${character1.PONTOS}: pontos `);
  console.log(`${character2.NOME}:${character2.PONTOS}: pontos `);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`${character1.NOME} venceu a corrida! Parabéns!`);
  else if (character1.PONTOS < character2.PONTOS)
    console.log(`${character2.NOME} venceu a corrida! Parabéns!`);
  else console.log(`A corrida terminou em empate!`);
}

(async function main() {
  console.log(
    `🏁🚨Corrida entre ${player1.NOME} e ${player2.NOME} começando ... \n`
  );

  await playRaceEgine(player1, player2);
  await declareWinner(player1, player2);
})();
