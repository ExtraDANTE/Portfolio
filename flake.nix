{
  description = "Ahmed Ali's NixOS Web Development Flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_22
          yarn
          typescript
          nodePackages.typescript-language-server
        ];
        shellHook = "echo 'Welcome to your NixOS Dev Shell!'";
      };
    };
}
