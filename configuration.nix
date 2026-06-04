{ config, pkgs, ... }:

{
  imports = [ ./hardware-configuration.nix ];

  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  networking.hostName = "hillah-nixos";
  networking.networkmanager.enable = true;

  time.timeZone = "Asia/Baghdad";
  i18n.defaultLocale = "en_US.UTF-8";

  users.users.ahmed = {
    isNormalUser = true;
    extraGroups = [ "wheel" "networkmanager" "docker" ];
    packages = with pkgs; [
      git
      neovim
      tmux
      htop
      kitty
      firefox
    ];
  };

  nix.settings.experimental-features = [ "nix-command" "flakes" ];
  system.stateVersion = "24.05";
}
