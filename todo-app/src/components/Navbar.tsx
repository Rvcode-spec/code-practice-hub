import React from 'react';

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Navbar({ searchTerm, setSearchTerm }: NavbarProps) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-4">
        <a className="navbar-brand fw-bold" href="#">Todo App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <form className="d-flex ms-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}
