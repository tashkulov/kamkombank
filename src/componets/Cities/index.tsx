import React, { useEffect, useState } from "react";
import Title from "@/ui/Title";
import "swiper/css";
import Modal from "@/ui/Modal";
import Input from "@/ui/Input";
import Loader from "@/ui/Loader";
import { useSelector } from "react-redux";
import { getCitiesState } from "@/store/cities/selector";
import { City } from "@/store/cities/types";
import { citiesSlice } from "@/store/cities/reducer";
import clx from "classnames";
import { citiesWrapper, cityItem, current } from "@/componets/Cities/style";
import { useAppDispatch } from "@/store";
import { getCities } from "@/store/cities/actions";

type TProps = {
  onClose: () => void;
};

const Cities: React.FC<TProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const citiesState = useSelector(getCitiesState);
  const [isCitiesLoaded, setIsCitiesLoaded] = useState(false);

  const onSubmit = (val: City) => {
    dispatch(citiesSlice.actions.setCurrentCity(val));
    onClose();
  };

  useEffect(() => {
    let isMounted = true;

    const loadCities = async () => {
      await dispatch(getCities());
      if (isMounted) {
        setIsCitiesLoaded(true);
      }
    };

    loadCities();

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  return (
    <Modal isOpen={isCitiesLoaded} onClose={onClose}>
      {citiesState.loading ? (
        <Loader loadingText="Подождите, идет загрузка" />
      ) : (
        <>
          <Title.H3>Выбор города</Title.H3>
          <div className={citiesWrapper}>
            {citiesState.cities.length > 0 ? (
              citiesState.cities.map((item: City, index: number) => (
                <div
                  className={clx(
                    cityItem,
                    item.id === citiesState.current.id && current,
                  )}
                  onClick={() => {
                    onSubmit(item);
                  }}
                  key={`city_${index}`}
                >
                  {item.name}
                </div>
              ))
            ) : (
              <div>Нет доступных городов</div>
            )}
          </div>
        </>
      )}
    </Modal>
  );
};



export default Cities;
