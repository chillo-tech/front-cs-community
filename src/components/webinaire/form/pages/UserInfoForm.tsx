import formStyles from "@/styles/Form.module.css";
import { useContext } from "react";
import { context } from "../../../../context/WebinaireContext";

import PhoneInput from "react-phone-input-2";
import fr from "react-phone-input-2/lang/fr.json";
import "react-phone-input-2/lib/style.css";

const UserInfoForm = () => {
  const { register, errors, mutation, phoneNumber, setPhoneNumber, setValue } =
    useContext(context);
  return (
    <>
      {/* prenom */}
      <div className={formStyles.form_control}>
        <label htmlFor={`prenom`} className={formStyles.form_control__label}>
          <span className={formStyles.form_control__label__first}>
            Votre prénom
          </span>
        </label>
        <input
          type="text"
          id={`prenom`}
          className={formStyles.form_control__input}
          placeholder={"Veuillez entrer votre prénom"}
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className={formStyles.form_control__error}>
            Veuillez indiquer votre prénom{" "}
          </p>
        )}
      </div>

      {/* nom */}
      <div className={formStyles.form_control}>
        <label htmlFor={`nom`} className={formStyles.form_control__label}>
          <span className={formStyles.form_control__label__first}>
            Votre nom
          </span>
        </label>
        <input
          type="text"
          id={`nom`}
          className={formStyles.form_control__input}
          placeholder={"Veuillez entrer votre nom"}
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className={formStyles.form_control__error}>
            Veuillez indiquer votre nom{" "}
          </p>
        )}
      </div>

      {/* email */}
      <div className={formStyles.form_control}>
        <label htmlFor={`email`} className={formStyles.form_control__label}>
          <span className={formStyles.form_control__label__first}>
            Votre email
          </span>
        </label>
        <input
          type="text"
          id={`email`}
          className={formStyles.form_control__input}
          placeholder={"Veuillez entrer votre email"}
          {...register("email")}
        />
        {errors.email && (
          <p className={formStyles.form_control__error}>
            Veuillez indiquer votre email{" "}
          </p>
        )}
      </div>

      {/* numero telephone */}
      <div className={`${formStyles.form_control}`}>
        <label
          htmlFor={`numero_telephone`}
          className={formStyles.form_control__label}
        >
          <span className={formStyles.form_control__label__first}>
            Votre numéro de téléphone
          </span>
        </label>

        <PhoneInput
          localization={fr}
          country={"fr"}
          onBlur={register("phoneNumber").onBlur}
          value={phoneNumber}
          inputClass={"!h-auto !w-full"}
          containerClass={formStyles.form_control__input}
          onChange={(value, data) => {
            if (!("dialCode" in data)) return;
            setPhoneNumber(
              `${value ? data.dialCode : ""}${value.slice(
                data.dialCode.length
              )}`
            );
            setValue("phoneIndex", `+${data.dialCode}`);
            setValue("phoneNumber", value.slice(data.dialCode.length));
          }}
          disabled={mutation.isLoading}
        />
        {errors.phoneNumber && (
          <p className={formStyles.form_control__error}>
            Veuillez indiquer votre numéro de téléphone{" "}
          </p>
        )}
      </div>
    </>
  );
};

export { UserInfoForm };
