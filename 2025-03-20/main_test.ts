import {intToRoman} from "./main.ts";

import {assertEquals} from "jsr:@std/assert";

Deno.test("Romanconverter",() => {assertEquals(intToRoman(381),"CCCLXXXI");});