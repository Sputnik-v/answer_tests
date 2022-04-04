import React, {Component} from 'react';
import ActiveQuiz from '../../components/activeQuiz/ActiveQuiz';
import FinishQuiz from '../../components/finishQuiz/finishQuiz';
import './quiz.css';

class Quiz extends Component {


    state = {
        results:{},
        end: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {   question: 'Сколько букв в русском алфавите?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    {text: 'Тридцать два', id: 1},
                    {text: 'Тридцать один', id: 2},
                    {text: 'Тридцать три', id: 3},
                    {text: 'Тридцать шесть', id: 4}
                ]
            },
            {   question: 'Похожие по смыслу слова или выражения?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Синонимы', id: 1},
                    {text: 'Антонимы', id: 2},
                    {text: 'Векторы', id: 3},
                    {text: 'Афоризмы', id: 4}
                ]
            },
            {   question: 'Как пишется правилно слово?',
                rightAnswerId: 2,
                id: 3,
                answers: [
                    {text: 'Компромис', id: 1},
                    {text: 'Компромисс', id: 2},
                    {text: 'Кампромис', id: 3},
                    {text: 'Компрамисс', id: 4}
                ]
            }
            
        ]
    }

    
    componentDidMount(){
        if (this.props.textBtn === 'Geography') {
            this.setState({
                results:{},
                end: false,
                activeQuestion: 0,
                answerState: null,
                quiz: [
            {   question: 'Самая большая река в мире?',
                rightAnswerId: 4,
                id: 1,
                answers: [
                    {text: 'Амазонка', id: 1},
                    {text: 'Волга', id: 2},
                    {text: 'Мисиссипи', id: 3},
                    {text: 'Нил', id: 4}
                ]
            },
            {   question: 'Страна, имеющая самое большое число временных поясов?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Россия', id: 1},
                    {text: 'Аргентина', id: 2},
                    {text: 'Сша', id: 3},
                    {text: 'Австралия', id: 4}
                ]
            },
            {   question: 'На каком материке располагается страна Гана?',
                rightAnswerId: 4,
                id: 3,
                answers: [
                    {text: 'Северная Америка', id: 1},
                    {text: 'Южная Америка', id: 2},
                    {text: 'Евразия', id: 3},
                    {text: 'Африка', id: 4}
                ]
            }
            
            ]
            })
        }

        if (this.props.textBtn === 'Matematics') {
            this.setState({
                results:{},
                end: false,
                activeQuestion: 0,
                answerState: null,
                quiz: [
            {   question: 'Какого математического действия нет?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Сложения', id: 1},
                    {text: 'Модулирование', id: 2},
                    {text: 'Вычитание', id: 3},
                    {text: 'Умножение', id: 4}
                ]
            },
            {   question: 'Кто из этих ученных математик?',
                rightAnswerId: 4,
                id: 2,
                answers: [
                    {text: 'Ломоносов', id: 1},
                    {text: 'Ленин', id: 2},
                    {text: 'Менделеев', id: 3},
                    {text: 'Циалковский', id: 4}
                ]
            },
            {   question: 'Десять умножить на двенадцать и разделить на двенадцать?',
                rightAnswerId: 3,
                id: 3,
                answers: [
                    {text: 'Сто двадцать', id: 1},
                    {text: 'Двенадцать', id: 2},
                    {text: 'Десять', id: 3},
                    {text: 'Пять', id: 4}
                ]
            }
            
            ]
            })
        }


        if (this.props.textBtn === 'History') {
            this.setState({
                results:{},
                end: false,
                activeQuestion: 0,
                answerState: null,
                quiz: [
            {   question: 'В каком году началась Первая Мировая Война?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: '1914 год', id: 1},
                    {text: '1915 год', id: 2},
                    {text: '1916 год', id: 3},
                    {text: '1917 год', id: 4}
                ]
            },
            {   question: 'Чьи войска напали на Россию в 1812 году?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Наполеона', id: 1},
                    {text: 'Гитлера', id: 2},
                    {text: 'Карла', id: 3},
                    {text: 'Муссолини', id: 4}
                ]
            },
            {   question: 'Стал генсеком ЦК КПСС после Хрущева?',
                rightAnswerId: 4,
                id: 3,
                answers: [
                    {text: 'Андропов', id: 1},
                    {text: 'Сталин', id: 2},
                    {text: 'Черненко', id: 3},
                    {text: 'Брежнев', id: 4}
                ]
            }
            
            ]
            })
        }


        if (this.props.textBtn === 'Flora and Fauna') {
            this.setState({
                results:{},
                end: false,
                activeQuestion: 0,
                answerState: null,
                quiz: [
            {   question: 'Самое большое млекопитающее на Земле?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Слон', id: 1},
                    {text: 'Кит', id: 2},
                    {text: 'Бегемот', id: 3},
                    {text: 'Носорог', id: 4}
                ]
            },
            {   question: 'Дерево, у которого опадают иголки на зиму?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: 'Секвоя', id: 1},
                    {text: 'Пихта', id: 2},
                    {text: 'Лиственница', id: 3},
                    {text: 'Сосна', id: 4}
                ]
            },
            {   question: 'Животное, которое ложится в спячку на зиму?',
                rightAnswerId: 4,
                id: 3,
                answers: [
                    {text: 'Бобр', id: 1},
                    {text: 'Белка', id: 2},
                    {text: 'Заяц', id: 3},
                    {text: 'Медведь', id: 4}
                ]
            }
            
            ]
            })
        }

    }


    onAswerClickHandler = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                   this.setState({
                       end: true
                   })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout);

            }, 500)

        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            })
        }
    }

    isQuizFinished = () => {
        
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }
    
    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            end: false,
            results: {}
        })
    }


    render() {
        
        let titleAppText = '';
        
        switch (this.props.textBtn) {
            case 'Russian language':
                titleAppText = 'Russian Test'
                break;
            case 'Geography':
                titleAppText = 'Geography Test'
                break;
            case 'Matematics':
                titleAppText = 'Matematics Test'
                break;
            case 'History':
                titleAppText = 'History Test'
                break;
            case 'Flora and Fauna':
                titleAppText = 'Flora and Fauna Test'
                break;                
        }



        return (
            <div className='quiz'>
                <h2 className='quiz__title'>{titleAppText}</h2>
                <div className='container'>
                    
                    {this.state.end

                     ? <FinishQuiz 
                     results={this.state.results} 
                     quiz={this.state.quiz}
                     onRetry={this.retryHandler}
                     />

                     : <ActiveQuiz 
                     answers={this.state.quiz[this.state.activeQuestion].answers}
                     question={this.state.quiz[this.state.activeQuestion].question}
                     onAnswerClick={this.onAswerClickHandler}
                     quizLength={this.state.quiz.length}
                     answerNumber={this.state.activeQuestion + 1}
                     state={this.state.answerState}
                     />}

                </div>
            </div>
            
        )
    }
}

export default Quiz;