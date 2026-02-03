1. write disk partition table with cfdisk utility

2. format disk using mkfs
```
mkfs.ext4 /dev/sda1
```

3. mount disk

```
mount /dev/sda1 /mnt
```

4. install packages
```
pacstrap -K /mnt linux base grub neovim networkmanager
```

5. install grub
```
arch-chroot /mnt
grub-install /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
```

6. remember to use passwd to set the password for your root account

7. reboot
```
^D
reboot
```

8. login and activate network manager
```
systemctl start NetworkManager
systemctl status NetworkManager
```

done