export class mapeamento{
    private codFarmacia :number;
    private codMedicamento :number;
    private especialidade :number;
    private valor :number;
    private desconto :string;
    private dataMapeamento :Date;
    private observacao :string;

    constructor(pCodFarmacia :number, pCodMedicamento :number, pEspecialidade :number, pValor :number,
                pDesconto :string, pDataMapeamento :Date, pObservacao :string){
        pCodFarmacia = this.codFarmacia;
        pCodMedicamento = this.codMedicamento;
        pEspecialidade = this.especialidade;
        pValor = this.valor;
        pDesconto = this.desconto;
        pDataMapeamento = this.dataMapeamento;
        pObservacao = this.observacao;
    }

}