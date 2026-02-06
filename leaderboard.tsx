import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const players = [
  { rank: 1, name: "Ishaan S.", score: -2, thru: "F", status: "up" },
  { rank: 2, name: "Michael R.", score: -1, thru: "F", status: "down" },
  { rank: 3, name: "David K.", score: "E", thru: "16", status: "same" },
  { rank: 4, name: "Sarah L.", score: "+2", thru: "15", status: "up" },
  { rank: 5, name: "James P.", score: "+4", thru: "F", status: "down" },
  { rank: 6, name: "Emily W.", score: "+5", thru: "12", status: "same" },
  { rank: 7, name: "Robert C.", score: "+8", thru: "F", status: "down" },
  { rank: 8, name: "Jessica T.", score: "+12", thru: "F", status: "same" },
];

export default function Leaderboard() {
  return (
    <div className="min-h-screen flex flex-col bg-muted/10">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4 flex-grow">
        <div className="text-center mb-12">
          <span className="text-accent uppercase tracking-widest text-sm font-bold">Live Scoring</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4 text-primary">Leaderboard</h1>
          <p className="text-muted-foreground">Current standings for the 2025 Invitational</p>
        </div>

        <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden max-w-4xl mx-auto">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[100px] text-center font-bold">Pos</TableHead>
                <TableHead className="font-bold">Player</TableHead>
                <TableHead className="text-center font-bold">Score</TableHead>
                <TableHead className="text-center font-bold">Thru</TableHead>
                <TableHead className="text-right font-bold hidden sm:table-cell">Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.name} className="hover:bg-muted/20">
                  <TableCell className="text-center font-serif text-lg font-bold text-primary">
                    {player.rank}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-border">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {player.name.split(' ')[0][0]}{player.name.split(' ')[1][0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{player.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge 
                      variant="outline" 
                      className={`
                        font-mono text-base px-3 py-1 border-0
                        ${player.score.toString().includes('-') ? 'text-red-600 bg-red-50' : ''}
                        ${player.score === 'E' ? 'text-gray-600 bg-gray-50' : ''}
                        ${player.score.toString().includes('+') ? 'text-primary bg-green-50' : ''}
                      `}
                    >
                      {player.score}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground font-mono">
                    {player.thru}
                  </TableCell>
                  <TableCell className="text-right hidden sm:table-cell">
                    {player.status === 'up' && <span className="text-green-500">▲</span>}
                    {player.status === 'down' && <span className="text-red-500">▼</span>}
                    {player.status === 'same' && <span className="text-gray-400">-</span>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
