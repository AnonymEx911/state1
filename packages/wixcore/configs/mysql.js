module.exports = {
    connect: ['127.0.0.1', 3306, 'staterp', 'root', 'password'],
    logging: false,
    pool: [50, 0, 30000, 10000],
    timeout: 15000,
    stamps: false
}