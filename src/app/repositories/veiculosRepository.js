const veiculosModel = require('../Models/veiculosModel');

class veiculosRepository {

    async create({ name, type, preco, }) {
        const createdVeiculos = await veiculosModel.create({
            name,
            type,
            preco,
        });
        return createdVeiculos;
    }

    async findById(id) {
        const Veiculos = await veiculosModel.findById(id);
        return Veiculos;
    }


    async findAll() {
        const Veiculos = await veiculosModel.find();
        return Veiculos;
    }



    async delete(id) {
        const Veiculos = await veiculosModel.findByIdAndDelete(id);
        return Veiculos;
    }



    async update(id, { name, type, preco, }) {
        try {
            const updatedVeiculo = await veiculosModel.findByIdAndUpdate(id, {
                name,
                type,
                preco,
            });
            return updatedVeiculo;
        } catch (error) {
            return response.status(400).json({ error: ' update nao realizado' });
        }
    }
}

module.exports = new veiculosRepository();
