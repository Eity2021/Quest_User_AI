
import { Button } from '../button';
import { MessageSquare, Heart } from "lucide-react"

export default function Actions() {
  return (
   <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base h-11">
                Book Session
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-border hover:bg-secondary/20 bg-transparent text-muted-foreground">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </Button>
                <Button variant="outline" className="border-border hover:bg-secondary/20 bg-transparent text-muted-foreground">
                  <Heart className="w-4 h-4" />
                  Favorite
                </Button>
              </div>
            </div>
  )
}
