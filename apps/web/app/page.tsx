import { Button } from "@workspace/ui/components/button"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"

export default function Page() {

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem mollitia, quasi amet excepturi corporis non illum illo perferendis deserunt ratione cum debitis totam eius nobis cumque, iusto hic at voluptatibus.
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi voluptates repellat neque cupiditate illum esse fugit deleniti quam excepturi facilis in expedita nisi quisquam exercitationem odit aspernatur, dolores corrupti!
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
