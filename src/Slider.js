import React, {Component} from 'react';
import {
    Carousel, CarouselControl, CarouselIndicators, CarouselItem,
} from 'reactstrap';
import mask from "./img/mask.jpg";
import background from "./img/background1.jpg";

const items = [
    {
        caption: 'У нас широчайший ассортимент услуг, связанных с мойкой автомобилей',
        header: 'Выбор'
    },
    {
        caption: 'Вы можете быть спокойны, ваш автомобиль вы отдаете в надежные руки',
        header: 'Ответственный подход'
    },
    {
        caption: 'У нас работают профессионалы высокого класса',
        header: 'Опыт'
    },
    {
        caption: 'На наших автомойках применяется только качественная автохимия и современное оборудование',
        header: 'Качество'

    },
    {
        caption: 'Невысокие цены и большое количество точек гарантируют ваш комфорт',
        header: 'Доступность'
    }
];






export default class Slider extends Component{

    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    style={{height:"100%"}}
                >
                    <div style={{

                        alignItems:"center",
                        display:"flex",
                        justifyContent: "center",

                        width: "100%",
                        height:"100%",

                    }}>
                        <div>
                            <h1 className="mb-3">{item.header}</h1>
                            <h4 className="mb-3">{item.caption}</h4>
                            <a className="btn btn-outline-light btn-lg" href="#!" role="button">Записаться</a>
                        </div>

                    </div>

                </CarouselItem>
            );
        });



        return <div style={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `url(${background}`,
            height:"100%"
        }}>
            <div
                style={{
                    opacity: 0.7,
                    backgroundImage: `url(${mask}`,
                    backgroundRepeat: 'repeat',
                    width: "100%",
                    height:"100%",
                }}>
                <div className="d-flex justify-content-center align-items-center" style={{textAlign:"center", height:"100%"}}>
                    <div className="text-white justify-content-center align-items-center" style={{width: "100%", height:"100%", verticalAlign:"middle"}}>
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                            style={{height:"90%"}}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>


    }



}