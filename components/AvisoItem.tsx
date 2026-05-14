import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface AvisoProps {
  id: number;
  titulo: string;
}

export function AvisoItem({ id, titulo }: AvisoProps) {
  const isPar = id % 2 === 0;

  return (
    <Card className={`border-l-4 ${isPar ? 'border-blue-500' : 'border-orange-500'} bg-slate-950/50`}>
      <CardHeader className="p-4 pb-0">
        <span className="text-[10px] text-muted-foreground uppercase font-mono">
          ID: #00{id}
        </span>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <CardTitle className="text-sm font-medium text-slate-200">
          {titulo}
        </CardTitle>
      </CardContent>
    </Card>
  );
}