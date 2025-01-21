// Classe Abstrata CartaoWeb
class CartaoWeb {
  constructor(destinatario) {
    if (new.target === CartaoWeb) {
      throw new TypeError(
        "Não é possível construir instâncias de CartaoWeb diretamente"
      );
    }
    this.destinatario = destinatario;
  }

  showMessage() {
    throw new Error("Deve ser sobrescrito!");
  }
}

// Classe DiaDosNamorados
class DiaDosNamorados extends CartaoWeb {
  constructor(destinatario) {
    super(destinatario);
  }

  showMessage() {
    console.log(
      `Querido(a) ${this.destinatario}, Feliz Dia dos Namorados! Te amo muito!`
    );
  }
}

// Classe Natal
class Natal extends CartaoWeb {
  constructor(destinatario) {
    super(destinatario);
  }

  showMessage() {
    console.log(
      `Querido(a) ${this.destinatario}, Feliz Natal! Que seu dia seja cheio de alegria e paz!`
    );
  }
}

// Classe Aniversario
class Aniversario extends CartaoWeb {
  constructor(destinatario) {
    super(destinatario);
  }

  showMessage() {
    console.log(
      `Querido(a) ${this.destinatario}, Feliz Aniversário! Muitas felicidades e muitos anos de vida!`
    );
  }
}

// Criação de Instâncias e Chamadas aos Métodos showMessage
const diaDosNamorados = new DiaDosNamorados("Erika");
const natal = new Natal("Felipe");
const aniversario = new Aniversario("Ana");

diaDosNamorados.showMessage();
natal.showMessage();
aniversario.showMessage();
