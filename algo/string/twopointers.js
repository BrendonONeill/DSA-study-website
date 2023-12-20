str = "level"

function test(str)
{
   let a = 0
   let b = str.length - 1

   while(a < b)
   {
        if(str[a] != str[b])
        {
            return false
        }
        a++
        b--
   }
   return true
}