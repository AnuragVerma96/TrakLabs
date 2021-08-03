function ModEmp() {
    return(
        <div>
            <form>
        <label>First Name:</label> <input type="text" placeholder="First Name" required></input> <br/>
        <label>Last Name:</label> <input type="text" placeholder="Last Name" required></input> <br/>
        <label>Email ID:</label> <input type="email" placeholder="Email ID" required></input> <br/>
        <label>Department:</label> <input list="department"></input><br/>
        <label>Phone:</label> <input type="tel" placeholder="Phone Number" required></input> <br/>
        <label>DOB:</label> <input type="date" placeholder="DOB" required></input> <br/>
            </form>
            <button>Save</button>
        </div>
        );
    }

export default ModEmp;