import { useState } from 'react';
import {
    FaCheckCircle,
    FaEnvelope,
    FaPaperPlane,
    FaRedo,
} from 'react-icons/fa';

import { contactContent } from '../data/mockData';

const initialValues = {
    name: '',
    email: '',
    subject: 'Project',
    message: '',
};

const fieldClass =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-100';

const validate = (values) => {
    const errors = {};

    if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
        errors.email = 'Enter a valid email address.';
    if (values.message.trim().length < 10)
        errors.message = 'Tell me a little more (at least 10 characters).';

    return errors;
};

export const ContactForm = () => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((previous) => ({ ...previous, [name]: value }));

        if (errors[name])
            setErrors((previous) => ({ ...previous, [name]: undefined }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length === 0) setSubmitted(true);
    };

    const handleReset = () => {
        setValues(initialValues);
        setErrors({});
        setSubmitted(false);
    };

    if (submitted) {
        const mailto = `mailto:${contactContent.email}?subject=${encodeURIComponent(
            `[Portfolio] ${values.subject} — ${values.name}`
        )}&body=${encodeURIComponent(values.message)}`;

        return (
            <div
                className="card-surface flex min-h-[30rem] flex-col items-center justify-center gap-5 p-8 text-center"
                role="status"
                aria-live="polite"
            >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-600">
                    <FaCheckCircle aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Message ready!
                    </h2>
                    <p className="mx-auto max-w-sm text-sm leading-relaxed text-slate-600">
                        Thanks for reaching out, {values.name.split(' ')[0]}.
                        {` ${contactContent.responseTime}.`} Open your email app
                        to send it, or come back and write another one.
                    </p>
                </div>
                <a href={mailto} className="btn-primary">
                    <FaEnvelope aria-hidden="true" /> Open email app
                </a>
                <button
                    type="button"
                    onClick={handleReset}
                    className="btn-secondary"
                >
                    <FaRedo aria-hidden="true" /> Send another message
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="card-surface flex flex-col gap-5 p-6 sm:p-8"
        >
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold text-slate-900">
                    Send a message
                </h2>
                <p className="text-sm text-slate-500">
                    Fill in the details and I will get back to you soon.
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-700"
                    >
                        Your name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Ignacio"
                        value={values.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                            errors.name ? 'name-error' : undefined
                        }
                        className={fieldClass}
                    />
                    {errors.name && (
                        <p
                            id="name-error"
                            className="text-xs text-red-600"
                            role="alert"
                        >
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-700"
                    >
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                            errors.email ? 'email-error' : undefined
                        }
                        className={fieldClass}
                    />
                    {errors.email && (
                        <p
                            id="email-error"
                            className="text-xs text-red-600"
                            role="alert"
                        >
                            {errors.email}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="subject"
                    className="text-sm font-medium text-slate-700"
                >
                    What is this about?
                </label>
                <select
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    className={fieldClass}
                >
                    <option value="Project">A new project</option>
                    <option value="Job opportunity">A job opportunity</option>
                    <option value="Collaboration">A collaboration</option>
                    <option value="Other">Something else</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                    <label
                        htmlFor="message"
                        className="text-sm font-medium text-slate-700"
                    >
                        Your message
                    </label>
                    <span className="text-xs text-slate-400">
                        {values.message.trim().length} characters
                    </span>
                </div>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="I would love to talk about..."
                    value={values.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                        errors.message ? 'message-error' : undefined
                    }
                    className={`${fieldClass} resize-y`}
                />
                {errors.message && (
                    <p
                        id="message-error"
                        className="text-xs text-red-600"
                        role="alert"
                    >
                        {errors.message}
                    </p>
                )}
            </div>

            <button type="submit" className="btn-primary w-full sm:w-fit">
                <FaPaperPlane aria-hidden="true" /> Send message
            </button>
        </form>
    );
};
