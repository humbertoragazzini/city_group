useEffect(() => {
	console.log(particles.current);
	switch (pathname) {
		case "/":
			console.log(pathname);
			particles.current.morph(0);
			break;
		case "/AboutUs":
			console.log(pathname);
			particles.current.morph(1);
			break;
		case "/ContactUs":
			console.log(pathname);
			particles.current.morph(2);
			break;
		case "/OurServices":
			console.log(pathname);
			particles.current.morph(3);
			break;
		default:
			console.log("No matching path.");
	}
}, [pathname]);

useEffect(() => {
	if (groupRef.current) {
		gsap.to(groupRef.current.rotation, {
			x: 1000,
			y: 1000,
			z: 1000,
			duration: 10000,
		});
	}
}, [groupRef.current]);

useEffect(() => {
	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight,
		pixelRatio: Math.min(window.devicePixelRatio, 2),
	};

	// Extracting positions from the GLTF
	const positions = scene.children
		.filter((child: any) => child.geometry)
		.map((child: any) => child.geometry.attributes.position);

	if (positions.length > 0) {
		particles.current.maxCount = Math.max(...positions.map((pos) => pos.count));

		const sizesArray = new Float32Array(particles.current.maxCount).fill(1.0);
		particles.current.positions = positions.map(
			(pos) => new THREE.Float32BufferAttribute(pos.array, 3)
		);

		// Geometry
		particles.current.geometry = new THREE.BufferGeometry();
		particles.current.geometry.setAttribute(
			"position",
			particles.current.positions[0]
		);
		particles.current.geometry.setAttribute(
			"aPositionTarget",
			particles.current.positions[1] || particles.current.positions[0]
		);
		particles.current.geometry.setAttribute(
			"aSizes",
			new THREE.BufferAttribute(sizesArray, 1)
		);

		// Material
		particles.current.material = new THREE.ShaderMaterial({
			vertexShader: particlesVertexShader,
			fragmentShader: particlesFragmentShader,
			uniforms: {
				uSize: { value: 0.1 },
				uResolution: {
					value: new THREE.Vector2(
						sizes.width * sizes.pixelRatio,
						sizes.height * sizes.pixelRatio
					),
				},
				uMixFactor: { value: 0 },
				uColorA: { value: new THREE.Color("#ffff55") },
				uColorB: { value: new THREE.Color("#5500ff") },
			},
			blending: THREE.AdditiveBlending,
			depthWrite: false,
		});

		// Points
		particles.current.points = new THREE.Points(
			particles.current.geometry,
			particles.current.material
		);
		particles.current.points.frustumCulled = false;

		// Set the points to the state
		setTheObject(particles.current.points);

		// method
		particles.current.morph = (index) => {
			// update attributes
			particles.current.geometry.attributes.position =
				particles.current.positions[particles.current.index];
			particles.current.geometry.attributes.aPositionTarget =
				particles.current.positions[index];

			// animate mixFactor
			gsap.fromTo(
				particles.current.material.uniforms.uMixFactor,
				{ value: 0 },
				{ value: 1, duration: 3, ease: "lineal" }
			);

			// particles index
			particles.current.index = index;
		};

		particles.current.morph0 = () => {
			particles.current.morph(0);
		};
		particles.current.morph1 = () => {
			particles.current.morph(1);
		};
		particles.current.morph2 = () => {
			particles.current.morph(2);
		};
		particles.current.morph3 = () => {
			particles.current.morph(3);
		};
		setTimeout(() => particles.current.morph(2), 4000);
	}
}, [scene]);
