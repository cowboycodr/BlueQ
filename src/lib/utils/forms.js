import { superForm } from 'sveltekit-superforms';
import { zodClient } from 'sveltekit-superforms/adapters';

export function createSuperForm(form, schema, options) {
    return superForm(form, {
        validators: zodClient(schema),
        ...options,
    });
}