class UsersController {
    async create(request, response) {
        return response.status(200).json({ mensage: "Olááááá" });
    }
}

module.exports = UsersController;