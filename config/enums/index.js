'use strict'

const ENUMS = {
    hierarchy: {
        admin: 3,
        client: 1,
        user: 2,
    },
    status: {
        actived: {
            text: 'Ativo',
            id: 2,
        },
        canceled: {
            text: 'Cancelado',
            id: 6,
        },
        expired: {
            text: 'Expirado',
            id: 7,
        },
        pending: {
            text: 'Pendente',
            id: 1,
        },
    },
}

module.exports = ENUMS