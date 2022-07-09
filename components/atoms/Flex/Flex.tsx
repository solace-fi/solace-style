import classNames from "classnames";
import { FlexType, GeneralElementType } from "../../types";

export default function Flex({
    ...rest
}: FlexType & GeneralElementType) {
    return (
        <div className={classNames("flex",
        rest.className,
        {
            'flex-row': rest.direction === 'row',
            'flex-col': rest.direction === 'col',
            'flex-col-reverse': rest.direction === 'col-reverse',
            'flex-row-reverse': rest.direction === 'row-reverse',

            'justify-start': rest.justifycontent === 'start',
            'justify-end': rest.justifycontent === 'end',
            'justify-center': rest.justifycontent === 'center',
            'justify-between': rest.justifycontent === 'between',
            'justify-around': rest.justifycontent === 'around',
            'justify-evenly': rest.justifycontent === 'evenly',

            'justify-items-start': rest.justifyitems === 'start',
            'justify-items-end': rest.justifyitems === 'end',
            'justify-items-center': rest.justifyitems === 'center',
            'justify-items-stretch': rest.justifyitems === 'stretch',

            'content-center': rest.aligncontent === 'center',
            'content-start': rest.aligncontent === 'start',
            'content-end': rest.aligncontent === 'end',
            'content-between': rest.aligncontent === 'between',
            'content-around': rest.aligncontent === 'around',
            'content-evenly': rest.aligncontent === 'evenly',

            'items-center': rest.alignitems === 'center',
            'items-start': rest.alignitems === 'start',
            'items-end': rest.alignitems === 'end',
            'items-stretch': rest.alignitems === 'stretch',
            'items-baseline': rest.alignitems === 'baseline',

            'flex-wrap': rest.wrap === 'wrap',
            'flex-wrap-reverse': rest.wrap === 'wrap-reverse',
            'flex-nowrap': rest.wrap === 'nowrap',
        })}>
            {rest.children}
        </div>
    )
}