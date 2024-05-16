// updated from AJV fast format regular expressions:
// https://github.com/epoberezkin/ajv/blob/master/lib/compile/formats.js
export const jsonSchemaFormatTests = {
    'date': /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
    'time': /^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
    // Modified to allow incomplete entries, such as
    // "2000-03-14T01:59:26.535" (needs "Z") or "2000-03-14T01:59" (needs ":00Z")
    'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d(?::[0-5]\d)?(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
    'email': /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    'hostname': /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,
    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    'ipv4': /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
    // tslint:disable-next-line:max-line-length
    'ipv6': /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    'uri': /^(?:[a-z][a-z0-9+-.]*)(?::|\/)\/?[^\s]*$/i,
    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
    'uri-reference': /^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i,
    // uri-template: https://tools.ietf.org/html/rfc6570
    // tslint:disable-next-line:max-line-length
    'uri-template': /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    // For the source: https://gist.github.com/dperini/729294
    // For test cases: https://mathiasbynens.be/demo/url-regex
    // tslint:disable-next-line:max-line-length
    // @todo Delete current URL in favour of the commented out URL rule when this ajv issue is fixed https://github.com/eslint/eslint/issues/7983.
    // tslint:disable-next-line:max-line-length
    // URL: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
    // tslint:disable-next-line:max-line-length
    'url': /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
    // uuid: http://tools.ietf.org/html/rfc4122
    'uuid': /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    // optimized https://gist.github.com/olmokramer/82ccce673f86db7cda5e
    // tslint:disable-next-line:max-line-length
    'color': /^\s*(#(?:[\da-f]{3}){1,2}|rgb\((?:\d{1,3},\s*){2}\d{1,3}\)|rgba\((?:\d{1,3},\s*){3}\d*\.?\d+\)|hsl\(\d{1,3}(?:,\s*\d{1,3}%){2}\)|hsla\(\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\))\s*$/gi,
    // JSON-pointer: https://tools.ietf.org/html/rfc6901
    'json-pointer': /^(?:\/(?:[^~/]|~0|~1)*)*$|^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    'relative-json-pointer': /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    'regex': function (str) {
        if (/[^\\]\\Z/.test(str)) {
            return false;
        }
        try {
            return true;
        }
        catch (e) {
            return false;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXJlZ2V4LmNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3phanNmLWNvcmUvc3JjL2xpYi9zaGFyZWQvZm9ybWF0LXJlZ2V4LmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7QUFDcEQsd0VBQXdFO0FBRXhFLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHO0lBRW5DLE1BQU0sRUFBRSw0QkFBNEI7SUFFcEMsTUFBTSxFQUFFLDBEQUEwRDtJQUVsRSxnREFBZ0Q7SUFDaEQsNkVBQTZFO0lBQzdFLFdBQVcsRUFBRSw0RkFBNEY7SUFFekcsdUNBQXVDO0lBQ3ZDLG1IQUFtSDtJQUNuSCw4RkFBOEY7SUFDOUYsT0FBTyxFQUFFLGtIQUFrSDtJQUUzSCxVQUFVLEVBQUUsb0ZBQW9GO0lBRWhHLG1IQUFtSDtJQUNuSCxNQUFNLEVBQUUsMkVBQTJFO0lBRW5GLDBHQUEwRztJQUMxRywyQ0FBMkM7SUFDM0MsTUFBTSxFQUFFLG9wQ0FBb3BDO0lBRTVwQyw0RUFBNEU7SUFDNUUsS0FBSyxFQUFFLDJDQUEyQztJQUVsRCwrREFBK0Q7SUFDL0QsZUFBZSxFQUFFLDJDQUEyQztJQUU1RCxvREFBb0Q7SUFDcEQsMkNBQTJDO0lBQzNDLGNBQWMsRUFBRSxtTEFBbUw7SUFFbk0seURBQXlEO0lBQ3pELDBEQUEwRDtJQUMxRCwyQ0FBMkM7SUFDM0MsOElBQThJO0lBQzlJLDJDQUEyQztJQUMzQyxpZ0JBQWlnQjtJQUNqZ0IsMkNBQTJDO0lBQzNDLEtBQUssRUFBRSwyckRBQTJyRDtJQUVsc0QsMkNBQTJDO0lBQzNDLE1BQU0sRUFBRSw4REFBOEQ7SUFFdEUsb0VBQW9FO0lBQ3BFLDJDQUEyQztJQUMzQyxPQUFPLEVBQUUseUxBQXlMO0lBRWxNLG9EQUFvRDtJQUNwRCxjQUFjLEVBQUUsd0ZBQXdGO0lBRXhHLHVCQUF1QixFQUFFLGtEQUFrRDtJQUUzRSxPQUFPLEVBQUUsVUFBVSxHQUFHO1FBQ3BCLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1NBQUU7UUFDM0MsSUFBSTtZQUNGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0NBRUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHVwZGF0ZWQgZnJvbSBBSlYgZmFzdCBmb3JtYXQgcmVndWxhciBleHByZXNzaW9uczpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lcG9iZXJlemtpbi9hanYvYmxvYi9tYXN0ZXIvbGliL2NvbXBpbGUvZm9ybWF0cy5qc1xuXG5leHBvcnQgY29uc3QganNvblNjaGVtYUZvcm1hdFRlc3RzID0ge1xuXG4gICdkYXRlJzogL15cXGRcXGRcXGRcXGQtWzAtMV1cXGQtWzAtM11cXGQkLyxcblxuICAndGltZSc6IC9eWzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGQoPzpcXC5cXGQrKT8oPzp6fFsrLV1cXGRcXGQ6XFxkXFxkKT8kL2ksXG5cbiAgLy8gTW9kaWZpZWQgdG8gYWxsb3cgaW5jb21wbGV0ZSBlbnRyaWVzLCBzdWNoIGFzXG4gIC8vIFwiMjAwMC0wMy0xNFQwMTo1OToyNi41MzVcIiAobmVlZHMgXCJaXCIpIG9yIFwiMjAwMC0wMy0xNFQwMTo1OVwiIChuZWVkcyBcIjowMFpcIilcbiAgJ2RhdGUtdGltZSc6IC9eXFxkXFxkXFxkXFxkLVswLTFdXFxkLVswLTNdXFxkW3RcXHNdWzAtMl1cXGQ6WzAtNV1cXGQoPzo6WzAtNV1cXGQpPyg/OlxcLlxcZCspPyg/Onp8WystXVxcZFxcZDpcXGRcXGQpPyQvaSxcblxuICAvLyBlbWFpbCAoc291cmNlcyBmcm9tIGpzZW4gdmFsaWRhdG9yKTpcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDEzMjMvdXNpbmctYS1yZWd1bGFyLWV4cHJlc3Npb24tdG8tdmFsaWRhdGUtYW4tZW1haWwtYWRkcmVzcyNhbnN3ZXItODgyOTM2M1xuICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9mb3Jtcy5odG1sI3ZhbGlkLWUtbWFpbC1hZGRyZXNzIChzZWFyY2ggZm9yICd3aWxsZnVsIHZpb2xhdGlvbicpXG4gICdlbWFpbCc6IC9eW2EtejAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtejAtOV0oPzpbYS16MC05LV17MCw2MX1bYS16MC05XSk/KD86XFwuW2EtejAtOV0oPzpbYS16MC05LV17MCw2MX1bYS16MC05XSk/KSokL2ksXG5cbiAgJ2hvc3RuYW1lJzogL15bYS16MC05XSg/OlthLXowLTktXXswLDYxfVthLXowLTldKT8oPzpcXC5bYS16MC05XSg/OlstMC05YS16XXswLDYxfVswLTlhLXpdKT8pKiQvaSxcblxuICAvLyBvcHRpbWl6ZWQgaHR0cHM6Ly93d3cuc2FmYXJpYm9va3NvbmxpbmUuY29tL2xpYnJhcnkvdmlldy9yZWd1bGFyLWV4cHJlc3Npb25zLWNvb2tib29rLzk3ODA1OTY4MDI4MzcvY2gwN3MxNi5odG1sXG4gICdpcHY0JzogL14oPzooPzoyNVswLTVdfDJbMC00XVxcZHxbMDFdP1xcZFxcZD8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdXFxkfFswMV0/XFxkXFxkPykkLyxcblxuICAvLyBvcHRpbWl6ZWQgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MzQ5Ny9yZWd1bGFyLWV4cHJlc3Npb24tdGhhdC1tYXRjaGVzLXZhbGlkLWlwdjYtYWRkcmVzc2VzXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgJ2lwdjYnOiAvXlxccyooPzooPzooPzpbMC05YS1mXXsxLDR9Oil7N30oPzpbMC05YS1mXXsxLDR9fDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7Nn0oPzo6WzAtOWEtZl17MSw0fXwoPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KD86KD86WzAtOWEtZl17MSw0fTopezV9KD86KD86KD86OlswLTlhLWZdezEsNH0pezEsMn0pfDooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KD86KD86WzAtOWEtZl17MSw0fTopezR9KD86KD86KD86OlswLTlhLWZdezEsNH0pezEsM30pfCg/Oig/OjpbMC05YS1mXXsxLDR9KT86KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7M30oPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSw0fSl8KD86KD86OlswLTlhLWZdezEsNH0pezAsMn06KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7Mn0oPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSw1fSl8KD86KD86OlswLTlhLWZdezEsNH0pezAsM306KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7MX0oPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSw2fSl8KD86KD86OlswLTlhLWZdezEsNH0pezAsNH06KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoPzo6KD86KD86KD86OlswLTlhLWZdezEsNH0pezEsN30pfCg/Oig/OjpbMC05YS1mXXsxLDR9KXswLDV9Oig/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSkpKD86JS4rKT9cXHMqJC9pLFxuXG4gIC8vIHVyaTogaHR0cHM6Ly9naXRodWIuY29tL21hZmludG9zaC9pcy1teS1qc29uLXZhbGlkL2Jsb2IvbWFzdGVyL2Zvcm1hdHMuanNcbiAgJ3VyaSc6IC9eKD86W2Etel1bYS16MC05Ky0uXSopKD86OnxcXC8pXFwvP1teXFxzXSokL2ksXG5cbiAgLy8gdXJpIGZyYWdtZW50OiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNhcHBlbmRpeC1BXG4gICd1cmktcmVmZXJlbmNlJzogL14oPzooPzpbYS16XVthLXowLTkrLS5dKjopP1xcL1xcLyk/W15cXHNdKiQvaSxcblxuICAvLyB1cmktdGVtcGxhdGU6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTcwXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgJ3VyaS10ZW1wbGF0ZSc6IC9eKD86KD86W15cXHgwMC1cXHgyMFwiJzw+JVxcXFxeYHt8fV18JVswLTlhLWZdezJ9KXxcXHtbKyMuLzs/Jj0sIUB8XT8oPzpbYS16MC05X118JVswLTlhLWZdezJ9KSsoPzo6WzEtOV1bMC05XXswLDN9fFxcKik/KD86LCg/OlthLXowLTlfXXwlWzAtOWEtZl17Mn0pKyg/OjpbMS05XVswLTldezAsM318XFwqKT8pKlxcfSkqJC9pLFxuXG4gIC8vIEZvciB0aGUgc291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9kcGVyaW5pLzcyOTI5NFxuICAvLyBGb3IgdGVzdCBjYXNlczogaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL2RlbW8vdXJsLXJlZ2V4XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgLy8gQHRvZG8gRGVsZXRlIGN1cnJlbnQgVVJMIGluIGZhdm91ciBvZiB0aGUgY29tbWVudGVkIG91dCBVUkwgcnVsZSB3aGVuIHRoaXMgYWp2IGlzc3VlIGlzIGZpeGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy83OTgzLlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIC8vIFVSTDogL14oPzooPzpodHRwcz98ZnRwKTpcXC9cXC8pKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyExMCg/OlxcLlxcZHsxLDN9KXszfSkoPyExMjcoPzpcXC5cXGR7MSwzfSl7M30pKD8hMTY5XFwuMjU0KD86XFwuXFxkezEsM30pezJ9KSg/ITE5MlxcLjE2OCg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfTAtOV0rLT8pKlthLXpcXHV7MDBhMX0tXFx1e2ZmZmZ9MC05XSspKD86XFwuKD86W2EtelxcdXswMGExfS1cXHV7ZmZmZn0wLTldKy0/KSpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfTAtOV0rKSooPzpcXC4oPzpbYS16XFx1ezAwYTF9LVxcdXtmZmZmfV17Mix9KSkpKD86OlxcZHsyLDV9KT8oPzpcXC9bXlxcc10qKT8kL2l1LFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICd1cmwnOiAvXig/Oig/Omh0dHBbc1xcdTAxN0ZdP3xmdHApOlxcL1xcLykoPzooPzpbXFwwLVxceDA4XFx4MEUtXFx4MUYhLVxceDlGXFx4QTEtXFx1MTY3RlxcdTE2ODEtXFx1MUZGRlxcdTIwMEItXFx1MjAyN1xcdTIwMkEtXFx1MjAyRVxcdTIwMzAtXFx1MjA1RVxcdTIwNjAtXFx1MkZGRlxcdTMwMDEtXFx1RDdGRlxcdUUwMDAtXFx1RkVGRVxcdUZGMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkrKD86Oig/OltcXDAtXFx4MDhcXHgwRS1cXHgxRiEtXFx4OUZcXHhBMS1cXHUxNjdGXFx1MTY4MS1cXHUxRkZGXFx1MjAwQi1cXHUyMDI3XFx1MjAyQS1cXHUyMDJFXFx1MjAzMC1cXHUyMDVFXFx1MjA2MC1cXHUyRkZGXFx1MzAwMS1cXHVEN0ZGXFx1RTAwMC1cXHVGRUZFXFx1RkYwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKSopP0ApPyg/Oig/ITEwKD86XFwuWzAtOV17MSwzfSl7M30pKD8hMTI3KD86XFwuWzAtOV17MSwzfSl7M30pKD8hMTY5XFwuMjU0KD86XFwuWzAtOV17MSwzfSl7Mn0pKD8hMTkyXFwuMTY4KD86XFwuWzAtOV17MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJbMC05XXwzWzAxXSkoPzpcXC5bMC05XXsxLDN9KXsyfSkoPzpbMS05XVswLTldP3wxWzAtOV1bMC05XXwyWzAxXVswLTldfDIyWzAtM10pKD86XFwuKD86MT9bMC05XXsxLDJ9fDJbMC00XVswLTldfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldWzAtOV0/fDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNF0pKXwoPzooPzooPzpbMC05S1NhLXpcXHhBMS1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkrLT8pKig/OlswLTlLU2EtelxceEExLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKSspKD86XFwuKD86KD86WzAtOUtTYS16XFx4QTEtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0pKy0/KSooPzpbMC05S1NhLXpcXHhBMS1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkrKSooPzpcXC4oPzooPzpbS1NhLXpcXHhBMS1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSl7Mix9KSkpKD86OlswLTldezIsNX0pPyg/OlxcLyg/OltcXDAtXFx4MDhcXHgwRS1cXHgxRiEtXFx4OUZcXHhBMS1cXHUxNjdGXFx1MTY4MS1cXHUxRkZGXFx1MjAwQi1cXHUyMDI3XFx1MjAyQS1cXHUyMDJFXFx1MjAzMC1cXHUyMDVFXFx1MjA2MC1cXHUyRkZGXFx1MzAwMS1cXHVEN0ZGXFx1RTAwMC1cXHVGRUZFXFx1RkYwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKSopPyQvaSxcblxuICAvLyB1dWlkOiBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM0MTIyXG4gICd1dWlkJzogL14oPzp1cm46dXVpZDopP1swLTlhLWZdezh9LSg/OlswLTlhLWZdezR9LSl7M31bMC05YS1mXXsxMn0kL2ksXG5cbiAgLy8gb3B0aW1pemVkIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL29sbW9rcmFtZXIvODJjY2NlNjczZjg2ZGI3Y2RhNWVcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAnY29sb3InOiAvXlxccyooIyg/OltcXGRhLWZdezN9KXsxLDJ9fHJnYlxcKCg/OlxcZHsxLDN9LFxccyopezJ9XFxkezEsM31cXCl8cmdiYVxcKCg/OlxcZHsxLDN9LFxccyopezN9XFxkKlxcLj9cXGQrXFwpfGhzbFxcKFxcZHsxLDN9KD86LFxccypcXGR7MSwzfSUpezJ9XFwpfGhzbGFcXChcXGR7MSwzfSg/OixcXHMqXFxkezEsM30lKXsyfSxcXHMqXFxkKlxcLj9cXGQrXFwpKVxccyokL2dpLFxuXG4gIC8vIEpTT04tcG9pbnRlcjogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY5MDFcbiAgJ2pzb24tcG9pbnRlcic6IC9eKD86XFwvKD86W15+L118fjB8fjEpKikqJHxeIyg/OlxcLyg/OlthLXowLTlfXFwtLiEkJicoKSorLDs6PUBdfCVbMC05YS1mXXsyfXx+MHx+MSkqKSokL2ksXG5cbiAgJ3JlbGF0aXZlLWpzb24tcG9pbnRlcic6IC9eKD86MHxbMS05XVswLTldKikoPzojfCg/OlxcLyg/Oltefi9dfH4wfH4xKSopKikkLyxcblxuICAncmVnZXgnOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgaWYgKC9bXlxcXFxdXFxcXFovLnRlc3Qoc3RyKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG59O1xuXG5leHBvcnQgdHlwZSBKc29uU2NoZW1hRm9ybWF0TmFtZXMgPVxuICAnZGF0ZScgfCAndGltZScgfCAnZGF0ZS10aW1lJyB8ICdlbWFpbCcgfCAnaG9zdG5hbWUnIHwgJ2lwdjQnIHwgJ2lwdjYnIHxcbiAgJ3VyaScgfCAndXJpLXJlZmVyZW5jZScgfCAndXJpLXRlbXBsYXRlJyB8ICd1cmwnIHwgJ3V1aWQnIHwgJ2NvbG9yJyB8XG4gICdqc29uLXBvaW50ZXInIHwgJ3JlbGF0aXZlLWpzb24tcG9pbnRlcicgfCAncmVnZXgnO1xuIl19