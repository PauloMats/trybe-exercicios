const calculateAge = (birthday: Date) => {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    }   

    const Age = () => {
    const age = calculateAge(new Date(1998, 1, 17));
    return (
        <div className="age">
        <h1>Age</h1>
        <h2>{age}</h2>
        </div>
    );
    }

export default Age