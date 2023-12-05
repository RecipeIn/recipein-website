import React, { useState } from 'react';

function Measure () {
    return (
        <div>
            <select type="text" id="gender" defaultValue={'DEFAULT'} className="bg-white w-[132px] h-[50px] tracking-wider text-base border border-black rounded-[10px] focus:ring-black-500 focus:border-black-500 block px-4 py-3 text-font ml-2" required>
                <option value="DEFAULT" disabled>Takaran</option>
                <option value="kg">kg</option>
                <option value="pon">pon</option>
                <option value="ons">ons</option>
                <option value="gram">gram</option>
                <option value="liter">liter</option>
                <option value="ml">ml</option>
                <option value="sdm">sdm</option>
                <option value="sdt">sdt</option>
                <option value="cangkir">cangkir</option>
                <option value="siung">siung</option>
                <option value="buah">buah</option>
                <option value="butir">butir</option>
                <option value="biji">biji</option>
            </select>
        </div>
    )
}

export default Measure