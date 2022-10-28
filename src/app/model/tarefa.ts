export class Tarefa {

    id : number;
    descricao : string;
    prioridade : number;
    dataLimite : string;
    concluida : boolean;

    constructor() {}

    prioridadeStr() {
        switch (this.prioridade) {
            case 0: return "Baixa";
            case 1: return "Média";
            case 2: return "Alta";
            default: return "";
        }
    }

}
