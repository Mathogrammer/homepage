export const getLocaleWithTerritory = (locale: string) => {
    switch (locale) {
        case 'de':
            return 'de_DE';

        case 'en':
        case 'pseudo':
            return 'en_GB';
            
        default:
            return 'de_DE';
    }
};