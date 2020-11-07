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
        this.codFarmacia = pCodFarmacia;
        this.codMedicamento = pCodMedicamento;
        this.especialidade = pEspecialidade;
        this.valor = pValor;
        this.desconto = pDesconto;
        this.dataMapeamento = pDataMapeamento;
        this.observacao = pObservacao;
    }

}