'use client';
import { COUNTRIES_CODES, POSITIONS } from '@/utils';
import useSuggestion from './useSuggestion';

function SuggestionEdit() {
  const { register, handleSuggestionSubmit, errors } = useSuggestion();
  return (
    <div className=''>
      <form onSubmit={handleSuggestionSubmit} className={'flex flex-col gap-2 font-light'}>
        <div className="text-white">
          <p className="mb-2 font-extrabold text-blue-900 text-2xl text-center mt-2">
            Quelles sont vos attentes pour cette video
          </p>
          <p>
            Nous voulons que cette video vous soit bénéfique. En quelques mots, quelles sont vos
            attentes pour cette video
          </p>
        </div>

        {/* titre */}
        <div className="flex flex-col text-xl text-slate-100 px-4">
          <label>Quel est le titre de votre vidéo</label>
          <input
            className="p-2 text-black rounded-m text-xl"
            type="text"
            placeholder="Titre idéal pour la vidéo"
            {...register('title')}
          />
          <p className="text-rose-800">{errors?.title && 'Veuillez entrer un titre'}</p>
        </div>

        {/* description */}
        <div className="flex flex-col text-xl text-slate-100 px-4">
          <label>{`Qu'attendez vous de voir dans cette vidéo`}</label>
          <textarea
            className="p-2 text-black rounded-m text-xl"
            placeholder="Entrez la description"
            {...register('description')}
            rows={4}
          />
          <p className="text-rose-800">
            {errors?.description && 'Veuillez entrer une description'}
          </p>
        </div>

        {/* tag */}
        <div className="flex flex-col text-xl text-slate-100 px-4">
          <label>Vous etes...</label>
          <select className="p-2 text-black rounded-m text-xl" {...register('author.position')}>
            <option value="text-black">Selectionnez ce qui vous represente le plus</option>
            {POSITIONS.map((tag, idx) => (
              <option key={tag + idx} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <p className="text-rose-800">
            {errors &&
              errors.author &&
              errors.author.position &&
              'Veuillez nous indiquer ce que vous etes.'}
          </p>
        </div>

        {/* nom */}
        <div className="flex flex-col text-xl text-slate-100 px-4">
          <label>Votre nom</label>

          <input
            className="p-2 text-black rounded-m text-xl"
            {...register('author.nom')}
            type="text"
            placeholder="Entrez votre nom"
          />
          <p className="text-rose-800">
            {errors &&
              errors.author &&
              errors.author.position &&
              'Veuillez nous indiquer notre nom.'}
          </p>
        </div>

        {/* email */}
        <div className="flex flex-col text-xl text-slate-100 px-4">
          <label>Votre email</label>
          <input
            className="p-2 text-black rounded-m text-xl"
            type="email"
            {...register('author.email')}
            placeholder="Entrez votre email"
          />
          <p className="text-rose-800">
            {errors &&
              errors.author &&
              errors.author.position &&
              'Veuillez nous indiquer notre email.'}
          </p>
        </div>

        {/* index telephonique */}
        <div className="flex flex-col text-xl text-slate-100 px-4">
          <label>Votre pays</label>
          <select className="p-2 text-black rounded-m text-xl" {...register('author.phoneIndex')}>
            <option value="">Votre pays</option>
            {COUNTRIES_CODES.map(({ name, dial_code, code }, idx) => (
              <option {...{ code }} key={`${code}-${idx}`} value={dial_code}>
                {`${name} (${dial_code})`}
              </option>
            ))}
          </select>
          <p className="text-rose-800">
            {errors &&
              errors.author &&
              errors.author.position &&
              'Veuillez nous indiquer votre pays.'}
          </p>
        </div>

        {/* numero de telephone */}
        <div className="flex flex-col text-xl text-slate-100 px-4">
          <label>Numéro de téléphone</label>
          <input
            className="p-2 text-black rounded-m text-xl"
            {...register('author.phone')}
            type="number"
            placeholder="Entrez votre numero"
          />
          <p className="text-rose-800">
            {errors &&
              errors.author &&
              errors.author.position &&
              'Veuillez nous indiquer votre téléphone.'}
          </p>
        </div>

        <div className="flex flex-col text-xl text-slate-100 px-4">
          <button type="submit" className={'bg-blue-600 shadow-sm rounded-m py-3'}>
            Transmettre
          </button>
        </div>
      </form>
    </div>
  );
}

export default SuggestionEdit;
