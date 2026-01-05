export interface Menu {
  id: number;
  name: string;
  route?: string;
}

export const menus: Menu[] = [
  { id: 1, name: "Notifikasi" },
  { id: 2, name: "Pesan" },
  { id: 3, name: "Toko" },
  { id: 4, name: "Profile" },
];
