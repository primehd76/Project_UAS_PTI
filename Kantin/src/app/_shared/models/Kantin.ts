export interface Kantin {
    info: string;
    result: {
        count: number,
        kantin: []
    };
}

export interface KantinDetail{
    info: string;
    result: {
        cash: string,
        created_at: number,
        dana: string,
        deskripsi: string,
        foto: string,
        gopay: string,
        harga: number,
        id: number,
        kategori: string,
        kode: string,
        nama: string,
        ovo: string,
        updated_at: number
    };
}

export interface KantinFavorite{
    info: string;
    result:{

    };

}