import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
   <div>
      <h1 className="bg-amber-600">Ravi</h1>
      <Button>click</Button>
      <UserButton/>
   </div>
  );
}
