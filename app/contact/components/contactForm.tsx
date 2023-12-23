"use client"
import { useState } from "react"
import * as yup from "yup"
import DisplayContact from "./displayContact"
import { contactTypes, onChangeEventType } from "@/types/commonTypes"




export default function ContactForm() {
    const [contactInfo, setContactInfo] = useState<contactTypes>({
        name: "",
        fname: "",
        city: "",
        cname: "",
        state: '',
        cnic: 0,
        batch: "",
        email: "",
        phone: 0,
        message: ""
    })

    const [errors, setError] = useState<string[]>([])

    const contactInfoSchema = yup.object().shape({
        name: yup.string().required().min(5).max(40),
        fname: yup.string().required().min(5).max(40),
        city: yup.string().required(),
        cname: yup.string().required(),
        state: yup.string().required(),
        cnic: yup.string().required(),
        batch: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.number().required(),
        message: yup.string().required()
    })

    const [contactList, setContactList] = useState<contactTypes[]>([])

    const onChangeHandler = (e: onChangeEventType) => {
        let userDetails = {
            ...contactInfo,
            [e.target.name]: e.target.value
        }
        setContactInfo(userDetails)
    }


    const onClickHandler = async () => {
        try {
            const result = await contactInfoSchema.validate(contactInfo)
            console.log(result);


            if (!result) {
                return
            }

            let newContactList: contactTypes[] = [...contactList, contactInfo]
            setContactList(newContactList)

            setError([])
            setContactInfo({
                name: "",
                fname: "",
                city: "",
                cname: "",
                state: "",
                cnic: 0,
                batch: "",
                email: "",
                phone: 0,
                message: "",
            })
        } catch (err) {

            setError(err.errors)

            console.log("error", err.errors);

        }


    }

    // const getUserNameHandler = (event: onChangeEventType) => {
    //   console.log("getUserNameHandler call", event.target.value);
    //   // userName = event.target.value
    //   setUserName(event.target.value)

    // }

    // const onChangeEmailHandler = (e: onChangeEventType) => {
    //   setEmail(e.target.value)
    // }

    // var userName:string  = "defaut"
    // const [userName, setUserName] = useState<string>("")
    // const [email, setEmail] = useState<string>("")
    // const [text, setText] = useState<string>("")
    // const [loading, setLoading] = useState<boolean>(false)

    return (
        <>
            <form className="max-w-md mx-auto border rounded-md">

                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                </label>
                <input
                    value={contactInfo.name}
                    onChange={onChangeHandler}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Father Name
                </label>
                <input
                    value={contactInfo.fname}
                    onChange={onChangeHandler}
                    type="text"
                    id="fname"
                    name="fname"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    City
                </label>
                <input
                    value={contactInfo.city}
                    onChange={onChangeHandler}
                    type="text"
                    id="city"
                    name="city"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />

                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Country
                </label>
                <input
                    value={contactInfo.cname}
                    onChange={onChangeHandler}
                    type="text"
                    id="cname"
                    name="cname"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />

                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    State
                </label>
                <input
                    value={contactInfo.state}
                    onChange={onChangeHandler}
                    type="text"
                    id="state"
                    name="state"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    CNIC
                </label>
                <input
                    value={contactInfo.cnic}
                    onChange={onChangeHandler}
                    type="number"
                    id="cnic"
                    name="cnic"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Batch
                </label>
                <input
                    value={contactInfo.batch}
                    onChange={onChangeHandler}
                    type="text"
                    id="batch"
                    name="batch"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    value={contactInfo.email}
                    onChange={onChangeHandler}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone
                </label>
                <input
                    value={contactInfo.phone}
                    onChange={onChangeHandler}
                    type="number"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border  rounded-md"
                    required
                />
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                </label>
                <textarea
                    value={contactInfo.message}
                    onChange={onChangeHandler}
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border  rounded-md"
                    required
                ></textarea>
                {errors.map((item) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div style={{ color: "red" }}>
                            <h1>{item}</h1>
                        </div>
                    )
                })}
                <div className="mb-6">
                    <button
                        onClick={onClickHandler}
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <DisplayContact contactData={contactList} />
        </>
    )
}