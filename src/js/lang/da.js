module.exports = {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'mio',
        billion: 'mia',
        trillion: 'b'
    },
    ordinal: function (number) {
        return '.';
    },
    currency: {
        symbol: 'DKK'
    }
};