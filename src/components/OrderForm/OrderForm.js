import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchAddressesRequest} from '../../modules/Addresses/actions';
import {fetchRouteRequest} from '../../modules/Routes';
import {getIsLoading, getLoadError, getAddressesList} from "../../modules/Addresses/selectors";
import { useForm } from 'react-hook-form';
import InputAutocomplete from '../../elements/InputAutocomplete';
import Button from '../../elements/Button';
import Loader from "../../elements/Loader";
import ErrorMessage from "../../elements/ErrorMessage";

const OrderForm = ()=> {
    const [addresses, setAddresses] = useState({
        addressFrom: '',
        addressTo: '',
        addressesList: []
    });
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading),
        error = useSelector(getLoadError),
        addressesList = useSelector(getAddressesList);

    useEffect(()=>{
        dispatch(fetchAddressesRequest());
    },[dispatch]);

    useEffect((addresses)=>{
        setAddresses({...addresses, addressesList: addressesList});
    },[dispatch, addressesList]);

    const handleOnSubmit = (data) => {
        dispatch(fetchRouteRequest(data));
    };
    const handlerInputChange = (inputData) => {
        setAddresses({...addresses, ...inputData});
    };

    const { register, handleSubmit, errors } = useForm({
        mode: "onSubmit"
    });

    return (
        <>
            <form className="routeForm" onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="routeLine"></div>
                <InputAutocomplete
                    label="Откуда"
                    type="text"
                    name="addressFrom"
                    ref={register({required: "This is required"})}
                    errors={errors}
                    changeHandler={handlerInputChange}
                    itemList={addresses.addressesList}
                />
                <InputAutocomplete
                    label="Куда"
                    type="text"
                    name="addressTo"
                    ref={register({required: "This is required"})}
                    errors={errors}
                    changeHandler={handlerInputChange}
                    itemList={addresses.addressesList}
                />
                <Loader isLoading={isLoading}/>
                <ErrorMessage error={error}/>
                <Button text="Вызвать такси" />
            </form>
        </>
    );
};

export default OrderForm;