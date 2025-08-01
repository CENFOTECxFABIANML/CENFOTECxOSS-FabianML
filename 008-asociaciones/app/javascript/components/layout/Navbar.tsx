import React from "react";
import { SharedProps } from "../../types";
import { ThemeToggle } from "../../lib/ThemeToggle";
import { LocaleSwitcher } from "../../lib/LocaleSwitcher";
import { Button } from "../ui/button";
import axios from "axios";

declare const Turbo: any;

const Navbar = (props: SharedProps) => {
  // Si las props compartidas no han cargado, no renderizamos nada.
  if (!props.i18n || !props.user || !props.locale_data) {
    return null;
  }

  const { i18n, user, locale_data } = props;
  const csrfToken = document.querySelector<HTMLMetaElement>(
    "meta[name='csrf-token']"
  )?.content;

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    axios
      .delete("/users/sign_out", {
        headers: { "X-CSRF-Token": csrfToken },
      })
      .then(() => {
        Turbo.visit(`/${locale_data.current_locale}`);
      })
      .catch((error) => console.error("Logout failed:", error));
  };

  const basePath = `/${locale_data.current_locale}`;

  return (
    <header className="absolute top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center max-w-4xl mx-auto">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href={basePath}>
            <span className="hidden font-bold sm:inline-block">
              {i18n.navbar.brand}
            </span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href={`${basePath}/posts`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {i18n.navbar.posts_link}
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {user.signed_in ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline-block">
                {user.email}
              </span>
              <Button variant="ghost" onClick={handleLogout}>
                {i18n.navbar.log_out}
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost">
                <a href={`${basePath}/users/sign_in`}>{i18n.navbar.log_in}</a>
              </Button>
              <Button asChild>
                <a href={`${basePath}/users/sign_up`}>{i18n.navbar.sign_up}</a>
              </Button>
            </>
          )}
          <LocaleSwitcher localeData={locale_data} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
