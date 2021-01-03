import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('users').del();

    // Inserts seed entries
    await knex('users').insert([
        { 
            id: 1, 
            name: 'Diego Fernandes', 
            email: 'diegofs@hotmail.com',
            password_hash: '$2y$08$BxDs6.HNMMeEqPVLb9oIV.6nX5obd8JUnG/L8L313fIbVxENUxkvS',
            avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&u=4fcc8ca9672eeb41ea800271831b7c687bc17054&v=4', 
            whatsapp: '5585991640770', 
            bio: 'CTO at @Rocketseat. Passionate about education and changing peoples lives through programming...' 
        },
        { 
            id: 2, 
            name: 'Victor Soares', 
            email: 'vitorsoares96@hotmail.com',
            password_hash: '$2y$08$BxDs6.HNMMeEqPVLb9oIV.6nX5obd8JUnG/L8L313fIbVxENUxkvS',
            avatar: 'https://avatars0.githubusercontent.com/u/19741953?s=460&u=b55781c981002566c88dfa21a984fadccc4d274c&v=4', 
            whatsapp: '5585991640770', 
            bio: 'Oi, sou professor de Matemática e minhas provas são difíceis pra caralho' 
        },
    ]);
};
