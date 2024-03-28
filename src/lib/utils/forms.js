import { superForm } from 'sveltekit-superforms';
import { zodClient } from 'sveltekit-superforms/adapters';

export function createSuperForm(form, schema) {
    return superForm(form, {
        validators: zodClient(schema)
    });
}