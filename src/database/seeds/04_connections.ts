import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('connections').del();

    // Inserts seed entries
    await knex('connections').insert([
        { id: 1, user_id: 1, created_at: new Date() },
    ]);
};
