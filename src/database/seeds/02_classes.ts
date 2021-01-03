import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('classes').del();

    // Inserts seed entries
    await knex('classes').insert([
        { 
            id: 1, 
            subject: 'Matemática', 
            cost: 100.00, 
            owner_id: 1 
        },
        { 
            id: 2, 
            subject: 'Física', 
            cost: 150.00, 
            owner_id: 2 
        },
    ]);
};
