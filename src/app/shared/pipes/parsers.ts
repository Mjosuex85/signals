export const parsePathName = (path: string): string => {

    let arr: any = []

    for(let i = 0; i < path.length; i++) {

      if(i === 0 ) {  
        arr.push(path[i].toUpperCase())
      }
      else{
        arr.push(path[i])
      }
    }
    return arr.join('').replace('-', ' ')
  }