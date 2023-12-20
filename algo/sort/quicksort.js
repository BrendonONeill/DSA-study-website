nums = [1,90,45,2,7,8,2,4,1,10]
console.log(qs(nums, 0, nums.length - 1))
  


function qs(arr, lo, hi)
{
    if(lo >= hi)
    {
        return arr
    }

    let part = partition(arr, lo, hi)
    qs(arr, lo, part - 1)
    qs(arr, part + 1, hi)
    return arr
}

function partition(arr, lo, hi)
{
    let piv = arr[hi]
    let index = lo - 1

    for(let i = lo; i < hi; ++i)
    {
        if(arr[i] <= piv)
        {
            index++
            let temp = arr[i]
            arr[i] = arr[index]
            arr[index] = temp
        }
    }

    index++
    arr[hi] = arr[index]
    arr[index] = piv
    return index
}