export const useSemana = ( dia ) => {
    
    switch ( dia){
        case 0:
            return ['Dom','Lun','Mar','Mie','Jue','Vie','Sab']
        case 1:
            return ['Lun','Mar','Mie','Jue','Vie','Sab','Dom']
        case 2:
            return ['Mar','Mie','Jue','Vie','Sab','Dom','Lun']
        case 3:
            return ['Mie','Jue','Vie','Sab','Dom','Lun','Mar']
        case 4:
            return ['Jue','Vie','Sab','Dom','Lun','Mar','Mie']
        case 5:
            return ['Vie','Sab','Dom','Lun','Mar','Mie','Jue']
        case 6:
            return ['Sab','Dom','Lun','Mar','Mie','Jue','Vie',]
        default:
    }


}