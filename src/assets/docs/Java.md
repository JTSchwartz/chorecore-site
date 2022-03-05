_Warning: This library was built in Kotlin and so usage is different and not always as helpful. If you find any errors in the docs, please reach out._
## <a id="alphabet"></a>Alphabet
---
#### `Alphabet`
An enum of lists of the English alphabet in order, in a number of specified formats.

| Name                 | Subset                                                                                                                             |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------|
| LOWERCASE            | ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] |
| UPPERCASE            | ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] |
| LOWERCASE_VOWELS     | ['a', 'e', 'i', 'o', 'u', 'y']                                                                                                     | 
| UPPERCASE_VOWELS     | ['A', 'E', 'I', 'O', 'U', 'Y']                                                                                                     |
| LOWERCASE_NON_VOWELS | ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']                               |
| UPPERCASE_NON_VOWELS | ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']                               |

### Operator
#### `Alphabet.Companion.get(Int): Char`
The get operator has been overloaded on this enum so that indexes can be called directly from the enum rather than their `subset` property: `LOWERCASE[0]`

## <a id="fraction"></a>Fraction
---
#### `Fraction`
An enumeration of Unicode symbols for fractions.

| Name           | Symbol | Value  |
|----------------|--------|--------|
| ONE_HALF       | ½      | 0.5    |
| ONE_THIRD      | ⅓      | 0.(3)  |
| ONE_QUARTER    | ¼      | 0.25   |
| ONE_FIFTH      | ⅕      | 0.2    |
| ONE_SIXTH      | ⅙      | 0.1(6) |
| ONE_SEVENTH    | ⅐      | 0.143  |
| ONE_EIGHTH     | ⅛      | 0.125  |
| ONE_NINTH      | ⅑      | 0.(1)  |
| ONE_TENTH      | ⅒      | 0.1    |
| TWO_THIRDS     | ⅔      | 0.6    |
| TWO_FIFTHS     | ⅖      | 0.4    |
| THREE_QUARTERS | ¾      | 0.75   |
| THREE_FIFTHS   | ⅗      | 0.6    |
| THREE_EIGHTHS  | ⅜      | 0.375  |
| FOUR_FIFTHS    | ⅘      | 0.8    |
| FIVE_SIXTHS    | ⅚      | 0.833  |
| FIVE_EIGHTHS   | ⅝      | 0.625  |
| SEVEN_EIGHTHS  | ⅞      | 0.875  |

### Operator
#### `Fraction.Companion.get(Double): Fraction`
This _static_ operator retrieves the `Fraction` whose `value` exactly matches the provided parameter, otherwise a `ChoreCoreException` is thrown if an exact match is not found.
<br/><br/>

There are also a number of static methods for retrieving and utilizing these enums:

#### `closest(value: Double | Float): Fraction`
This method operates very similarly to `get`, but will only throw an exception if the parameter is outside the range `0.0..1.0`. As long as the parameter is within the range, the `Fraction` with the closest `value` is returned.
<br/><br/>
#### `toClosestSymbol(number: Double | Float | String): String`
In order to directly utilize the `symbol` functionality of the enum, this method will accept any real Double or Float, or even a String that matches the syntax of a fraction or decimal number and return it in a cleaner format.

## <a id="math"></a>Math
---
### Patterns
#### `STRING_DECIMAL_FORMAT` = `\\d*(\\.\\d*)?`
Decimal formatted float/double or integer: `2`
<br/><br/>
#### `STRING_FRACTION_FORMAT` = `[1-9]\\d*/[1-9]\\d*`
Lone fraction: `5/2`
<br/><br/>
#### `STRING_INTEGER_AND_FRACTION_FORMAT` = `[1-9]+ [1-9]\\d*/[1-9]\\d*`
Fraction with integer base: `2 1/2`

### Methods
#### `<T: Number> closest(needle: T, array: List<T>): T`
Finds the closest number in an array to the given needle.
<br/><br/>
#### `parseFractionString(fraction: String): Double`
Intended for converting fraction strings to a numerical value, but will convert any value which matches one of three patterns: `STRING_DECIMAL_FORMAT`, `STRING_FRACTION_FORMAT`,`STRING_INTEGER_AND_FRACTION_FORMAT`.

Though they will not be individually documented for simplicity’s sake, this class also contains the following math operators: `+`, `-`, `*`, `/`, and `%` for `Int`, `Long`, `Float`, and `Double` to be able to perform on `Time` enumerations directly, rather than needing to call their `inMilliseconds` property. It should be noted that all values are returned in their respective return type's, except for `Int`, which will always return as a `Long` in these mathematics operations.

## <a id="nullability"></a>Nullability
---
### Extensions
#### `<T> Nullability.isNull(T): Boolean`
A more idiomatic method for checking if a value is null.
<br/><br/>
#### `<T> Nullability.isNotNull(T): Boolean`
Negated version of `isNull()`
<br/><br/>
#### `<T,R> Nullability.ifNotNull(T value, R returnIfNull, Function1<? super T, ? extends R> block): R`
While this method is intended for Kotlin, it is still accessible in Java. `ifNotNull` is an if statement at its core. If `value` is not null, the lambda (`block`) will run and the method 
will return the result of the code block; however, if `value` is not null, then the `returnIfNull` parameter is returned.

```java
Nullability.ifNotNull(1, "1", integer -> {
    String log = integer + " is not null";
    System.out.println(log);
    return log;
});
```

_Note: In Kotlin a negated version of this method exists, although it uses Kotlin abilities that cannot be translated. A solution is being sought._

## <a id="strings"></a>Strings
---
### Operators
#### `Strings.minus(String, Int): String`
If the Int is positive, this operation will drop the given number of characters from the beginning of the String. If the value is null, the count will be dropped from the end.
<br/><br/>
#### `Strings.unaryMinus(String): String`
#### `Strings.dec(String): String`
Both the unaryMinus and both Decrement operations perform the same action: trimming the String of whitespace on both ends end. The execution order of the Prefix and Postfix notations of the Decrement operations work the same as any other.
<br/><br/>
### Extensions
#### `Strings.capitalize(String): String`
Replaces the Kotlin's deprecated `String.capitalize()`
<br/><br/>
#### `Strings.sentenceCase(String): String`
Split's a String on periods and convert's all characters to lowercase, and runs `String.capitalize()` on them individually before again joining with periods.
<br/><br/>
#### `Strings.replaceByRegexMap(String, Map<Regex, String>): String`
#### `Strings.replaceByMap(String, Map<String, String>): String`
Use a map to perform a replacement using each Key-Value pair, where the Key is what should be replaced by the Value. Both methods run the same, if the Key is a String, it just gets converted to Regex first. These could not be overloaded as parameterized types on interfaces do not mitigate signature clashes

## <a id="time"></a>Time
---
An enumeration of Time units and their corresponding value in milliseconds.
_Note: Months have been excluded from the list as there are too many variations._

| Unit         | inMilliseconds (Long) |
|--------------|-----------------------|
| MILLISECONDS | 1                     |
| SECOND       | 1000 * MILLISECONDS   |
| MINUTE       | 60 * SECOND           |
| HOUR         | 60 * MINUTE           |
| DAY          | 24 * HOUR             |
| WEEK         | 7 * DAY               |
| YEAR         | 365 * DAY             |
| LEAP_YEAR    | 366 * DAY             |

### Operators
#### `TimeKt.plus(Time, Int | Long | Float | Double): Long`: +
#### `Math.plus(Int | Long | Float | Double, Time): Long`: +
#### `TimeKt.minus(Time, Int | Long | Float | Double): Long`: -
#### `Math.minus(Int | Long | Float | Double, Time): Long`: -
#### `TimeKt.times(Time, Int | Long | Float | Double): Long`: *
#### `Math.times(Int | Long | Float | Double, Time): Long`: *
#### `TimeKt.div(Time, Int | Long | Float | Double): Long`: /
#### `Math.div(Int | Long | Float | Double, Time): Long`: /
#### `TimeKt.rem(Time, Int | Long | Float | Double): Long`: %
#### `Math.rem(Int | Long | Float | Double, Time): Long`: %
Provided operators so that the `inMilliseconds` property doesn't have to be called
<br/><br/>
#### `TimeKt.invoke(Time, Int | Long | Float | Double): Long`)`
Same as `times`.
