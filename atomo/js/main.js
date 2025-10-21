import Alpine from 'alpinejs';
import { DateTime } from 'luxon';

Alpine.data('atomo', (elements = []) => ({
    
    elements: elements,

    get date() {
        if (this.elements.length !== 4) return "Invalid input!";
        if (this.elements.some(value => value === 0)) return "Please pick a date";

        const [day, month, yearFirst2, yearLast2] = this.elements;
        const year = yearFirst2 * 100 + yearLast2;
        const dt = DateTime.fromObject({ year, month, day });

        if (!dt.isValid) return "Invalid date!";
        return dt.toFormat("dd LLL yyyy");
    }

}));

Alpine.data('atomoElement', (id) => ({

    id: id,

    get element() {
        return Alpine.store('elements').get(this.id);
    }

}));

Alpine.store('elements', {
    all: [
        { number: 0, name: "[Select]", symbol: "", type: "none" },
        { number: 1, name: "Hydrogen", symbol: "H", type: "nonmetal" },
        { number: 2, name: "Helium", symbol: "He", type: "noble-gas" },
        { number: 3, name: "Lithium", symbol: "Li", type: "alkali-metal" },
        { number: 4, name: "Beryllium", symbol: "Be", type: "alkaline-earth-metal" },
        { number: 5, name: "Boron", symbol: "B", type: "metalloid" },
        { number: 6, name: "Carbon", symbol: "C", type: "nonmetal" },
        { number: 7, name: "Nitrogen", symbol: "N", type: "nonmetal" },
        { number: 8, name: "Oxygen", symbol: "O", type: "nonmetal" },
        { number: 9, name: "Fluorine", symbol: "F", type: "halogen" },
        { number: 10, name: "Neon", symbol: "Ne", type: "noble-gas" },
        { number: 11, name: "Sodium", symbol: "Na", type: "alkali-metal" },
        { number: 12, name: "Magnesium", symbol: "Mg", type: "alkaline-earth-metal" },
        { number: 13, name: "Aluminum", symbol: "Al", type: "metal" },
        { number: 14, name: "Silicon", symbol: "Si", type: "metalloid" },
        { number: 15, name: "Phosphorus", symbol: "P", type: "nonmetal" },
        { number: 16, name: "Sulfur", symbol: "S", type: "nonmetal" },
        { number: 17, name: "Chlorine", symbol: "Cl", type: "halogen" },
        { number: 18, name: "Argon", symbol: "Ar", type: "noble-gas" },
        { number: 19, name: "Potassium", symbol: "K", type: "alkali-metal" },
        { number: 20, name: "Calcium", symbol: "Ca", type: "alkaline-earth-metal" },
        { number: 21, name: "Scandium", symbol: "Sc", type: "transition-metal" },
        { number: 22, name: "Titanium", symbol: "Ti", type: "transition-metal" },
        { number: 23, name: "Vanadium", symbol: "V", type: "transition-metal" },
        { number: 24, name: "Chromium", symbol: "Cr", type: "transition-metal" },
        { number: 25, name: "Manganese", symbol: "Mn", type: "transition-metal" },
        { number: 26, name: "Iron", symbol: "Fe", type: "transition-metal" },
        { number: 27, name: "Cobalt", symbol: "Co", type: "transition-metal" },
        { number: 28, name: "Nickel", symbol: "Ni", type: "transition-metal" },
        { number: 29, name: "Copper", symbol: "Cu", type: "transition-metal" },
        { number: 30, name: "Zinc", symbol: "Zn", type: "transition-metal" },
        { number: 31, name: "Gallium", symbol: "Ga", type: "metal" },
        { number: 32, name: "Germanium", symbol: "Ge", type: "metalloid" },
        { number: 33, name: "Arsenic", symbol: "As", type: "metalloid" },
        { number: 34, name: "Selenium", symbol: "Se", type: "nonmetal" },
        { number: 35, name: "Bromine", symbol: "Br", type: "halogen" },
        { number: 36, name: "Krypton", symbol: "Kr", type: "noble-gas" },
        { number: 37, name: "Rubidium", symbol: "Rb", type: "alkali-metal" },
        { number: 38, name: "Strontium", symbol: "Sr", type: "alkaline-earth-metal" },
        { number: 39, name: "Yttrium", symbol: "Y", type: "transition-metal" },
        { number: 40, name: "Zirconium", symbol: "Zr", type: "transition-metal" },
        { number: 41, name: "Niobium", symbol: "Nb", type: "transition-metal" },
        { number: 42, name: "Molybdenum", symbol: "Mo", type: "transition-metal" },
        { number: 43, name: "Technetium", symbol: "Tc", type: "transition-metal" },
        { number: 44, name: "Ruthenium", symbol: "Ru", type: "transition-metal" },
        { number: 45, name: "Rhodium", symbol: "Rh", type: "transition-metal" },
        { number: 46, name: "Palladium", symbol: "Pd", type: "transition-metal" },
        { number: 47, name: "Silver", symbol: "Ag", type: "transition-metal" },
        { number: 48, name: "Cadmium", symbol: "Cd", type: "transition-metal" },
        { number: 49, name: "Indium", symbol: "In", type: "metal" },
        { number: 50, name: "Tin", symbol: "Sn", type: "metal" },
        { number: 51, name: "Antimony", symbol: "Sb", type: "metalloid" },
        { number: 52, name: "Tellurium", symbol: "Te", type: "metalloid" },
        { number: 53, name: "Iodine", symbol: "I", type: "halogen" },
        { number: 54, name: "Xenon", symbol: "Xe", type: "noble-gas" },
        { number: 55, name: "Cesium", symbol: "Cs", type: "alkali-metal" },
        { number: 56, name: "Barium", symbol: "Ba", type: "alkaline-earth-metal" },
        { number: 57, name: "Lanthanum", symbol: "La", type: "lanthanide" },
        { number: 58, name: "Cerium", symbol: "Ce", type: "lanthanide" },
        { number: 59, name: "Praseodymium", symbol: "Pr", type: "lanthanide" },
        { number: 60, name: "Neodymium", symbol: "Nd", type: "lanthanide" },
        { number: 61, name: "Promethium", symbol: "Pm", type: "lanthanide" },
        { number: 62, name: "Samarium", symbol: "Sm", type: "lanthanide" },
        { number: 63, name: "Europium", symbol: "Eu", type: "lanthanide" },
        { number: 64, name: "Gadolinium", symbol: "Gd", type: "lanthanide" },
        { number: 65, name: "Terbium", symbol: "Tb", type: "lanthanide" },
        { number: 66, name: "Dysprosium", symbol: "Dy", type: "lanthanide" },
        { number: 67, name: "Holmium", symbol: "Ho", type: "lanthanide" },
        { number: 68, name: "Erbium", symbol: "Er", type: "lanthanide" },
        { number: 69, name: "Thulium", symbol: "Tm", type: "lanthanide" },
        { number: 70, name: "Ytterbium", symbol: "Yb", type: "lanthanide" },
        { number: 71, name: "Lutetium", symbol: "Lu", type: "lanthanide" },
        { number: 72, name: "Hafnium", symbol: "Hf", type: "transition-metal" },
        { number: 73, name: "Tantalum", symbol: "Ta", type: "transition-metal" },
        { number: 74, name: "Wolfram", symbol: "W", type: "transition-metal" },
        { number: 75, name: "Rhenium", symbol: "Re", type: "transition-metal" },
        { number: 76, name: "Osmium", symbol: "Os", type: "transition-metal" },
        { number: 77, name: "Iridium", symbol: "Ir", type: "transition-metal" },
        { number: 78, name: "Platinum", symbol: "Pt", type: "transition-metal" },
        { number: 79, name: "Gold", symbol: "Au", type: "transition-metal" },
        { number: 80, name: "Mercury", symbol: "Hg", type: "transition-metal" },
        { number: 81, name: "Thallium", symbol: "Tl", type: "metal" },
        { number: 82, name: "Lead", symbol: "Pb", type: "metal" },
        { number: 83, name: "Bismuth", symbol: "Bi", type: "metal" },
        { number: 84, name: "Polonium", symbol: "Po", type: "metalloid" },
        { number: 85, name: "Astatine", symbol: "At", type: "noble-gas" },
        { number: 86, name: "Radon", symbol: "Rn", type: "alkali-metal" },
        { number: 87, name: "Francium", symbol: "Fr", type: "alkaline-earth-metal" },
        { number: 88, name: "Radium", symbol: "Ra", type: "actinide" },
        { number: 89, name: "Actinium", symbol: "Ac", type: "actinide" },
        { number: 90, name: "Thorium", symbol: "Th", type: "actinide" },
        { number: 91, name: "Protactinium", symbol: "Pa", type: "actinide" },
        { number: 92, name: "Uranium", symbol: "U", type: "actinide" },
        { number: 93, name: "Neptunium", symbol: "Np", type: "actinide" },
        { number: 94, name: "Plutonium", symbol: "Pu", type: "actinide" },
        { number: 95, name: "Americium", symbol: "Am", type: "actinide" },
        { number: 96, name: "Curium", symbol: "Cm", type: "actinide" },
        { number: 97, name: "Berkelium", symbol: "Bk", type: "actinide" },
        { number: 98, name: "Californium", symbol: "Cf", type: "actinide" },
        { number: 99, name: "Einsteinium", symbol: "Es", type: "actinide" },
        { number: 100, name: "Fermium", symbol: "Fm", type: "actinide" },
        { number: 101, name: "Mendelevium", symbol: "Md", type: "actinide" },
        { number: 102, name: "Nobelium", symbol: "No", type: "actinide" },
        { number: 103, name: "Lawrencium", symbol: "Lr", type: "actinide" },
        { number: 104, name: "Rutherfordium", symbol: "Rf", type: "transactinide" },
        { number: 105, name: "Dubnium", symbol: "Db", type: "transactinide" },
        { number: 106, name: "Seaborgium", symbol: "Sg", type: "transactinide" },
        { number: 107, name: "Bohrium", symbol: "Bh", type: "transactinide" },
        { number: 108, name: "Hassium", symbol: "Hs", type: "transactinide" },
        { number: 109, name: "Meitnerium", symbol: "Mt", type: "transactinide" },
        { number: 110, name: "Darmstadtium", symbol: "Ds", type: "transactinide" },
        { number: 111, name: "Roentgenium", symbol: "Rg", type: "transactinide" },
        { number: 112, name: "Copernicium", symbol: "Cn", type: "transactinide" },
        { number: 113, name: "Nihonium", symbol: "Nh", type: "metal" },
        { number: 114, name: "Flerovium", symbol: "Fl", type: "transactinide" },
        { number: 115, name: "Moscovium", symbol: "Mc", type: "metal" },
        { number: 116, name: "Livermorium", symbol: "Lv", type: "transactinide" },
        { number: 117, name: "Tennessine", symbol: "Ts", type: "halogen" },
        { number: 118, name: "Oganesson", symbol: "Og", type: "noble-gas" }
    ],

    get(index) {
        return this.all[index];
    },

    get options() {
        return this.all.slice().sort((a, b) => a.name.localeCompare(b.name));
    }

});

Alpine.start();
