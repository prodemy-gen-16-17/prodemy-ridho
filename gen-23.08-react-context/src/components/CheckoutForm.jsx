import { useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CheckoutContext } from '../context/CheckoutContext';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';



function CheckoutForm() {
    const { dataCheckout } = useContext(CheckoutContext);
    console.log(dataCheckout);


    const schema = yup.object().shape({
        nama: yup.string().required('Nama wajib diisi'),
        email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
        nomorTelepon: yup
            .string()
            .matches(/^\d{12}$/, 'Nomor telepon harus 12 digit')
            .required('Nomor telepon wajib diisi'),
        tanggalLahir: yup.date().required('Tanggal Lahir wajib diisi'),
        tanggalTransaksi: yup.date(),
        metodePembayaran: yup.string().required('Metode pembayaran wajib diisi'),
        pilihanSesuai: yup.boolean().oneOf([true], 'Anda harus menyetujui pilihan sudah sesuai'),
    });

    const {
        control,
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


    const onSubmitForm = async (data) => {
        const bookingId = uuidv4();
        if (dataCheckout && dataCheckout.id) {
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
            const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

            // Menambahkan tanggal dan waktu ke data
            data.tanggalTransaksi = formattedDateTime;

            data.tanggalLahir = selectedDateLahir;

            // Menampilkan data dalam console.log
            console.log(data);

            const payload = {
                id: bookingId,
                customerName: data.nama,
                customerEmail: data.email,
                customerTelp: data.nomorTelepon,
                customerTanggalLahir: data.tanggalLahir,
                tanggalTransaksi: data.tanggalTransaksi,
                chocolateName: dataCheckout.title,
                chocolateSize: dataCheckout.size,
                priceBooks: dataCheckout.price,
                qty: dataCheckout.qty,
                priceTotal: dataCheckout.priceTotal,
                metodePembayaran: data.metodePembayaran,
                pilihanSesuai: data.pilihanSesuai
            };

            try {
                const response = await axios.post("http://localhost:3000/bookings", payload);
                console.log("Data berhasil di bookings!", response);
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            console.error("DataCheckout tidak ditemukan atau tidak memiliki properti 'id'.");
        }

    };


    return (
        <section className='flex'>
            <div className="w-1/2 p-8 bg-[#b88967] rounded-md border border-amber-800">
                <h2 className="text-2xl font-semibold mb-4 text-center">Formulir Checkout</h2>
                <form onSubmit={handleSubmit(onSubmitForm)} >
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
                        <Controller
                            name="tanggalLahir"
                            control={control}
                            render={({ field, fieldState }) => (
                                <DatePicker
                                    showIcon
                                    dateFormat="dd/MM/yyyy"
                                    selected={field.value}
                                    onChange={(date) => field.onChange(date)}
                                    className="w-full bg-amber-100 font-bold p-2 rounded-lg"
                                    showMonthDropdown
                                    showYearDropdown
                                />
                            )}
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
            </div>
            <div className="w-1/2 p-8 bg-[#b88967] rounded-md border border-amber-800">
                <h2 className="text-2xl font-semibold mb-4 text-center">Produk yang Dipilih</h2>
                <h3 className="font-semibold">{dataCheckout.title}</h3>
                <div className="flex flex-col">
                    <div className="flex justify-between mb-4">
                        <img src={dataCheckout.imageSrc} alt="Foto Produk" className="w-16 hover:w-32 transition-transform transform-gpu hover:scale-105" />

                        <div className="flex flex-col">

                            <span>Size: {dataCheckout.size}</span>
                            <span>Jumlah: {dataCheckout.qty}</span>
                            <span>Harga : {dataCheckout.price} KR</span>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-4">
                    <span>Total:</span>
                    <span>{dataCheckout.priceTotal = dataCheckout.qty * dataCheckout.price} KR</span>
                </div>
            </div>
        </section>
    );
}

export default CheckoutForm;
