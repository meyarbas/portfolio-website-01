import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	RiGithubFill,
	RiLinkedinBoxFill,
	RiVercelFill,
} from "@remixicon/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	const contactRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".contact-text", {
				opacity: 0,
				y: 30,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: contactRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});
			gsap.from(".contact-icon", {
				opacity: 0,
				y: 20,
				duration: 1,
				ease: "power3.out",
				stagger: 0.4,
				scrollTrigger: {
					trigger: contactRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			});
		}, contactRef);

		return () => ctx.revert();
	}, []);

	return (
		<section className="py-16" id="contact" ref={contactRef}>
			<div className="px-4 text-center">
				<h2 className="contact-text mb-8 text-3xl font-medium lg:text-4xl">
					Contact
				</h2>
				<p className="contact-text mb-4 text-lg lg:text-xl">
					Feel free to reach out to me via email:{" "}
					<a
						href="mailto:johnstone@mail.com"
						className="border-b"
					>
						johnstone@mail.com
					</a>
				</p>
				<div className="mt-8 flex justify-center space-x-6">
					<a
						href="https://linkedin.com/in/"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-icon"
						aria-label="Visit my Linkedin profile"
					>
						<RiLinkedinBoxFill className="text-3xl" />
					</a>
					<a
						href="https://github.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-icon"
						aria-label="Visit my GitHub profile"
					>
						<RiGithubFill className="text-3xl" />
					</a>
					<a
						href="https://vercel.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-icon"
						aria-label="Visit my Vercel profile"
					>
						<RiVercelFill className="text-3xl" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
