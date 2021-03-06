import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
	const { interviewers } = props;
	const [student, setStudent] = useState(props.student || "");
	const [interviewer, setInterviewer] = useState(props.interviewer || null);
	const [error, setError] = useState("");

	function validate() {
		if (student === "") {
			setError("Student name cannot be blank");
			return;
		}
		if(student.length>256) {
			setError("Student name cannot be more than 256 characters");
			return;
		}
		if (!interviewer) {
			setError('Must select an interviewer')
			return;
		}
		setError("");
		props.onSave(student, interviewer);
	}

	function reset() {
		setStudent("");
		setInterviewer(null);
	}

	function cancel() {
		reset();
		props.onCancel();
	}

	return (
		<main className="appointment__card appointment__card--create">
			<section className="appointment__card-left">
				<form autoComplete="off" onSubmit={event => event.preventDefault()}>
					<input
						className="appointment__create-input text--semi-bold"
						name="name"
						type="text"
						value={student}
						onChange={(event) => setStudent(event.target.value)}
						placeholder="Enter Student Name"
						data-testid="student-name-input"
					/>
				</form>

				<section className="appointment__validation">{error}</section>

				<InterviewerList
					interviewers={interviewers}
					interviewer={interviewer}
					value={interviewer}
					onChange={(value) => setInterviewer(value)}
				/>
			</section>

			<section className="appointment__card-right">
				<section className="appointment__actions">
					<Button danger onClick={cancel}>Cancel</Button>
					<Button confirm onClick={validate}>Save</Button>
				</section>
			</section>
		</main>
	);
}