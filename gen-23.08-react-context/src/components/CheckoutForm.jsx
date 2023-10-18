import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function CheckoutForm() {
    const schema = yup.object().shape({
        nama: yup.string().required('Nama wajib diisi'),
        email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
        nomorTelepon: yup
            .string()
            .matches(/^\d{12}$/, 'Nomor telepon harus 12 digit')
            .required('Nomor telepon wajib diisi'),
        jumlahBarang: yup.number().typeError('Jumlah barang wajib diisi').positive().integer(),
        jenisBarang: yup.string().required('Jenis barang wajib diisi'),
        tanggalLahir: yup.date(),
        tanggalTransaksi: yup.date(),
        metodePembayaran: yup.string().required('Metode pembayaran wajib diisi'),
        pilihanSesuai: yup.boolean().oneOf([true], 'Anda harus menyetujui pilihan sudah sesuai'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [selectedDateLahir, setSelectedDateLahir] = useState(null);

    const handleDateLahirChange = (date) => {
        setSelectedDateLahir(date);
    };


    const onSubmitForm = (data) => {
        // Mendapatkan tanggal saat ini
        const currentDate = new Date();

        // Mendapatkan tahun, bulan, dan tanggal
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');

        // Mendapatkan jam, menit, dan detik
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');

        // Menggabungkan semua komponen waktu menjadi format yang diinginkan
        const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

        // Menambahkan tanggal dan waktu ke data
        data.tanggalTransaksi = formattedDateTime;

        data.tanggalLahir = selectedDateLahir;

        // Menampilkan data dalam console.log
        console.log(data);
    };


    return (
        <section>
            <form onSubmit={handleSubmit(onSubmitForm)} className="bg-[#b88967] p-8 rounded-md max-w-md mx-auto border border-amber-800">
                <div className="mb-4">
                    <label htmlFor='nama' className="block text-black text-lg">Nama:</label>
                    <input
                        id='nama'
                        autoComplete='given-name'
                        placeholder='Nama Lengkap'
                        type="text"
                        {...register('nama')}
                        className="w-full bg-amber-100 font-bold p-2 rounded-lg"
                    />
                    <p className="text-red-600">{errors.nama?.message}</p>
                </div>

                <div className="mb-4">
                    <label htmlFor='email' className="block text-black text-lg">Email:</label>
                    <input
                        id='email'
                        autoComplete='email'
                        placeholder='Email'
                        type="text"
                        {...register('email')}
                        className="w-full bg-amber-100 font-bold p-2 rounded-lg"
                    />
                    <p className="text-red-600">{errors.email?.message}</p>
                </div>

                <div className="mb-4">
                    <label htmlFor='tanggalLahir' className="block text-brown text-lg">Tanggal Lahir:</label>
                    <DatePicker
                        showIcon
                        id='tanggalLahir'
                        dateFormat="dd/MM/yyyy"
                        selected={selectedDateLahir}
                        onChange={handleDateLahirChange}
                        className="w-full bg-amber-100 font-bold p-2 rounded-lg"
                        showMonthDropdown
                        showYearDropdown
                    />
                    <p className="text-red-600">{errors.tanggalLahir?.message}</p>
                </div>

                <div className="mb-4">
                    <label htmlFor='nomorTelepon' className="block text-black text-lg">Nomor Telepon:</label>
                    <input
                        id='nomorTelepon'

                        placeholder='Masukkan Nomor Telepon yang Valid'
                        type="text"
                        {...register('nomorTelepon')}
                        className="w-full bg-amber-100 font-bold p-2 rounded-lg"
                    />
                    <p className="text-red-600">{errors.nomorTelepon?.message}</p>
                </div>

                <div className="mb-4">
                    <label htmlFor='jumlahBarang' className="block text-black text-lg">Jumlah Barang:</label>
                    <input
                        id='jumlahBarang'

                        type="number"
                        {...register('jumlahBarang')}
                        className="w-full bg-amber-100 font-bold p-2 rounded-lg"
                    />
                    <p className="text-red-600">{errors.jumlahBarang?.message}</p>
                </div>

                <div className="mb-4">
                    <label htmlFor='jenisBarang' className="block text-black text-lg">Jenis Barang:</label>
                    <select
                        id='jenisBarang'
                        {...register('jenisBarang')}
                        className="w-full bg-amber-100 font-bold p-2 rounded-lg">
                        <option value="">Pilih Jenis Barang</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    <p className="text-red-600">{errors.jenisBarang?.message}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-black text-lg">Tanggal Transaksi:</label>
                    <p>{new Date().toLocaleString()}</p>
                    <p className="text-red-600">{errors.tanggalTransaksi?.message}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-brown text-lg">Metode Pembayaran:</label>
                    <div>
                        <input
                            id='BNI'
                            type="radio"
                            {...register('metodePembayaran')}
                            value="BNI"
                            className="mr-2"
                        />
                        <label htmlFor='BNI' className="text-brown">BNI</label>
                    </div>
                    <div>
                        <input
                            id='BCA'
                            type="radio"
                            {...register('metodePembayaran')}
                            value="BCA"
                            className="mr-2"
                        />
                        <label htmlFor='BCA' className="text-brown">BCA</label>
                    </div>
                    <div>
                        <input
                            id='MANDIRI'
                            type="radio"
                            {...register('metodePembayaran')}
                            value="MANDIRI"
                            className="mr-2"
                        />
                        <label htmlFor='MANDIRI' className="text-brown">MANDIRI</label>
                    </div>
                    <p className="text-red-600">{errors.metodePembayaran?.message}</p>
                </div>

                <div className="mb-4">
                    <label htmlFor='pilihanSesuai' className="block text-black text-lg">
                        <input
                            id='pilihanSesuai'

                            type="checkbox"
                            {...register('pilihanSesuai')}
                            className="mr-2"
                        />
                        Pilihan sudah sesuai
                    </label>
                    <p className="text-red-600">{errors.pilihanSesuai?.message}</p>
                </div>

                <button type="submit" className="w-full bg-slate-300 text-black p-2 rounded-lg hover:bg-amber-800 hover:text-white">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default CheckoutForm;
