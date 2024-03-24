<script>
	import { Button } from '$ui/button';
	import * as Card from '$ui/card';
</script>

<div class="container mx-auto p-2">
    <div class="grid grid-cols-2 gap-2">
        <Card.Root>
            <Card.Header>
                <Card.Title>
                    Views
                </Card.Title>
                <Card.Description>
                    Landing page visits
                </Card.Description>
            </Card.Header>
            <Card.Content>
                [ chart ]
            </Card.Content>
        </Card.Root>
        <Card.Root>
            <Card.Header>
                <Card.Title>
                    Sign ups
                </Card.Title>
                <Card.Description>
                    How many people have visited your landing page.
                </Card.Description>
            </Card.Header>
            <Card.Content>
                [ chart ]
            </Card.Content>
        </Card.Root>
    </div>
</div>
