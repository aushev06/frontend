import styles from './SpecialistPage.module.scss'
import UserCard from "../../UserCard";
import UserMiniCard from "../../UserMiniCard";
import {LoadMore} from "../../LoadMore";
import {SideBlock} from "../../SideBlock";
import {MenuList} from "../../MenuList";
import React from "react";
import {SpecialistCategoriesMenuList} from "../../SpecialistCategoriesMenuList";
import {Pagination, SpecialistCategory, User} from "../../../interfaces";
import {getSpecialists} from "../../../services/api/SpecialistsApi";
import {useAllMQ} from "../../../utils/useAllMQ";
import clsx from "clsx";
import {SelectFilterField} from "../../SelectFilterField";

type Props = {
    categories: SpecialistCategory[],
    initialSpecialistData: Pagination<User>
}
export const SpecialistPageComponent = ({ initialSpecialistData, categories }: Props) => {
    const [specialists, setSpecialists] = React.useState<User[]>(initialSpecialistData.data as User[]);
    const [paginationData, setPaginationData] = React.useState(initialSpecialistData);
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [searchParams, setSearchParams] = React.useState<{}>({is_specialist: true});

    const useMq = useAllMQ();

    const handleSelect = async (category: string) => {
        setSelectedCategory(category === selectedCategory ? '' : category)
        setSearchParams({...searchParams, positions: category === selectedCategory ? undefined : category, page: 1})
    }

    const handleClick = async () => {
        const splitPage = paginationData.meta.next_page_url.split('page=')
        const page = splitPage[splitPage.length - 1];

        setSearchParams({...searchParams, page})
    }

    React.useEffect(() => {
        const runEffect = async () => {
            const data = await getSpecialists(searchParams);

            setSpecialists(data.data);
            setPaginationData(data);
        }

        runEffect();

    }, [searchParams])


    const handleSelectReadyWork = (status: string) => {
        const boolStatus = status === 'Доступен';

        setSearchParams({...searchParams, ready_for_work: status.length ? boolStatus : undefined})
        console.log(status);
    }

    return (
        <div className={'wrapper'}>
            {!useMq.isXS && (
                <div className={'left-side'}>
                    <SideBlock name={'Категории'}>
                        <SpecialistCategoriesMenuList
                            onClick={handleSelect}
                            items={categories.map(item => ({
                                name: item.position,
                                count: item.count,
                                isActive: item.position === selectedCategory
                            }))}
                        />
                    </SideBlock>
                </div>
            )}
            <div className={clsx('content', 'd-block')} style={{alignItems: 'normal'}}>
                <div className={styles.header}>
                    <h1>Специалисты</h1>
                    <span>Список ИТ специалистов Ингушетии</span>
                </div>

                <div className={styles.filters}>
                    <SelectFilterField fields={['Доступен', 'Не доступен']} onSelect={handleSelectReadyWork} />
                    <SelectFilterField fields={categories.map(c => c.position)} onSelect={handleSelect} />
                </div>

                <div>
                    {specialists?.map((spec, idx) =>  <UserMiniCard
                        avatar={spec.avatar}
                        key={`${spec.id}`}
                        nickname={spec.name}
                        profession={spec?.position || 'Описание отсутсвует'}
                        status={spec.description}
                        readyForWork={spec.ready_for_work}
                        links={[{key: 'facebook', value: 'https://facebook.com'}]}
                        id={spec.id}
                    />)}

                    {paginationData.meta.next_page_url && <LoadMore onClick={handleClick} />}
                </div>
            </div>

            <div className={'right-side'}></div>

        </div>
    )
}
