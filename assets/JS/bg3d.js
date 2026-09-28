// (function(){
//   'use strict';
//   const canvas = document.getElementById('bg-3d');
//   if(!canvas || !window.THREE) return;
//   if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
//     return; // no animation for users who don't want it
//   }

//   const isMobile = window.innerWidth < 768;
//   const COUNT = isMobile ? 350 : 800;

//   const scene = new THREE.Scene();
//   scene.fog = new THREE.FogExp2(0x0a192f, 0.035);

//   const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 100);
//   camera.position.z = 14;

//   const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
//   renderer.setSize(innerWidth, innerHeight);
//   renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

//   // --- particles ---
//   const pos = new Float32Array(COUNT * 3);
//   const col = new Float32Array(COUNT * 3);
//   const c1 = new THREE.Color(0x64ffda); // turquoise
//   const c2 = new THREE.Color(0x8892b0); // gray
//   for(let i=0;i<COUNT;i++){
//     pos[i*3]   = (Math.random()-0.5)*40;
//     pos[i*3+1] = (Math.random()-0.5)*24;
//     pos[i*3+2] = (Math.random()-0.5)*20;
//     const c = Math.random() > 0.3 ? c1 : c2;
//     col[i*3]=c.r; col[i*3+1]=c.g; col[i*3+2]=c.b;
//   }
//   const geo = new THREE.BufferGeometry();
//   geo.setAttribute('position', new THREE.BufferAttribute(pos,3));
//   geo.setAttribute('color', new THREE.BufferAttribute(col,3));
//   const mat = new THREE.PointsMaterial({ size:0.12, vertexColors:true, transparent:true, opacity:0.9 });
//   const points = new THREE.Points(geo, mat);
//   scene.add(points);

//   // --- floating wire shapes ---
//   const shapes = new THREE.Group();
//   const matWire = new THREE.MeshBasicMaterial({ color:0x64ffda, wireframe:true, transparent:true, opacity:0.18 });
//   const s1 = new THREE.Mesh(new THREE.IcosahedronGeometry(2.2,1), matWire);
//   s1.position.set(7,2,-3);
//   const s2 = new THREE.Mesh(new THREE.TorusGeometry(1.6,0.35,12,30), matWire);
//   s2.position.set(-8,-2,-4);
//   const s3 = new THREE.Mesh(new THREE.OctahedronGeometry(1.4,0), matWire);
//   s3.position.set(0,-4,-6);
//   shapes.add(s1,s2,s3);
//   scene.add(shapes);

//   scene.add(new THREE.AmbientLight(0xffffff, 0.6));

//   // --- mouse + scroll interaction ---
//   let mx=0,my=0,tx=0,ty=0;
//   addEventListener('mousemove', e=>{
//     mx=(e.clientX/innerWidth-0.5)*2;
//     my=(e.clientY/innerHeight-0.5)*2;
//   },{passive:true});

//   function onResize(){
//     camera.aspect = innerWidth/innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(innerWidth, innerHeight);
//   }
//   addEventListener('resize', onResize);

//   let running = true;
//   document.addEventListener('visibilitychange', ()=>{ running = !document.hidden; if(running) loop(); });

//   const clock = new THREE.Clock();
//   function loop(){
//     if(!running) return;
//     requestAnimationFrame(loop);
//     const t = clock.getElapsedTime();

//     tx += (mx - tx)*0.04;
//     ty += (my - ty)*0.04;

//     points.rotation.y = t*0.03 + tx*0.3;
//     points.rotation.x = ty*0.2;

//     s1.rotation.x=t*0.2; s1.rotation.y=t*0.3;
//     s2.rotation.x=t*0.15; s2.rotation.y=t*0.2;
//     s3.rotation.y=t*0.25;
//     shapes.position.y = Math.sin(t*0.5)*0.4;

//     camera.position.x = tx*1.2;
//     camera.position.y = -scrollY*0.001 + ty*0.8;
//     camera.lookAt(0,0,0);

//     renderer.render(scene,camera);
//   }
//   loop();
// })();