function binarySearch(list, element) {
    if (list.length == 0)
        return -1;
    var first = 0, last = (list.length - 1), middle = (first + last) /2;
    while (first <= last)
        {
            middle = Math.floor(first + (last - first) / 2);
            if (list[middle] == element)
            {
                while (list[middle] == element)
                    {
                        middle = middle -1;
                    }
                return (middle +1);
            }
            if (list[middle] < element)
                first = middle + 1;
            else
                last = middle -1;
        }
    return -1;
}
