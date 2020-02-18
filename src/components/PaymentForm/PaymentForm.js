import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {postCardRequest, getCardRequest} from "../../modules/Profile/actions";
import {getToken, getCard, getHasCard, getIsLoading, getError} from "../../modules/Profile/selectors";
import { useForm } from 'react-hook-form';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import Loader from "../../elements/Loader";
import ErrorMessage from "../../elements/ErrorMessage";

const PaymentForm = () => {
    const [card, setCard] = useState({
        token: '',
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: ''
    });
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading),
        error = useSelector(getError),
        hasCard = useSelector(getHasCard),
        cardData = useSelector(getCard),
        token = useSelector(getToken);

    useEffect((card)=>{
        setCard({...card, ...cardData});
    },[dispatch,cardData]);

    useEffect((token)=>{
        dispatch(getCardRequest(token));
    },[dispatch]);

    useEffect((card)=>{
        setCard({...card, ...cardData});
    },[dispatch, cardData]);

    const handleOnSubmit = (data) => {
        // e.preventDefault();
        dispatch(postCardRequest(card));
    };
    const handlerInputChange = ({ name, value }) => {
        setCard({...card, [name]: value});
    };

    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    return (
        <form className="paymentForm" onSubmit={handleSubmit(handleOnSubmit)}>
            <h1>
                Профиль
                <small>Способ оплаты</small>
            </h1>
            <div className="fieldSet">
                <fieldset className="card">
                    <div className="cardIco"></div>
                    <Input
                        label="Номер карты:"
                        type="text"
                        name="cardNumber"
                        // value={card.cardNumber}
                        ref={register({
                            required: "This is required",
                            minLength: {
                                value: 16,
                                message: "Length is 16"
                            },
                            maxLength: {
                                value: 16,
                                message: "Length is 16"
                            }
                        })}
                        errors={errors}
                        changeHandler={handlerInputChange}
                    />
                    <Input
                        label="Срок действия:"
                        type="text"
                        name="expiryDate"
                        // value={card.expiryDate}
                        ref={register({
                            required: "This is required",
                            pattern: {
                                value: /^\d{1,2}\.\d{1,2}$/,
                                message: "Invalid"
                            }
                        })}
                        errors={errors}
                        changeHandler={handlerInputChange}
                    />
                </fieldset>
                <fieldset className="card">
                    <Input
                        label="Имя владельца:"
                        type="text"
                        name="cardName"
                        // value={card.cardName}
                        ref={register({required: "This is required"})}
                        errors={errors}
                        changeHandler={handlerInputChange}
                    />
                    <Input
                        label="CVC:"
                        type="password"
                        name="cvc"
                        // value={card.cvc}
                        ref={register({
                            required: "This is required",
                            pattern: {
                                value: /^\d{3}$/,
                                message: "three-digit number"
                            }
                        })}
                        errors={errors}
                        changeHandler={handlerInputChange}
                    />
                </fieldset>
            </div>
            <Loader isLoading={isLoading}/>
            <ErrorMessage error={error}/>
            <Button text="Сохранить" />
            <div className="toolTip"></div>
        </form>
    );
};

export default PaymentForm;