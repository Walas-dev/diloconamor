import Button from '../Ui/Button'
import CategoryCarousel from './categoryCarousel'

const ContentBottom = () => (
    <div className="w-full flex flex-col items-center xl:items-start animate-fade-up [animation-delay:300ms]">
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 justify-center xl:justify-start">
            <Button name="Ver Catálogo" url="#catalogo" variant="primary">Ver Catálogo</Button>
        </div>
        <CategoryCarousel />
    </div>
)
export default ContentBottom