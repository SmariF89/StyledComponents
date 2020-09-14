import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import ProgressBar from './components/ProgressBar/ProgressBar';
import NameCard from './components/NameCard/NameCard';
import TimePicker from './components/TimePicker/TimePicker';
import DatePicker from './components/DatePicker/DatePicker';
import Row from './components/Row/Row';
import Col from './components/Col/Col';
import Carousel from './components/Carousel/Carousel';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tabs/Tab';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            time: '',
            date: '',
            tab: 1
        };
    }

    render() {
        return (
            <div className="App">
                <h1>InfinityModules testground</h1>
                <h2>Modal</h2>
                    <div>
                        <button onClick= {() => this.setState({ isOpen: true })}>Test modal</button>
                        <Modal
                        isOpen={this.state.isOpen}
                        onClose={() => this.setState({ isOpen: false })}>
                            <Modal.Title>My Modal Title</Modal.Title>
                            <Modal.Body>My Modal Body</Modal.Body>
                            <Modal.Footer>My Modal Footer</Modal.Footer>
                        </Modal>
                    </div>
                <h2>ProgressBar</h2> {/* Animated is yet to be implemented */}
                    <div>
                        <p>default</p>
                        <ProgressBar />
                        <p>progress: 5, unstriped, unanimated, state: info</p>
                        <ProgressBar progress={5}
                                     striped={false}
                                     animated={false}
                                     state='info' />
                        <p>progress: 10, unstriped, animated, state: info</p>
                        <ProgressBar progress={10}
                                     striped={false}
                                     animated={true}
                                     state='info' />
                        <p>progress: 15, striped, unanimated, state: info</p>
                        <ProgressBar progress={15}
                                     striped={true}
                                     animated={false}
                                     state='info' />
                        <p>progress: 20, striped, animated, state: info</p>
                        <ProgressBar progress={20}
                                     striped={true}
                                     animated={true}
                                     state='info' />
                        <p>progress: 25, unstriped, unanimated, state: success</p>
                        <ProgressBar progress={25}
                                     striped={false}
                                     animated={false}
                                     state='success' />
                        <p>progress: 30, unstriped, animated, state: success</p>
                        <ProgressBar progress={30}
                                     striped={false}
                                     animated={true}
                                     state='success' />
                        <p>progress: 35, striped, unanimated, state: success</p>
                        <ProgressBar progress={35}
                                     striped={true}
                                     animated={false}
                                     state='success' />
                        <p>progress: 40, striped, animated, state: success</p>
                        <ProgressBar progress={40}
                                     striped={true}
                                     animated={true}
                                     state='success' />
                        <p>progress: 45, unstriped, unanimated, state: warning</p>
                        <ProgressBar progress={45}
                                     striped={false}
                                     animated={false}
                                     state='warning' />
                        <p>progress: 50, unstriped, animated, state: warning</p>
                        <ProgressBar progress={50}
                                     striped={false}
                                     animated={true}
                                     state='warning' />
                        <p>progress: 55, striped, unanimated, state: warning</p>
                        <ProgressBar progress={55}
                                     striped={true}
                                     animated={false}
                                     state='warning' />
                        <p>progress: 60, striped, animated, state: warning</p>
                        <ProgressBar progress={60}
                                     striped={true}
                                     animated={true}
                                     state='warning' />
                        <p>progress: 65, unstriped, unanimated, state: danger</p>
                        <ProgressBar progress={65}
                                     striped={false}
                                     animated={false}
                                     state='danger' />
                        <p>progress: 70, unstriped, animated, state: danger</p>
                        <ProgressBar progress={70}
                                     striped={false}
                                     animated={true}
                                     state='danger' />
                        <p>progress: 75, striped, unanimated, state: danger</p>
                        <ProgressBar progress={75}
                                     striped={true}
                                     animated={false}
                                     state='danger' />
                        <p>progress: 80, striped, animated, state: danger</p>
                        <ProgressBar progress={80}
                                     striped={true}
                                     animated={true}
                                     state='danger' />
                        <p>progress: 100, striped, animated, state: success</p>
                        <ProgressBar progress={100}
                                     striped={true}
                                     animated={true}
                                     state='success' />
                    </div>
                <h2>NameCard</h2>
                    <div>
                        <p>Default</p>
                        <NameCard />
                        <NameCard
                            name="Smári Freyr Guðmundsson"
                            email="smarifreyr30@gmail.com"
                            telephone="+3548972308"
                            imageUrl="https://avatars0.githubusercontent.com/u/24225052?s=460&u=b71c3caf367daf093dfeb3c2ca4cce54641435b0&v=4"/>
                    </div>

                <h2>Carousel</h2>
                    <div>
                      <Carousel
                        images={['https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff',
                        'https://www.dominos.is/media/1132/media-6985-prinsessan.jpg?width=400&format=jpg&quality=50&bgcolor=fff',
                        'https://www.dominos.is/media/1067/media-6920-festival1.png?width=400&format=jpg&quality=50&bgcolor=fff']}
                        size="small"
                      />
                      <Carousel
                        images={['https://www.dominos.is/media/1038/media-6891-caliente0.png?width=400&format=jpg&quality=50&bgcolor=fff',
                        'https://www.dominos.is/media/1098/media-6951-dominos_surprise.png?width=400&format=jpg&quality=50&bgcolor=fff',
                        'https://www.dominos.is/media/1003/media-6856-prima.jpg?width=400&format=jpg&quality=50&bgcolor=fff']}
                        size="medium"
                      />
                      <Carousel
                        images={['https://www.dominos.is/media/1111/media-6964-texas_bbq.png?width=400&format=jpg&quality=50&bgcolor=fff',
                        'https://www.dominos.is/media/1006/media-6859-eldorado.jpg?width=400&format=jpg&quality=50&bgcolor=fff',
                        'https://www.dominos.is/media/1096/media-6949-dominos_deluxe.png?width=400&format=jpg&quality=50&bgcolor=fff']}
                        size="large"
                      />
                    </div>

                <h2>Row and cols</h2>
                    <div>
                        <Row>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col size={4}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                            <Col size={1}></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col size={4}></Col>
                            <Col size={3}></Col>
                            <Col size={8}></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col size={12}></Col>
                            <Col size={12}></Col>
                            <Col size={14}></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col size={6}></Col>
                            <Col size={6}></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col size={8}></Col>
                            <Col size={4}></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col size={8}></Col>
                            <Col size={10}></Col>
                            <Col size={3}></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col size={1}></Col>
                            <Col size={110}></Col>
                        </Row>
                    </div>
                <h2>TimePicker</h2>
                    <div>
                        <p>Time is: <strong>{this.state.time}</strong></p>
                        <h3>AM/PM</h3>
                        <TimePicker onTimePick={time => this.setState({ time })}
                                    format={12} />
                                    <TimePicker onTimePick={time => this.setState({ time })}
                                                format={12} />
                        <h3>24H</h3>
                        <TimePicker onTimePick={time => this.setState({ time })}
                                    format={24} />
                                    <TimePicker onTimePick={time => this.setState({ time })}
                                                format={24} />
                    </div>

                <h2>DatePicker</h2>
                    <div>
                        <p>Date is: <strong>{this.state.date}</strong></p>
                        <p>Locale: en-EN</p>
                        <DatePicker onDatePick={date => this.setState({ date })}
                                    locale='en-EN' />
                                <p>Locale default: is-IS</p>
                        <DatePicker onDatePick={date => this.setState({ date })} />
                    </div>
                <h2>Tabs</h2>
                    <div>
                        <p>Selected tab: <strong>{this.state.tab}</strong></p>
                        <p>Dark theme</p>
                        <Tabs theme='dark'  onSelect={tab => this.setState({ tab })}
                              currentSelectedTab={this.state.tab}>
                            <Tab selectionKey={1} title="Tab01">
                                Hundur
                            </Tab>
                            <Tab selectionKey={2} title="Tab02">
                                Kisa
                            </Tab>
                        </Tabs>
                    </div>
                    <div>
                        <p>Light theme</p>
                        <Tabs theme='light' onSelect={tab => this.setState({ tab })}
                              currentSelectedTab={this.state.tab}>
                            <Tab selectionKey={1} title="Tab01">
                                Hundur
                            </Tab>
                            <Tab selectionKey={2} title="Tab02">
                                Kisa
                            </Tab>
                            <Tab selectionKey={3} title="Tab03">
                                Klettur
                            </Tab>
                        </Tabs>
                        <p>Horizontal light</p>
                        <Tabs theme='light' onSelect={tab => this.setState({ tab })}
                              currentSelectedTab={this.state.tab}
                              layout='vertical' >
                            <Tab selectionKey={1} title="Smári Freyr">
                                <NameCard
                                    name="Smári Freyr Guðmundsson"
                                    email="smarifreyr30@gmail.com"
                                    telephone="+3548972308"
                                    imageUrl="https://avatars0.githubusercontent.com/u/24225052?s=460&u=b71c3caf367daf093dfeb3c2ca4cce54641435b0&v=4"/>
                            </Tab>
                            <Tab selectionKey={2} title="John Doe">
                                <NameCard />
                            </Tab>
                        </Tabs>
                        <p>Horizontal dark</p>
                        <Tabs theme='dark' onSelect={tab => this.setState({ tab })}
                              currentSelectedTab={this.state.tab}
                              layout='vertical' >
                            <Tab selectionKey={1} title="Tab01">
                                Hundur
                            </Tab>
                            <Tab selectionKey={2} title="Tab02">
                                Kisa
                            </Tab>
                            <Tab selectionKey={3} title="Tab03">
                                Klettur
                            </Tab>
                        </Tabs>
                        <p>Horizontal light one tab</p>
                        <Tabs theme='light' onSelect={tab => this.setState({ tab })}
                              currentSelectedTab={this.state.tab}
                              layout='vertical' >
                            <Tab selectionKey={1} title="Tab01">
                                Kisa
                            </Tab>
                        </Tabs>
                        <p>Vertical light one tab</p>
                        <Tabs theme='light' onSelect={tab => this.setState({ tab })}
                              currentSelectedTab={this.state.tab}
                              layout='horizontal' >
                            <Tab selectionKey={1} title="Tab01">
                                Kisa
                            </Tab>
                        </Tabs>
                    </div>
            </div>
        );
      }
}

export default App;
