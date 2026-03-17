import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Button,
} from "@/components/ui/button"
import {
  FileTextIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons"

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      padding: '5px 6vw',
      position: 'relative',
      zIndex: 7,
    }}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="hover:bg-whispyblue/5" style={{
            zIndex: 9,
          }} ><><HamburgerMenuIcon /> &nbsp; Menu</></Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] bg-gradient-radial from-gray-950/50 via-gray-950/50 to-gray-950/50 border-whispyblue/10">
          <SheetHeader>
            <SheetTitle>Where to?</SheetTitle>
          </SheetHeader>
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: 'border-box',
            paddingBottom: "2rem",
            height: "100%",
          }}>
            <p>
              <Button variant="ghost" className="hover:bg-whispyblue/5" >
                <Link className={`text-popover-foreground inline-block drop-shadow-lg`} to="/" onClick={() => setOpen(false)}> Home <HomeIcon className='inline' /></Link>
              </Button>
            </p>
            <p>
              <Button variant="ghost" className="hover:bg-whispyblue/5" >
                <a className={`text-popover-foreground inline-block drop-shadow-lg`} href="https://github.com/spacechimplives" target="_blank" onClick={() => setOpen(false)}> Github <GitHubLogoIcon className='inline' /></a>
              </Button>
            </p>
            {import.meta.env.DEV && (
              <>
                <hr className="my-4 border-whispyblue/20" />
                <p>
                  <Button variant="ghost" className="hover:bg-whispyblue/5" >
                    <Link className={`text-popover-foreground inline-block drop-shadow-lg`} to="/drafts" onClick={() => setOpen(false)}> Drafts <FileTextIcon className='inline' /></Link>
                  </Button>
                </p>
                <p>
                  <Button variant="ghost" className="hover:bg-whispyblue/5" >
                    <Link className={`text-popover-foreground inline-block drop-shadow-lg`} to="/about" onClick={() => setOpen(false)}> About <PersonIcon className='inline' /></Link>
                  </Button>
                </p>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
