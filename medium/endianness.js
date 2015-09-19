console.log(((new Uint32Array((new Uint8Array([2,4,6,8])).buffer))[0] === 0x8060402) ? 'LittleEndian' : 'BigEndian' )
