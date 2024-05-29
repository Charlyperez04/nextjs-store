interface CategoryProps{
    params:{
        categories:string[],
        searchParams?:string
    }
}

export default function Category(props:CategoryProps){
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    const {categories} = props.params
    return(
        <h1>Categoria dinamica: {categories}</h1>
    )
}