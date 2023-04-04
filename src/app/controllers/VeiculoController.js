const veiculosRepository = require('../repositories/veiculosRepository');

class VeiculoController {
    async index(request, response) {
        const veiculos = await veiculosRepository.findAll();

        if (veiculos.length === 0) {

            return response.status(404).json({ error: 'nao encontramos veiculos' });
        }

        response.json(veiculos);
    }

    async show(request, response) {
        try {
            const { id } = request.params;
            const Veiculos = await veiculosRepository.findById(id);

            if (!Veiculos) {
                return response.status(404).json({ error: 'Veiculo não encontrado' });
            }

            response.json(Veiculos);

        } catch (error) {

            return response.status(400).json({ error: 'Id inválido' });
        }
    }

    async store(request, response) {
        const { name, type, preco } = request.body;

        if (!name || !type || !preco) {

            return response.status(400).json({ error: "preencha todos os dados" })
        }

        const Veiculo = await veiculosRepository.create({
            name,
            type,
            preco,
        });

        response.json(Veiculo);
    }

    async update(request, response) {
        const { id } = request.params;
        const { name, type, preco } = request.body;
        const existveiculo = await veiculosRepository.findById(id);

        if (!existveiculo) {
            return response.status(404).json({ error: "Não existe veiculo com esse id cadastrado" });
        }

        if (!name || !type || !preco) {
            return response.status(400).json({ error: "os dados precisam ser preenchidos ou válidos" });
        }

        const Veiculo = await VeiculosRepository.update(id, {
            name,
            type,
            preco
        });

        response.status(200).json({ message: "veiculo atualizado com sucesso!" });
    }

    async delete(request, response) {
        try {
            const { id } = request.params;
            const Veiculo = await VeiculosRepository.findById(id);

            if (!Veiculo) {
                return response.status(403).json({ error: "veiculonão encontrado" });
            }

            const DeleteVeiculo = await veiculosRepository.delete(id);

            return response.status(200).json({ message: "veiculo deletado com sucesso!" });

        } catch (error) {

            return response.status(400).json({ error: 'Não foi possivel deletar' });
        }
    }
}

module.exports = new VeiculoController();
