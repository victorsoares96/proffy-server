import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('class_schedule').del();

    // Inserts seed entries
    await knex('class_schedule').insert([
        { 
            id: 1, 
            week_day: 5,
            from: '8',
            from_minutes: 480,
            to: '12',
            to_minutes: 720,
            class_id: 1,
            owner_id: 1,
        },
        { 
            id: 2, 
            week_day: 6,
            from: '10',
            from_minutes: 600,
            to: '20',
            to_minutes: 1200,
            class_id: 1,
            owner_id: 1,
        },
        { 
            id: 3, 
            week_day: 4,
            from: '2',
            from_minutes: 120,
            to: '5',
            to_minutes: 300,
            class_id: 2,
            owner_id: 2,
        },
    ]);
};
