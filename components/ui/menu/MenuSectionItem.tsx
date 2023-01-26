import Link from 'next/link';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import BootstrapIcon from '../BootstrapIcon';

const MenuSectionItem = (props: { item: any }) => {
    const selectedOption = useAppSelector((state) => state.menuBar.selOption);
    const dispatch = useAppDispatch();

    const itemDetails = props.item;

    const itemColors: string =
        selectedOption == itemDetails.sectionName
            ? 'text-dark-white bg-light-blue dark:bg-dark-blue rounded'
            : 'text-light-black dark:text-dark-white';

    const iconColors: string =
        selectedOption == itemDetails.sectionName
            ? 'text-dark-white'
            : 'text-light-blue dark:text-dark-blue';

    const itemClicked = () => {
        console.log('Item clicked');
        dispatch({
            type: 'menuBar/setSelOption',
            payload: itemDetails.sectionName,
        });
    };

    return (
        <Link
            href={'/' + itemDetails.sectionName.replaceAll(' ', '-')}
            onClick={itemClicked}
        >
            <div className={'flex py-[1px] ' + itemColors}>
                <BootstrapIcon
                    className='px-2'
                    icon={itemDetails.sectionIcon}
                    color={iconColors}
                />
                <p className={'capitalize'}>{itemDetails.sectionName}</p>
            </div>
        </Link>
    );
};

export default MenuSectionItem;
