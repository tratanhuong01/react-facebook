import React from 'react'

export default function LabelGender({ name, value, register }) {
    return (
        <div
            className="w-1/3 p-2 border-gray-300 flex items-center justify-between
                  border-solid border-1"
        >
            <label className="">
                <b>{value}</b>
            </label>
            <input
                type="radio"
                name={name}
                value={value}
                defaultChecked={value === "Nam" ? true : false}
                {...register(name)}
            />
        </div>
    )
}
