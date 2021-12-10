GENERATED_pretty_code_graph_data = {
    "elements": {
        "nodes": [
            {
                "data": {
                    "id": "domain_classical_domain",
                    "label": "Classical Domain",
                    "_description": "codes for classical systems",
                    "_is_domain": 1,
                    "_page_href": "/domain/classical_domain"
                },
                "position": {
                    "x": -450,
                    "y": 0
                }
            },
            {
                "data": {
                    "id": "domain_quantum_domain",
                    "label": "Quantum Domain",
                    "_description": "codes for quantum systems",
                    "_is_domain": 1,
                    "_page_href": "/domain/quantum_domain"
                },
                "position": {
                    "x": 450,
                    "y": 0
                }
            },
            {
                "data": {
                    "id": "c_oaecc",
                    "label": "Operator-algebra error-correcting code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "Stub.",
                    "_code_href": "/c/oaecc#ecc_oaecc",
                    "_family_generation_level": 0
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_ecc",
                    "label": "Error-correcting code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": [
                        "Encodes \\(K\\) states (codewords) over an alphabet with \\(N\\) elements such that it is possible to recover the codewords from errors \\(E\\) from some error set \\(\\mathcal{E}\\). Formally, an error-cor..."
                    ],
                    "_code_href": "/c/ecc#ecc_ecc",
                    "_family_generation_level": 1
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_q-ary_digits_into_q-ary_digits",
                    "label": "\\(q\\)-ary code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Encodes \\(K\\) states (codewords) in \\(n\\) \\(q\\)-ary coordinates and has distance \\(d\\). Usually denoted as \\((n,K,d)_q\\). The distance is the minimum number of coordinates where two strings in the ..."
                    ],
                    "_code_href": "/c/q-ary_digits_into_q-ary_digits#ecc_q-ary_digits_into_q-ary_digits",
                    "_family_generation_level": 2,
                    "_is_kingdom": 1,
                    "_kingdom_name": "\\(q\\)-ary Digits Kingdom",
                    "_kingdom_href": "/kingdom/q-ary_digits_into_q-ary_digits"
                },
                "position": {
                    "x": -450,
                    "y": 100
                }
            },
            {
                "data": {
                    "id": "c_weakly_self_dual",
                    "label": "Weakly self-dual linear code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Also called a \\textit{self-orthogonal} code. A \\(q\\)-ary linear code \\(C\\) whose dual code \\(C^\\perp = \\{ y\\in\\mathbb{Z}_q^{\\times n} ~|~ x\\cdot y=0 \\forall x\\in C\\}\\) is contained in \\(C\\).",
                    "_code_href": "/c/weakly_self_dual#ecc_weakly_self_dual",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": -450,
                    "y": 360
                }
            },
            {
                "data": {
                    "id": "c_q-ary_linear",
                    "label": "\\(q\\)-ary linear code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "An \\((n,K,d)_q\\) linear code is denoted as \\([n,k,d]_q\\), where \\(k=\\log_{q}K\\) need not be an integer. Its codewords form a linear subspace, i.e., for any codewords \\(x,y\\), \\(\\alpha x+ \\beta y\\) ..."
                    ],
                    "_code_href": "/c/q-ary_linear#ecc_q-ary_linear",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": -450,
                    "y": 360
                }
            },
            {
                "data": {
                    "id": "c_self_dual",
                    "label": "Self-dual linear code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Also called \\textit{strictly self-dual}. A \\(q\\)-ary linear code \\(C\\) whose dual code \\(C^\\perp = \\{ y\\in\\mathbb{Z}_q^{\\times n} ~|~ x\\cdot y=0 \\forall x\\in C\\}\\) is equal to \\(C\\).",
                    "_code_href": "/c/self_dual#ecc_self_dual",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": -450,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_perfect",
                    "label": "Perfect code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "An \\((n,K,2t+1)_q\\) \\(q\\)-ary code is perfect if parameters \\(n\\), \\(K\\), \\(t\\), and \\(q\\) are such that the Hamming (a.k.a. sphere-packing) bound\n\\begin{align}\n\\sum_{j=0}^{t}(q-1)^{j}{n \\choose j}..."
                    ],
                    "_code_href": "/c/perfect#ecc_perfect",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": -450,
                    "y": 360
                }
            },
            {
                "data": {
                    "id": "c_reed_solomon",
                    "label": "Reed-Solomon code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "\\([n,k,n-k+1]_q\\) linear code. Let \\(\\{\\alpha_1,\\cdots,\\alpha_n\\}\\) be \\(n\\) distinct nonzero elements of \\(GF(q)\\) for prime \\(q>n\\). Encodes \\(\\mu=\\{\\mu_0,\\cdots,\\mu_{k-1}\\}\\) into \\(\\{f_\\mu(\\alp..."
                    ],
                    "_code_href": "/c/reed_solomon#ecc_reed_solomon",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": -450,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_classical_abelian_group",
                    "label": "Classical Abelian group Code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "Stub.",
                    "_code_href": "/c/classical_abelian_group#ecc_classical_abelian_group",
                    "_family_generation_level": 0
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_cyclic",
                    "label": "Cyclic code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "A classical code \\(C\\) of length \\(n\\) over an alphabet is cyclic if, for each string \\(c_1 c_2 \\cdots c_n\\in C\\), the cyclically shifted string \\(c_n c_1 \\cdots c_{n-1}\\in C\\).",
                    "_code_href": "/c/cyclic#ecc_cyclic",
                    "_family_generation_level": 2
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_generalized_concatenated",
                    "label": "Generalized concatenated classical code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "Stub.",
                    "_code_href": "/c/generalized_concatenated#ecc_generalized_concatenated",
                    "_family_generation_level": 2
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_tanner",
                    "label": "Tanner code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/tanner#ecc_tanner",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": -550,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_polar",
                    "label": "Polar code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "In its basic version, a binary linear polar code encodes \\(K\\) message bits into \\(N=2^n\\) bits. The linear transformation that defines the code is given by the matrix \\(G^{(n)}=B_N G^{\\otimes n}\\)..."
                    ],
                    "_code_href": "/c/polar#ecc_polar",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": -550,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_binary_linear",
                    "label": "Binary linear code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "An \\((n,2^k,d)\\) linear code is denoted as \\([n,k,d]\\). Its codewords form a linear subspace, i.e., for any codewords \\(x,y\\), \\(x+y\\) is also a codeword. Often defined in terms of a generator matr..."
                    ],
                    "_code_href": "/c/binary_linear#ecc_binary_linear",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": -550,
                    "y": 360
                }
            },
            {
                "data": {
                    "id": "c_ldpc",
                    "label": "Low-density parity-check (LDPC) code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/ldpc#ecc_ldpc",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": -550,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_reed_muller",
                    "label": "Reed-Muller code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/reed_muller#ecc_reed_muller",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": -550,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_bits_into_bits",
                    "label": "Binary code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Encodes \\(K\\) states (codewords) in \\(n\\) binary coordinates and has distance \\(d\\). Usually denoted as \\((n,K,d)\\). The distance is the minimum Hamming distance between a pair of distinct codewords.",
                    "_code_href": "/c/bits_into_bits#ecc_bits_into_bits",
                    "_family_generation_level": 2,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Binary Kingdom",
                    "_kingdom_href": "/kingdom/bits_into_bits"
                },
                "position": {
                    "x": -550,
                    "y": 100
                }
            },
            {
                "data": {
                    "id": "c_oecc",
                    "label": "Operator quantum error-correcting code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "Stub.",
                    "_code_href": "/c/oecc#ecc_oecc",
                    "_family_generation_level": 1
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_qecc_finite",
                    "label": "Finite-dimensional QECC",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": [
                        "A quantum error-correcting code that encodes quantum information in a \\(K\\)-dimensional (\\textit{logical}) subspace \\(\\mathsf{H}_K\\) of an \\(N\\)-dimensional (\\textit{physical}) Hilbert space \\(\\mat..."
                    ],
                    "_code_href": "/c/qecc_finite#ecc_qecc_finite",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_qecc",
                    "label": "Quantum error-correcting code (QECC)",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": [
                        "Encodes quantum information in a (\\textit{logical}) subspace of a (\\textit{physical}) Hilbert space such that it is possible to recover said information from errors that act as linear maps on the p..."
                    ],
                    "_code_href": "/c/qecc#ecc_qecc",
                    "_family_generation_level": 2
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_stab_4_2_2",
                    "label": "\\([[4,2,2]]\\) CSS code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        " Four-qubit CSS stabilizer code with generators \\(\\{XXXX, ZZZZ\\} \\) and codewords \\begin{align} \\begin{split} |\\overline{00}\\rangle = (|0000\\rangle + |1111\\rangle)/\\sqrt{2}\\\\ |\\overline{01}\\rangle ..."
                    ],
                    "_code_href": "/c/stab_4_2_2#ecc_stab_4_2_2",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 150,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_stabilizer",
                    "label": "Stabilizer code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "An \\(((n,2^k,d))\\) stabilizer code is denoted as \\([[n,k]]\\) or \\([[n,k,d]]\\), where \\(d\\) is the code's distance. Logical subspace is the joint \\(+1\\) eigenspace of a set of \\(2^{n-k}\\) commuting ..."
                    ],
                    "_code_href": "/c/stabilizer#ecc_stabilizer",
                    "_family_generation_level": 6
                },
                "position": {
                    "x": 150,
                    "y": 720
                }
            },
            {
                "data": {
                    "id": "c_t-designs",
                    "label": "Local Haar-random circuit code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "An \\(n\\)-qubit code whose codewords are a pair of approximately locally indistinguishable states produced by starting with any two orthogonal \\(n\\)-qubit states and acting with a random unitary cir..."
                    ],
                    "_code_href": "/c/t-designs#ecc_t-designs",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": -450,
                    "y": 500
                }
            },
            {
                "data": {
                    "id": "c_qubits_into_qubits",
                    "label": "Qubit code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Encodes \\(K\\)-dimensional Hilbert space into a \\(2^n\\)-dimensional (i.e., \\(n\\)-qubit) Hilbert space. Usually denoted as \\(((n,K))\\) or \\(((n,K,d))\\), where \\(d\\) is the code's distance.",
                    "_code_href": "/c/qubits_into_qubits#ecc_qubits_into_qubits",
                    "_family_generation_level": 4,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Qubit Kingdom",
                    "_kingdom_href": "/kingdom/qubits_into_qubits"
                },
                "position": {
                    "x": 150,
                    "y": 100
                }
            },
            {
                "data": {
                    "id": "c_quantum_reed_muller",
                    "label": "Quantum Reed-Muller code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/quantum_reed_muller#ecc_quantum_reed_muller",
                    "_family_generation_level": 7
                },
                "position": {
                    "x": 150,
                    "y": 840
                }
            },
            {
                "data": {
                    "id": "c_movassagh_ouyang",
                    "label": "Movassagh-Ouyang Hamiltonian Codes",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/movassagh_ouyang#ecc_movassagh_ouyang",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": -450,
                    "y": 500
                }
            },
            {
                "data": {
                    "id": "c_bacon_shor",
                    "label": "Bacon-Shor code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/bacon_shor#ecc_bacon_shor",
                    "_family_generation_level": 0
                },
                "position": {
                    "x": -450,
                    "y": 500
                }
            },
            {
                "data": {
                    "id": "c_quantum_hamming",
                    "label": "Quantum Hamming code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/quantum_hamming#ecc_quantum_hamming",
                    "_family_generation_level": 7
                },
                "position": {
                    "x": 150,
                    "y": 840
                }
            },
            {
                "data": {
                    "id": "c_stab_5_1_3",
                    "label": "\\([[5,1,3]]\\) code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Five-qubit stabilizer code with generators that are symmetric under cyclic permutation of qubits, \\begin{align} \\begin{split} S_1 &= IXZZX \\\\ S_2 &= XZZXI \\\\ S_3 &= ZZXIX \\\\ S_4 &= ZXIXZ. \\end{spli..."
                    ],
                    "_code_href": "/c/stab_5_1_3#ecc_stab_5_1_3",
                    "_family_generation_level": 7
                },
                "position": {
                    "x": 150,
                    "y": 840
                }
            },
            {
                "data": {
                    "id": "c_surface",
                    "label": "Kitaev's surface code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "A family of \\hyperref[code:css]{CSS stabilizer} codes whose generators are few-body \\(X\\)-type and \\(Z\\)-type Pauli strings associated to the stars and plaquettes, respectively, of a tessellation o..."
                    ],
                    "_code_href": "/c/surface#ecc_surface",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": 150,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_cws",
                    "label": "Codeword stabilized (CWS) code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/cws#ecc_cws",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 150,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_homological_product",
                    "label": "Homological product code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/homological_product#ecc_homological_product",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 150,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_css",
                    "label": "Calderbank-Shor-Steane (CSS) stabilizer code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "An \\([[n,k,d]]\\) stabilizer code whose stabilizer generators are either \\(Z\\)-type or \\(X\\)-type Pauli strings. The parity check matrix is of the form\n\\begin{align}\nH=\\begin{pmatrix}0 & H_{Z}\\\\\nH_{..."
                    ],
                    "_code_href": "/c/css#ecc_css",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": 150,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_shor_nine",
                    "label": "Shor's \\([[9,1,3]]\\) code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Nine-qubit CSS code that is the smallest such code to correct a single-qubit error. Shor's code works by concatenating each qubit of a phase-flip with a bit-flip repetition code. Therefore, the cod..."
                    ],
                    "_code_href": "/c/shor_nine#ecc_shor_nine",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 150,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_quantum_parity",
                    "label": "Quantum parity code (QPC)",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/quantum_parity#ecc_quantum_parity",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": 150,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_quantum_repetition",
                    "label": "Qubit repetition code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Encodes \\(1\\) qubit into \\(n\\) qubits according to \\(|0\\rangle\\to|\\phi_0\\rangle^{\\otimes n}\\) and \\(|1\\rangle\\to|\\phi_1\\rangle^{\\otimes n}\\). Also known as a \\textit{bit-flip} code when \\(|\\phi_i\\r..."
                    ],
                    "_code_href": "/c/quantum_repetition#ecc_quantum_repetition",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 150,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_hypergraph_product",
                    "label": "Hypergraph product code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "A family of \\([[n,k,d]]\\) CSS codes whose construction is based on two binary linear \\textit{seed} codes \\(C_1\\) and \\(C_2\\).",
                    "_code_href": "/c/hypergraph_product#ecc_hypergraph_product",
                    "_family_generation_level": 6
                },
                "position": {
                    "x": 150,
                    "y": 720
                }
            },
            {
                "data": {
                    "id": "c_quantum_polar",
                    "label": "Quantum polar code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/quantum_polar#ecc_quantum_polar",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 150,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_quantum_ldpc",
                    "label": "Quantum low-density parity-check (QLDPC) code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "",
                    "_code_href": "/c/quantum_ldpc#ecc_quantum_ldpc",
                    "_family_generation_level": 7
                },
                "position": {
                    "x": 150,
                    "y": 840
                }
            },
            {
                "data": {
                    "id": "c_stab_15_1_3",
                    "label": "\\([[15,1,3]]\\) Reed-Muller code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        " \\([[15,1,3]]\\) CSS code that is most easily thought of as a tetrahedral 3D color code. This code contains 15 qubits, represented by four vertices, four face centers, six edge centers, and one body..."
                    ],
                    "_code_href": "/c/stab_15_1_3#ecc_stab_15_1_3",
                    "_family_generation_level": 8
                },
                "position": {
                    "x": 150,
                    "y": 960
                }
            },
            {
                "data": {
                    "id": "c_lifted_product",
                    "label": "Lifted product code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "A family of \\([[n,k,d]]\\) CSS codes whose construction is based on two linear \\textit{seed} codes \\(C_1\\) and \\(C_2\\) with a free action of a group \\(G\\). Lifted product codes can also be defined o..."
                    ],
                    "_code_href": "/c/lifted_product#ecc_lifted_product",
                    "_family_generation_level": 6
                },
                "position": {
                    "x": 150,
                    "y": 720
                }
            },
            {
                "data": {
                    "id": "c_chuang-leung-yamamoto",
                    "label": "Chuang-Leung-Yamamoto code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Bosonic Fock-state code that encodes \\(k\\) qubits into \\(n\\) oscillators, with each oscillator restricted to having at most \\(N\\) excitations. Codewords are superpositions of oscillator Fock states..."
                    ],
                    "_code_href": "/c/chuang-leung-yamamoto#ecc_chuang-leung-yamamoto",
                    "_family_generation_level": 6
                },
                "position": {
                    "x": 350,
                    "y": 720
                }
            },
            {
                "data": {
                    "id": "c_wasilewski-banaszek",
                    "label": "Wasilewski-Banaszek code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Three-oscillator Fock-state code encoding a single logical qubit using codewords \\begin{align} \\begin{split} |\\overline{0}\\rangle &= \\frac{1}{\\sqrt{3}}(|003\\rangle+|030\\rangle+|300\\rangle)\\\\ |\\over..."
                    ],
                    "_code_href": "/c/wasilewski-banaszek#ecc_wasilewski-banaszek",
                    "_family_generation_level": 6
                },
                "position": {
                    "x": 350,
                    "y": 720
                }
            },
            {
                "data": {
                    "id": "c_hybrid_qudit_oscillator",
                    "label": "Hybrid qudit-oscillator code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Encodes a \\(K\\)-dimensional logical Hilbert space into \\(n_1\\) qudits of dimension \\(q\\) and \\(n_2 \\neq 0\\) oscillators, i.e., the Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{Z}..."
                    ],
                    "_code_href": "/c/hybrid_qudit_oscillator#ecc_hybrid_qudit_oscillator",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": 350,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_cat",
                    "label": "Cat code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/cat#ecc_cat",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 350,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_gkp",
                    "label": "Gottesman-Kitaev-Preskill (GKP) code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/gkp#ecc_gkp",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 350,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_oscillators_into_oscillators",
                    "label": "Oscillator-into-oscillator code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Encodes Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{R}^k\\) into that on \\(\\mathbb{R}^n\\). Usually denoted as \\(((n,k))_{\\mathbb{R}}\\).",
                    "_code_href": "/c/oscillators_into_oscillators#ecc_oscillators_into_oscillators",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": 350,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_fock_state",
                    "label": "Fock-state bosonic code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Qudit-into-oscillator code whose protection against amplitude damping (i.e., photon loss) stems from the use of disjoint sets of Fock states for the construction of each code basis state. For examp..."
                    ],
                    "_code_href": "/c/fock_state#ecc_fock_state",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 350,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_oscillators",
                    "label": "Bosonic code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Also called an \\textit{oscillator} or a \\textit{continuous-variable (CV)} code. Encodes logical Hilbert space, finite- or infinite-dimensional, into a physical Hilbert space that contains at least ..."
                    ],
                    "_code_href": "/c/oscillators#ecc_oscillators",
                    "_family_generation_level": 3,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Oscillator Kingdom",
                    "_kingdom_href": "/kingdom/oscillators"
                },
                "position": {
                    "x": 350,
                    "y": 100
                }
            },
            {
                "data": {
                    "id": "c_qudits_into_oscillators",
                    "label": "Qudit-into-oscillator code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Encodes \\(K\\)-dimensional Hilbert space into Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{R}^n\\).",
                    "_code_href": "/c/qudits_into_oscillators#ecc_qudits_into_oscillators",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": 350,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_very-small-logical-qubit",
                    "label": "Very small logical qubit (VSLQ) code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "The two logical codewords are \\(|\\pm\\rangle \\propto (|0\\rangle\\pm|2\\rangle)(|0\\rangle\\pm|2\\rangle)|0\\rangle|0\\rangle\\), where the total Hilbert space is the tensor product of two qudits (whose grou..."
                    ],
                    "_code_href": "/c/very-small-logical-qubit#ecc_very-small-logical-qubit",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 350,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_group_quantum",
                    "label": "Group quantum code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Encodes a \\textit{logical} Hilbert space, finite- or infinite-dimensional, into a \\textit{physical} Hilbert space of \\(\\ell^2\\)-normalizable functions on a second-countable unimodular group. For \\(..."
                    ],
                    "_code_href": "/c/group_quantum#ecc_group_quantum",
                    "_family_generation_level": 3,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Group Kingdom",
                    "_kingdom_href": "/kingdom/group_quantum"
                },
                "position": {
                    "x": 550,
                    "y": 100
                }
            },
            {
                "data": {
                    "id": "c_molecular",
                    "label": "Molecular code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Encodes finite-dimensional Hilbert space into the Hilbert space of \\(\\ell^2\\)-normalizable functions on the group \\(SO_3\\). Construction is based on nested subgroups \\(H\\subset K \\subset SO_3\\), wh..."
                    ],
                    "_code_href": "/c/molecular#ecc_molecular",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 550,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_group_gkp",
                    "label": "Group GKP code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Group code whose construction is based on nested subgroups \\(H\\subset K \\subset G\\). Logical subspace is spanned by basis states that are equal superpositions of elements of cosets of \\(H\\) in \\(K\\..."
                    ],
                    "_code_href": "/c/group_gkp#ecc_group_gkp",
                    "_family_generation_level": 4
                },
                "position": {
                    "x": 550,
                    "y": 480
                }
            },
            {
                "data": {
                    "id": "c_qudit_stabilizer",
                    "label": "\\(\\mathbb{Z}_q\\)-qudit stabilizer code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "An \\(((n,p^k,d))_q\\) (with \\(q\\) not necessarily prime) stabilizer code is denoted as \\([[n,k]]_q\\) or \\([[n,k,d]]_q\\), where \\(d\\) is the code's distance. Stub.",
                    "_code_href": "/c/qudit_stabilizer#ecc_qudit_stabilizer",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 250,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_polynomial",
                    "label": "\\(\\mathbb{Z}_p\\)-qudit polynomial code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Also called \\textit{quantum Reed-Solomon code}. Stub.",
                    "_code_href": "/c/polynomial#ecc_polynomial",
                    "_family_generation_level": 7
                },
                "position": {
                    "x": 250,
                    "y": 840
                }
            },
            {
                "data": {
                    "id": "c_prime_qudit_stabilizer",
                    "label": "\\(\\mathbb{Z}_p\\)-qudit stabilizer code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "An \\(((n,p^k,d))_p\\) (with \\(p\\) prime) stabilizer code is denoted as \\([[n,k]]_p\\) or \\([[n,k,d]]_p\\), where \\(d\\) is the code's distance. Logical subspace is the joint \\(+1\\) eigenspace of a set ..."
                    ],
                    "_code_href": "/c/prime_qudit_stabilizer#ecc_prime_qudit_stabilizer",
                    "_family_generation_level": 6
                },
                "position": {
                    "x": 250,
                    "y": 720
                }
            },
            {
                "data": {
                    "id": "c_qudits_into_qudits",
                    "label": "\\(\\mathbb{Z}_q\\)-qudit code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Encodes \\(K\\)-dimensional Hilbert space into a \\(q^n\\)-dimensional (\\(n\\)-qudit) Hilbert space, with canonical qudit states \\(|k\\rangle\\) labeled by elements \\(k\\) of the group \\(\\mathbb{Z}_q\\) of ..."
                    ],
                    "_code_href": "/c/qudits_into_qudits#ecc_qudits_into_qudits",
                    "_family_generation_level": 4,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Qu\\emph{d}it Kingdom",
                    "_kingdom_href": "/kingdom/qudits_into_qudits"
                },
                "position": {
                    "x": 250,
                    "y": 100
                }
            },
            {
                "data": {
                    "id": "c_qudit_css",
                    "label": "\\(\\mathbb{Z}_q\\)-qudit CSS code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Often, but not always, defined for prime qudits (\\(q=p\\)). Stub.",
                    "_code_href": "/c/qudit_css#ecc_qudit_css",
                    "_family_generation_level": 6
                },
                "position": {
                    "x": 250,
                    "y": 720
                }
            },
            {
                "data": {
                    "id": "c_galois_stabilizer",
                    "label": "Galois-qudit stabilizer code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "An \\(((n,p^k,d))_{GF(q)}\\) stabilizer code is denoted as \\([[n,k]]_{GF(q)}\\) or \\([[n,k,d]]_{GF(q)}\\), where \\(d\\) is the code's distance. Stub.",
                    "_code_href": "/c/galois_stabilizer#ecc_galois_stabilizer",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 650,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_galois_into_galois",
                    "label": "Galois-qudit code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Encodes \\(K\\)-dimensional Hilbert space into a \\(q^n\\)-dimensional (\\(n\\)-qudit) Hilbert space, with canonical qudit states \\(|k\\rangle\\) labeled by elements \\(k\\) of the \\textit{Galois field} \\(GF..."
                    ],
                    "_code_href": "/c/galois_into_galois#ecc_galois_into_galois",
                    "_family_generation_level": 4,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Galois Field Kingdom",
                    "_kingdom_href": "/kingdom/galois_into_galois"
                },
                "position": {
                    "x": 650,
                    "y": 100
                }
            },
            {
                "data": {
                    "id": "c_galois_css",
                    "label": "Galois-qudit CSS code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/galois_css#ecc_galois_css",
                    "_family_generation_level": 6
                },
                "position": {
                    "x": 650,
                    "y": 720
                }
            },
            {
                "data": {
                    "id": "c_galois_polynomial",
                    "label": "Galois-qudit polynomial code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": "Stub.",
                    "_code_href": "/c/galois_polynomial#ecc_galois_polynomial",
                    "_family_generation_level": 7
                },
                "position": {
                    "x": 650,
                    "y": 840
                }
            },
            {
                "data": {
                    "id": "c_dynamic_gen",
                    "label": "Dynamically-generated quantum error-correcting code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "Code whose natural definition is in terms of a many-body scaling limit of a local dynamical process.",
                    "_code_href": "/c/dynamic_gen#ecc_dynamic_gen",
                    "_family_generation_level": 2
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_quantum_concatenated",
                    "label": "Concatened code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": [
                        "A concatened code is a combination of two codes, an inner code \\(C\\) and an outer code \\(C^\\prime\\), where the physical subspace used for the outer code consists of the logical subspace of the inne..."
                    ],
                    "_code_href": "/c/quantum_concatenated#ecc_quantum_concatenated",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_quantum_cyclic",
                    "label": "Cyclic quantum code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "An \\(n\\)-qubit code \\(C\\) is cyclic if a cyclic permutation of the qubits leaves the code subspace invariant.",
                    "_code_href": "/c/quantum_cyclic#ecc_quantum_cyclic",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_topological",
                    "label": "Topological code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "Stub.",
                    "_code_href": "/c/topological#ecc_topological",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_random_circuit",
                    "label": "Random-circuit code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "Code whose encoding is naturally constructed by randomly sampling from a large set of quantum circuits.",
                    "_code_href": "/c/random_circuit#ecc_random_circuit",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_approximate_qecc",
                    "label": "Approximate QECC",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "Stub.",
                    "_code_href": "/c/approximate_qecc#ecc_approximate_qecc",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_fracton",
                    "label": "Fracton code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": "A code whose codewords make up the ground-state space of a fracton-phase Hamiltonian.",
                    "_code_href": "/c/fracton#ecc_fracton",
                    "_family_generation_level": 3
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_hamiltonian",
                    "label": "Hamiltonian-based code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": [
                        "Encoding corresponds to a set of energy eigenstates of a quantum-mechanical Hamiltonian. The codespace is typically a set of low-energy eigenstates or ground states, but can include subspaces of ar..."
                    ],
                    "_code_href": "/c/hamiltonian#ecc_hamiltonian",
                    "_family_generation_level": 2
                },
                "position": {
                    "x": 0,
                    "y": -300
                }
            },
            {
                "data": {
                    "id": "c_quantum_perfect",
                    "label": "Perfect quantum code",
                    "_is_code": 1,
                    "_is_abstract_code": 1,
                    "_description": [
                        "A non-degenerate code constructed out of \\(q\\)-dimensional qudits and having parameters \\(((n,K,2t+1))\\) is perfect if \\(n\\), \\(K\\), \\(t\\), and \\(q\\) are such that the quantum Hamming bound\n\\begin{..."
                    ],
                    "_code_href": "/c/quantum_perfect#ecc_quantum_perfect",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 250,
                    "y": 600
                }
            },
            {
                "data": {
                    "id": "c_fermions",
                    "label": "Fermionic code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Finite-dimensional quantum error-correcting code encoding a logical Hilbert space into a physical Fock space of fermionic modes. Codes are typically described using Majorana operators, which are li..."
                    ],
                    "_code_href": "/c/fermions#ecc_fermions",
                    "_family_generation_level": 4,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Fermionic Kingdom",
                    "_kingdom_href": "/kingdom/fermions"
                },
                "position": {
                    "x": 450,
                    "y": 100
                }
            },
            {
                "data": {
                    "id": "c_majorana_stab",
                    "label": "Majorana stabilizer code",
                    "_is_code": 1,
                    "_is_abstract_code": 0,
                    "_description": [
                        "Majorana fermion stabilizer codes are stabilizer codes whose stabilizers are products of an even number of Majorana fermion operators, analogous to Pauli strings for a traditional stabilizer code a..."
                    ],
                    "_code_href": "/c/majorana_stab#ecc_majorana_stab",
                    "_family_generation_level": 5
                },
                "position": {
                    "x": 450,
                    "y": 600
                }
            }
        ],
        "edges": [
            {
                "data": {
                    "id": "parent_ecc_oaecc_0",
                    "_rel_type": "parent",
                    "source": "c_ecc",
                    "target": "c_oaecc"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_q-ary_digits_into_q-ary_digits_classical_domain_0",
                    "_rel_type": "domain",
                    "source": "c_q-ary_digits_into_q-ary_digits",
                    "target": "domain_classical_domain"
                }
            },
            {
                "data": {
                    "id": "parent_q-ary_digits_into_q-ary_digits_ecc_1",
                    "_rel_type": "parent",
                    "source": "c_q-ary_digits_into_q-ary_digits",
                    "target": "c_ecc"
                }
            },
            {
                "data": {
                    "id": "parent_weakly_self_dual_q-ary_digits_into_q-ary_digits_2",
                    "_rel_type": "parent",
                    "source": "c_weakly_self_dual",
                    "target": "c_q-ary_digits_into_q-ary_digits"
                }
            },
            {
                "data": {
                    "id": "parent_q-ary_linear_q-ary_digits_into_q-ary_digits_3",
                    "_rel_type": "parent",
                    "source": "c_q-ary_linear",
                    "target": "c_q-ary_digits_into_q-ary_digits"
                }
            },
            {
                "data": {
                    "id": "parent_self_dual_weakly_self_dual_4",
                    "_rel_type": "parent",
                    "source": "c_self_dual",
                    "target": "c_weakly_self_dual"
                }
            },
            {
                "data": {
                    "id": "parent_perfect_q-ary_digits_into_q-ary_digits_5",
                    "_rel_type": "parent",
                    "source": "c_perfect",
                    "target": "c_q-ary_digits_into_q-ary_digits"
                }
            },
            {
                "data": {
                    "id": "parent_reed_solomon_q-ary_linear_6",
                    "_rel_type": "parent",
                    "source": "c_reed_solomon",
                    "target": "c_q-ary_linear"
                }
            },
            {
                "data": {
                    "id": "parent_cyclic_ecc_7",
                    "_rel_type": "parent",
                    "source": "c_cyclic",
                    "target": "c_ecc"
                }
            },
            {
                "data": {
                    "id": "parent_generalized_concatenated_ecc_8",
                    "_rel_type": "parent",
                    "source": "c_generalized_concatenated",
                    "target": "c_ecc"
                }
            },
            {
                "data": {
                    "id": "parent_tanner_binary_linear_9",
                    "_rel_type": "parent",
                    "source": "c_tanner",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "parent_polar_binary_linear_10",
                    "_rel_type": "parent",
                    "source": "c_polar",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "cousin_polar_reed_muller__0",
                    "_rel_type": "cousin",
                    "source": "c_polar",
                    "target": "c_reed_muller"
                }
            },
            {
                "data": {
                    "id": "cousin_polar_generalized_concatenated__1",
                    "_rel_type": "cousin",
                    "source": "c_polar",
                    "target": "c_generalized_concatenated"
                }
            },
            {
                "data": {
                    "id": "parent_binary_linear_bits_into_bits_11",
                    "_rel_type": "parent",
                    "source": "c_binary_linear",
                    "target": "c_bits_into_bits"
                }
            },
            {
                "data": {
                    "id": "parent_ldpc_binary_linear_12",
                    "_rel_type": "parent",
                    "source": "c_ldpc",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "parent_reed_muller_binary_linear_13",
                    "_rel_type": "parent",
                    "source": "c_reed_muller",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_bits_into_bits_classical_domain_1",
                    "_rel_type": "domain",
                    "source": "c_bits_into_bits",
                    "target": "domain_classical_domain"
                }
            },
            {
                "data": {
                    "id": "parent_bits_into_bits_ecc_14",
                    "_rel_type": "parent",
                    "source": "c_bits_into_bits",
                    "target": "c_ecc"
                }
            },
            {
                "data": {
                    "id": "parent_oecc_oaecc_15",
                    "_rel_type": "parent",
                    "source": "c_oecc",
                    "target": "c_oaecc"
                }
            },
            {
                "data": {
                    "id": "parent_qecc_finite_qecc_16",
                    "_rel_type": "parent",
                    "source": "c_qecc_finite",
                    "target": "c_qecc"
                }
            },
            {
                "data": {
                    "id": "parent_qecc_oecc_17",
                    "_rel_type": "parent",
                    "source": "c_qecc",
                    "target": "c_oecc"
                }
            },
            {
                "data": {
                    "id": "parent_stab_4_2_2_css_18",
                    "_rel_type": "parent",
                    "source": "c_stab_4_2_2",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "cousin_stab_4_2_2_surface__2",
                    "_rel_type": "cousin",
                    "source": "c_stab_4_2_2",
                    "target": "c_surface"
                }
            },
            {
                "data": {
                    "id": "cousin_stab_4_2_2_stab_5_1_3__3",
                    "_rel_type": "cousin",
                    "source": "c_stab_4_2_2",
                    "target": "c_stab_5_1_3"
                }
            },
            {
                "data": {
                    "id": "cousin_stab_4_2_2_quantum_parity__4",
                    "_rel_type": "cousin",
                    "source": "c_stab_4_2_2",
                    "target": "c_quantum_parity"
                }
            },
            {
                "data": {
                    "id": "cousin_stab_4_2_2_quantum_polar__5",
                    "_rel_type": "cousin",
                    "source": "c_stab_4_2_2",
                    "target": "c_quantum_polar"
                }
            },
            {
                "data": {
                    "id": "cousin_stab_4_2_2_approximate_qecc__6",
                    "_rel_type": "cousin",
                    "source": "c_stab_4_2_2",
                    "target": "c_approximate_qecc"
                }
            },
            {
                "data": {
                    "id": "parent_stabilizer_cws_19",
                    "_rel_type": "parent",
                    "source": "c_stabilizer",
                    "target": "c_cws"
                }
            },
            {
                "data": {
                    "id": "cousin_stabilizer_prime_qudit_stabilizer__7",
                    "_rel_type": "cousin",
                    "source": "c_stabilizer",
                    "target": "c_prime_qudit_stabilizer"
                }
            },
            {
                "data": {
                    "id": "cousin_stabilizer_hamiltonian__8",
                    "_rel_type": "cousin",
                    "source": "c_stabilizer",
                    "target": "c_hamiltonian"
                }
            },
            {
                "data": {
                    "id": "parent_t-designs_random_circuit_20",
                    "_rel_type": "parent",
                    "source": "c_t-designs",
                    "target": "c_random_circuit"
                }
            },
            {
                "data": {
                    "id": "cousin_t-designs_topological__9",
                    "_rel_type": "cousin",
                    "source": "c_t-designs",
                    "target": "c_topological"
                }
            },
            {
                "data": {
                    "id": "cousin_t-designs_approximate_qecc__10",
                    "_rel_type": "cousin",
                    "source": "c_t-designs",
                    "target": "c_approximate_qecc"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_qubits_into_qubits_quantum_domain_2",
                    "_rel_type": "domain",
                    "source": "c_qubits_into_qubits",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_qubits_into_qubits_qecc_finite_21",
                    "_rel_type": "parent",
                    "source": "c_qubits_into_qubits",
                    "target": "c_qecc_finite"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_reed_muller_stabilizer_22",
                    "_rel_type": "parent",
                    "source": "c_quantum_reed_muller",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "parent_movassagh_ouyang_qecc_23",
                    "_rel_type": "parent",
                    "source": "c_movassagh_ouyang",
                    "target": "c_qecc"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_hamming_stabilizer_24",
                    "_rel_type": "parent",
                    "source": "c_quantum_hamming",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "parent_stab_5_1_3_stabilizer_25",
                    "_rel_type": "parent",
                    "source": "c_stab_5_1_3",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "cousin_stab_5_1_3_quantum_perfect__11",
                    "_rel_type": "cousin",
                    "source": "c_stab_5_1_3",
                    "target": "c_quantum_perfect"
                }
            },
            {
                "data": {
                    "id": "cousin_stab_5_1_3_quantum_cyclic__12",
                    "_rel_type": "cousin",
                    "source": "c_stab_5_1_3",
                    "target": "c_quantum_cyclic"
                }
            },
            {
                "data": {
                    "id": "cousin_stab_5_1_3_hamiltonian__13",
                    "_rel_type": "cousin",
                    "source": "c_stab_5_1_3",
                    "target": "c_hamiltonian"
                }
            },
            {
                "data": {
                    "id": "cousin_stab_5_1_3_majorana_stab__14",
                    "_rel_type": "cousin",
                    "source": "c_stab_5_1_3",
                    "target": "c_majorana_stab"
                }
            },
            {
                "data": {
                    "id": "parent_surface_css_26",
                    "_rel_type": "parent",
                    "source": "c_surface",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "parent_surface_topological_27",
                    "_rel_type": "parent",
                    "source": "c_surface",
                    "target": "c_topological"
                }
            },
            {
                "data": {
                    "id": "cousin_surface_quantum_ldpc__15",
                    "_rel_type": "cousin",
                    "source": "c_surface",
                    "target": "c_quantum_ldpc"
                }
            },
            {
                "data": {
                    "id": "cousin_surface_hypergraph_product__16",
                    "_rel_type": "cousin",
                    "source": "c_surface",
                    "target": "c_hypergraph_product"
                }
            },
            {
                "data": {
                    "id": "parent_cws_qubits_into_qubits_28",
                    "_rel_type": "parent",
                    "source": "c_cws",
                    "target": "c_qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "parent_homological_product_css_29",
                    "_rel_type": "parent",
                    "source": "c_homological_product",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "parent_homological_product_quantum_ldpc_30",
                    "_rel_type": "parent",
                    "source": "c_homological_product",
                    "target": "c_quantum_ldpc"
                }
            },
            {
                "data": {
                    "id": "parent_css_stabilizer_31",
                    "_rel_type": "parent",
                    "source": "c_css",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "parent_css_movassagh_ouyang_32",
                    "_rel_type": "parent",
                    "source": "c_css",
                    "target": "c_movassagh_ouyang"
                }
            },
            {
                "data": {
                    "id": "cousin_css_binary_linear__17",
                    "_rel_type": "cousin",
                    "source": "c_css",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "cousin_css_weakly_self_dual__18",
                    "_rel_type": "cousin",
                    "source": "c_css",
                    "target": "c_weakly_self_dual"
                }
            },
            {
                "data": {
                    "id": "parent_shor_nine_quantum_parity_33",
                    "_rel_type": "parent",
                    "source": "c_shor_nine",
                    "target": "c_quantum_parity"
                }
            },
            {
                "data": {
                    "id": "cousin_shor_nine_quantum_repetition__19",
                    "_rel_type": "cousin",
                    "source": "c_shor_nine",
                    "target": "c_quantum_repetition"
                }
            },
            {
                "data": {
                    "id": "cousin_shor_nine_quantum_concatenated__20",
                    "_rel_type": "cousin",
                    "source": "c_shor_nine",
                    "target": "c_quantum_concatenated"
                }
            },
            {
                "data": {
                    "id": "cousin_shor_nine_surface__21",
                    "_rel_type": "cousin",
                    "source": "c_shor_nine",
                    "target": "c_surface"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_parity_stabilizer_34",
                    "_rel_type": "parent",
                    "source": "c_quantum_parity",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_parity_quantum_concatenated_35",
                    "_rel_type": "parent",
                    "source": "c_quantum_parity",
                    "target": "c_quantum_concatenated"
                }
            },
            {
                "data": {
                    "id": "cousin_quantum_parity_bacon_shor__22",
                    "_rel_type": "cousin",
                    "source": "c_quantum_parity",
                    "target": "c_bacon_shor"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_repetition_css_36",
                    "_rel_type": "parent",
                    "source": "c_quantum_repetition",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "cousin_quantum_repetition_hamiltonian__23",
                    "_rel_type": "cousin",
                    "source": "c_quantum_repetition",
                    "target": "c_hamiltonian"
                }
            },
            {
                "data": {
                    "id": "parent_hypergraph_product_lifted_product_37",
                    "_rel_type": "parent",
                    "source": "c_hypergraph_product",
                    "target": "c_lifted_product"
                }
            },
            {
                "data": {
                    "id": "parent_hypergraph_product_homological_product_38",
                    "_rel_type": "parent",
                    "source": "c_hypergraph_product",
                    "target": "c_homological_product"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_polar_css_39",
                    "_rel_type": "parent",
                    "source": "c_quantum_polar",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "cousin_quantum_polar_polar__24",
                    "_rel_type": "cousin",
                    "source": "c_quantum_polar",
                    "target": "c_polar"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_ldpc_stabilizer_40",
                    "_rel_type": "parent",
                    "source": "c_quantum_ldpc",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "cousin_quantum_ldpc_ldpc__25",
                    "_rel_type": "cousin",
                    "source": "c_quantum_ldpc",
                    "target": "c_ldpc"
                }
            },
            {
                "data": {
                    "id": "cousin_quantum_ldpc_hamiltonian__26",
                    "_rel_type": "cousin",
                    "source": "c_quantum_ldpc",
                    "target": "c_hamiltonian"
                }
            },
            {
                "data": {
                    "id": "cousin_quantum_ldpc_dynamic_gen__27",
                    "_rel_type": "cousin",
                    "source": "c_quantum_ldpc",
                    "target": "c_dynamic_gen"
                }
            },
            {
                "data": {
                    "id": "parent_stab_15_1_3_quantum_reed_muller_41",
                    "_rel_type": "parent",
                    "source": "c_stab_15_1_3",
                    "target": "c_quantum_reed_muller"
                }
            },
            {
                "data": {
                    "id": "parent_lifted_product_homological_product_42",
                    "_rel_type": "parent",
                    "source": "c_lifted_product",
                    "target": "c_homological_product"
                }
            },
            {
                "data": {
                    "id": "parent_chuang-leung-yamamoto_fock_state_43",
                    "_rel_type": "parent",
                    "source": "c_chuang-leung-yamamoto",
                    "target": "c_fock_state"
                }
            },
            {
                "data": {
                    "id": "parent_wasilewski-banaszek_fock_state_44",
                    "_rel_type": "parent",
                    "source": "c_wasilewski-banaszek",
                    "target": "c_fock_state"
                }
            },
            {
                "data": {
                    "id": "cousin_wasilewski-banaszek_chuang-leung-yamamoto__28",
                    "_rel_type": "cousin",
                    "source": "c_wasilewski-banaszek",
                    "target": "c_chuang-leung-yamamoto"
                }
            },
            {
                "data": {
                    "id": "parent_hybrid_qudit_oscillator_oscillators_45",
                    "_rel_type": "parent",
                    "source": "c_hybrid_qudit_oscillator",
                    "target": "c_oscillators"
                }
            },
            {
                "data": {
                    "id": "cousin_hybrid_qudit_oscillator_qudits_into_oscillators__29",
                    "_rel_type": "cousin",
                    "source": "c_hybrid_qudit_oscillator",
                    "target": "c_qudits_into_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_cat_qudits_into_oscillators_46",
                    "_rel_type": "parent",
                    "source": "c_cat",
                    "target": "c_qudits_into_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_gkp_qudits_into_oscillators_47",
                    "_rel_type": "parent",
                    "source": "c_gkp",
                    "target": "c_qudits_into_oscillators"
                }
            },
            {
                "data": {
                    "id": "cousin_gkp_stabilizer__30",
                    "_rel_type": "cousin",
                    "source": "c_gkp",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "parent_oscillators_into_oscillators_oscillators_48",
                    "_rel_type": "parent",
                    "source": "c_oscillators_into_oscillators",
                    "target": "c_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_fock_state_qudits_into_oscillators_49",
                    "_rel_type": "parent",
                    "source": "c_fock_state",
                    "target": "c_qudits_into_oscillators"
                }
            },
            {
                "data": {
                    "id": "cousin_fock_state_binary_linear__31",
                    "_rel_type": "cousin",
                    "source": "c_fock_state",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "cousin_fock_state_qubits_into_qubits__32",
                    "_rel_type": "cousin",
                    "source": "c_fock_state",
                    "target": "c_qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_oscillators_quantum_domain_3",
                    "_rel_type": "domain",
                    "source": "c_oscillators",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_oscillators_qecc_50",
                    "_rel_type": "parent",
                    "source": "c_oscillators",
                    "target": "c_qecc"
                }
            },
            {
                "data": {
                    "id": "parent_qudits_into_oscillators_oscillators_51",
                    "_rel_type": "parent",
                    "source": "c_qudits_into_oscillators",
                    "target": "c_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_very-small-logical-qubit_hybrid_qudit_oscillator_52",
                    "_rel_type": "parent",
                    "source": "c_very-small-logical-qubit",
                    "target": "c_hybrid_qudit_oscillator"
                }
            },
            {
                "data": {
                    "id": "cousin_very-small-logical-qubit_quantum_repetition__33",
                    "_rel_type": "cousin",
                    "source": "c_very-small-logical-qubit",
                    "target": "c_quantum_repetition"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_group_quantum_quantum_domain_4",
                    "_rel_type": "domain",
                    "source": "c_group_quantum",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_group_quantum_qecc_53",
                    "_rel_type": "parent",
                    "source": "c_group_quantum",
                    "target": "c_qecc"
                }
            },
            {
                "data": {
                    "id": "cousin_group_quantum_qecc_finite__34",
                    "_rel_type": "cousin",
                    "source": "c_group_quantum",
                    "target": "c_qecc_finite"
                }
            },
            {
                "data": {
                    "id": "cousin_group_quantum_qudits_into_qudits__35",
                    "_rel_type": "cousin",
                    "source": "c_group_quantum",
                    "target": "c_qudits_into_qudits"
                }
            },
            {
                "data": {
                    "id": "cousin_group_quantum_oscillators__36",
                    "_rel_type": "cousin",
                    "source": "c_group_quantum",
                    "target": "c_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_molecular_group_gkp_54",
                    "_rel_type": "parent",
                    "source": "c_molecular",
                    "target": "c_group_gkp"
                }
            },
            {
                "data": {
                    "id": "parent_group_gkp_group_quantum_55",
                    "_rel_type": "parent",
                    "source": "c_group_gkp",
                    "target": "c_group_quantum"
                }
            },
            {
                "data": {
                    "id": "cousin_group_gkp_oscillators_into_oscillators__37",
                    "_rel_type": "cousin",
                    "source": "c_group_gkp",
                    "target": "c_oscillators_into_oscillators"
                }
            },
            {
                "data": {
                    "id": "cousin_group_gkp_css__38",
                    "_rel_type": "cousin",
                    "source": "c_group_gkp",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "cousin_group_gkp_gkp__39",
                    "_rel_type": "cousin",
                    "source": "c_group_gkp",
                    "target": "c_gkp"
                }
            },
            {
                "data": {
                    "id": "parent_qudit_stabilizer_qudits_into_qudits_56",
                    "_rel_type": "parent",
                    "source": "c_qudit_stabilizer",
                    "target": "c_qudits_into_qudits"
                }
            },
            {
                "data": {
                    "id": "parent_polynomial_qudit_css_57",
                    "_rel_type": "parent",
                    "source": "c_polynomial",
                    "target": "c_qudit_css"
                }
            },
            {
                "data": {
                    "id": "parent_prime_qudit_stabilizer_qudit_stabilizer_58",
                    "_rel_type": "parent",
                    "source": "c_prime_qudit_stabilizer",
                    "target": "c_qudit_stabilizer"
                }
            },
            {
                "data": {
                    "id": "parent_prime_qudit_stabilizer_galois_stabilizer_59",
                    "_rel_type": "parent",
                    "source": "c_prime_qudit_stabilizer",
                    "target": "c_galois_stabilizer"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_qudits_into_qudits_quantum_domain_5",
                    "_rel_type": "domain",
                    "source": "c_qudits_into_qudits",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_qudits_into_qudits_qecc_finite_60",
                    "_rel_type": "parent",
                    "source": "c_qudits_into_qudits",
                    "target": "c_qecc_finite"
                }
            },
            {
                "data": {
                    "id": "parent_qudit_css_qudit_stabilizer_61",
                    "_rel_type": "parent",
                    "source": "c_qudit_css",
                    "target": "c_qudit_stabilizer"
                }
            },
            {
                "data": {
                    "id": "cousin_qudit_css_css__40",
                    "_rel_type": "cousin",
                    "source": "c_qudit_css",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "parent_galois_stabilizer_galois_into_galois_62",
                    "_rel_type": "parent",
                    "source": "c_galois_stabilizer",
                    "target": "c_galois_into_galois"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_galois_into_galois_quantum_domain_6",
                    "_rel_type": "domain",
                    "source": "c_galois_into_galois",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_galois_into_galois_qecc_finite_63",
                    "_rel_type": "parent",
                    "source": "c_galois_into_galois",
                    "target": "c_qecc_finite"
                }
            },
            {
                "data": {
                    "id": "cousin_galois_into_galois_qudits_into_qudits__41",
                    "_rel_type": "cousin",
                    "source": "c_galois_into_galois",
                    "target": "c_qudits_into_qudits"
                }
            },
            {
                "data": {
                    "id": "parent_galois_css_galois_stabilizer_64",
                    "_rel_type": "parent",
                    "source": "c_galois_css",
                    "target": "c_galois_stabilizer"
                }
            },
            {
                "data": {
                    "id": "cousin_galois_css_css__42",
                    "_rel_type": "cousin",
                    "source": "c_galois_css",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "cousin_galois_css_qudit_css__43",
                    "_rel_type": "cousin",
                    "source": "c_galois_css",
                    "target": "c_qudit_css"
                }
            },
            {
                "data": {
                    "id": "parent_galois_polynomial_galois_css_65",
                    "_rel_type": "parent",
                    "source": "c_galois_polynomial",
                    "target": "c_galois_css"
                }
            },
            {
                "data": {
                    "id": "parent_dynamic_gen_oecc_66",
                    "_rel_type": "parent",
                    "source": "c_dynamic_gen",
                    "target": "c_oecc"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_concatenated_qecc_67",
                    "_rel_type": "parent",
                    "source": "c_quantum_concatenated",
                    "target": "c_qecc"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_cyclic_qecc_68",
                    "_rel_type": "parent",
                    "source": "c_quantum_cyclic",
                    "target": "c_qecc"
                }
            },
            {
                "data": {
                    "id": "cousin_quantum_cyclic_cyclic__44",
                    "_rel_type": "cousin",
                    "source": "c_quantum_cyclic",
                    "target": "c_cyclic"
                }
            },
            {
                "data": {
                    "id": "parent_topological_hamiltonian_69",
                    "_rel_type": "parent",
                    "source": "c_topological",
                    "target": "c_hamiltonian"
                }
            },
            {
                "data": {
                    "id": "cousin_topological_quantum_ldpc__45",
                    "_rel_type": "cousin",
                    "source": "c_topological",
                    "target": "c_quantum_ldpc"
                }
            },
            {
                "data": {
                    "id": "parent_random_circuit_dynamic_gen_70",
                    "_rel_type": "parent",
                    "source": "c_random_circuit",
                    "target": "c_dynamic_gen"
                }
            },
            {
                "data": {
                    "id": "parent_approximate_qecc_qecc_71",
                    "_rel_type": "parent",
                    "source": "c_approximate_qecc",
                    "target": "c_qecc"
                }
            },
            {
                "data": {
                    "id": "parent_fracton_hamiltonian_72",
                    "_rel_type": "parent",
                    "source": "c_fracton",
                    "target": "c_hamiltonian"
                }
            },
            {
                "data": {
                    "id": "cousin_fracton_topological__46",
                    "_rel_type": "cousin",
                    "source": "c_fracton",
                    "target": "c_topological"
                }
            },
            {
                "data": {
                    "id": "parent_hamiltonian_oecc_73",
                    "_rel_type": "parent",
                    "source": "c_hamiltonian",
                    "target": "c_oecc"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_perfect_qudits_into_qudits_74",
                    "_rel_type": "parent",
                    "source": "c_quantum_perfect",
                    "target": "c_qudits_into_qudits"
                }
            },
            {
                "data": {
                    "id": "cousin_quantum_perfect_perfect__47",
                    "_rel_type": "cousin",
                    "source": "c_quantum_perfect",
                    "target": "c_perfect"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_fermions_quantum_domain_7",
                    "_rel_type": "domain",
                    "source": "c_fermions",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_fermions_qecc_finite_75",
                    "_rel_type": "parent",
                    "source": "c_fermions",
                    "target": "c_qecc_finite"
                }
            },
            {
                "data": {
                    "id": "cousin_fermions_qubits_into_qubits__48",
                    "_rel_type": "cousin",
                    "source": "c_fermions",
                    "target": "c_qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "cousin_fermions_oscillators__49",
                    "_rel_type": "cousin",
                    "source": "c_fermions",
                    "target": "c_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_majorana_stab_fermions_76",
                    "_rel_type": "parent",
                    "source": "c_majorana_stab",
                    "target": "c_fermions"
                }
            },
            {
                "data": {
                    "id": "parent_majorana_stab_stabilizer_77",
                    "_rel_type": "parent",
                    "source": "c_majorana_stab",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "cousin_majorana_stab_weakly_self_dual__50",
                    "_rel_type": "cousin",
                    "source": "c_majorana_stab",
                    "target": "c_weakly_self_dual"
                }
            },
            {
                "data": {
                    "id": "cousin_majorana_stab_css__51",
                    "_rel_type": "cousin",
                    "source": "c_majorana_stab",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "cousin_majorana_stab_cyclic__52",
                    "_rel_type": "cousin",
                    "source": "c_majorana_stab",
                    "target": "c_cyclic"
                }
            },
            {
                "data": {
                    "id": "cousin_majorana_stab_reed_muller__53",
                    "_rel_type": "cousin",
                    "source": "c_majorana_stab",
                    "target": "c_reed_muller"
                }
            }
        ]
    },
    "fixed_node_constraint": [
        {
            "nodeId": "domain_classical_domain",
            "position": {
                "x": -450,
                "y": 0
            }
        },
        {
            "nodeId": "domain_quantum_domain",
            "position": {
                "x": 450,
                "y": 0
            }
        }
    ],
    "alignment_constraint": {
        "horizontal": [
            [
                "c_bits_into_bits",
                "c_q-ary_digits_into_q-ary_digits",
                "c_qubits_into_qubits",
                "c_qudits_into_qudits",
                "c_oscillators",
                "c_fermions",
                "c_group_quantum",
                "c_galois_into_galois"
            ]
        ]
    },
    "relative_placement_constraint": [
        {
            "bottom": "domain_classical_domain",
            "top": "c_oaecc",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_ecc",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_q-ary_digits_into_q-ary_digits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_weakly_self_dual",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_q-ary_linear",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_self_dual",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_perfect",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_reed_solomon",
            "gap": 200
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_classical_abelian_group",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_cyclic",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_generalized_concatenated",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_tanner",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_polar",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_binary_linear",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_ldpc",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_reed_muller",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_bits_into_bits",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_oecc",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_qecc_finite",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_qecc",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_stab_4_2_2",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_stabilizer",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_t-designs",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qubits_into_qubits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_quantum_reed_muller",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_movassagh_ouyang",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_bacon_shor",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_quantum_hamming",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_stab_5_1_3",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_surface",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_cws",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_homological_product",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_css",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_shor_nine",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_quantum_parity",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_quantum_repetition",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_hypergraph_product",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_quantum_polar",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_quantum_ldpc",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_stab_15_1_3",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_lifted_product",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_chuang-leung-yamamoto",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_wasilewski-banaszek",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_hybrid_qudit_oscillator",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_cat",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_gkp",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_oscillators_into_oscillators",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_fock_state",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_oscillators",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qudits_into_oscillators",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_very-small-logical-qubit",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_group_quantum",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_molecular",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_group_gkp",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qudit_stabilizer",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_polynomial",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_prime_qudit_stabilizer",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qudits_into_qudits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qudit_css",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_galois_stabilizer",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_galois_into_galois",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_galois_css",
            "gap": 200
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_galois_polynomial",
            "gap": 200
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_dynamic_gen",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_quantum_concatenated",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_quantum_cyclic",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_topological",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_random_circuit",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_approximate_qecc",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_fracton",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_hamiltonian",
            "gap": 100
        },
        {
            "bottom": "domain_classical_domain",
            "top": "c_quantum_perfect",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_fermions",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_majorana_stab",
            "gap": 200
        },
        {
            "top": "c_oaecc",
            "bottom": "c_ecc",
            "gap": 100
        },
        {
            "top": "c_ecc",
            "bottom": "c_q-ary_digits_into_q-ary_digits",
            "gap": 100
        },
        {
            "top": "c_q-ary_digits_into_q-ary_digits",
            "bottom": "c_weakly_self_dual",
            "gap": 100
        },
        {
            "top": "c_q-ary_digits_into_q-ary_digits",
            "bottom": "c_q-ary_linear",
            "gap": 100
        },
        {
            "top": "c_weakly_self_dual",
            "bottom": "c_self_dual",
            "gap": 100
        },
        {
            "top": "c_q-ary_digits_into_q-ary_digits",
            "bottom": "c_perfect",
            "gap": 100
        },
        {
            "top": "c_q-ary_linear",
            "bottom": "c_reed_solomon",
            "gap": 100
        },
        {
            "top": "c_ecc",
            "bottom": "c_cyclic",
            "gap": 100
        },
        {
            "top": "c_ecc",
            "bottom": "c_generalized_concatenated",
            "gap": 100
        },
        {
            "top": "c_binary_linear",
            "bottom": "c_tanner",
            "gap": 100
        },
        {
            "top": "c_binary_linear",
            "bottom": "c_polar",
            "gap": 100
        },
        {
            "top": "c_bits_into_bits",
            "bottom": "c_binary_linear",
            "gap": 100
        },
        {
            "top": "c_binary_linear",
            "bottom": "c_ldpc",
            "gap": 100
        },
        {
            "top": "c_binary_linear",
            "bottom": "c_reed_muller",
            "gap": 100
        },
        {
            "top": "c_ecc",
            "bottom": "c_bits_into_bits",
            "gap": 100
        },
        {
            "top": "c_oaecc",
            "bottom": "c_oecc",
            "gap": 100
        },
        {
            "top": "c_qecc",
            "bottom": "c_qecc_finite",
            "gap": 100
        },
        {
            "top": "c_oecc",
            "bottom": "c_qecc",
            "gap": 100
        },
        {
            "top": "c_css",
            "bottom": "c_stab_4_2_2",
            "gap": 100
        },
        {
            "top": "c_cws",
            "bottom": "c_stabilizer",
            "gap": 100
        },
        {
            "top": "c_random_circuit",
            "bottom": "c_t-designs",
            "gap": 100
        },
        {
            "top": "c_qecc_finite",
            "bottom": "c_qubits_into_qubits",
            "gap": 100
        },
        {
            "top": "c_stabilizer",
            "bottom": "c_quantum_reed_muller",
            "gap": 100
        },
        {
            "top": "c_qecc",
            "bottom": "c_movassagh_ouyang",
            "gap": 100
        },
        {
            "top": "c_stabilizer",
            "bottom": "c_quantum_hamming",
            "gap": 100
        },
        {
            "top": "c_stabilizer",
            "bottom": "c_stab_5_1_3",
            "gap": 100
        },
        {
            "top": "c_css",
            "bottom": "c_surface",
            "gap": 100
        },
        {
            "top": "c_topological",
            "bottom": "c_surface",
            "gap": 100
        },
        {
            "top": "c_qubits_into_qubits",
            "bottom": "c_cws",
            "gap": 100
        },
        {
            "top": "c_css",
            "bottom": "c_homological_product",
            "gap": 100
        },
        {
            "top": "c_quantum_ldpc",
            "bottom": "c_homological_product",
            "gap": 100
        },
        {
            "top": "c_stabilizer",
            "bottom": "c_css",
            "gap": 100
        },
        {
            "top": "c_movassagh_ouyang",
            "bottom": "c_css",
            "gap": 100
        },
        {
            "top": "c_quantum_parity",
            "bottom": "c_shor_nine",
            "gap": 100
        },
        {
            "top": "c_stabilizer",
            "bottom": "c_quantum_parity",
            "gap": 100
        },
        {
            "top": "c_quantum_concatenated",
            "bottom": "c_quantum_parity",
            "gap": 100
        },
        {
            "top": "c_css",
            "bottom": "c_quantum_repetition",
            "gap": 100
        },
        {
            "top": "c_lifted_product",
            "bottom": "c_hypergraph_product",
            "gap": 100
        },
        {
            "top": "c_homological_product",
            "bottom": "c_hypergraph_product",
            "gap": 100
        },
        {
            "top": "c_css",
            "bottom": "c_quantum_polar",
            "gap": 100
        },
        {
            "top": "c_stabilizer",
            "bottom": "c_quantum_ldpc",
            "gap": 100
        },
        {
            "top": "c_quantum_reed_muller",
            "bottom": "c_stab_15_1_3",
            "gap": 100
        },
        {
            "top": "c_homological_product",
            "bottom": "c_lifted_product",
            "gap": 100
        },
        {
            "top": "c_fock_state",
            "bottom": "c_chuang-leung-yamamoto",
            "gap": 100
        },
        {
            "top": "c_fock_state",
            "bottom": "c_wasilewski-banaszek",
            "gap": 100
        },
        {
            "top": "c_oscillators",
            "bottom": "c_hybrid_qudit_oscillator",
            "gap": 100
        },
        {
            "top": "c_qudits_into_oscillators",
            "bottom": "c_cat",
            "gap": 100
        },
        {
            "top": "c_qudits_into_oscillators",
            "bottom": "c_gkp",
            "gap": 100
        },
        {
            "top": "c_oscillators",
            "bottom": "c_oscillators_into_oscillators",
            "gap": 100
        },
        {
            "top": "c_qudits_into_oscillators",
            "bottom": "c_fock_state",
            "gap": 100
        },
        {
            "top": "c_qecc",
            "bottom": "c_oscillators",
            "gap": 100
        },
        {
            "top": "c_oscillators",
            "bottom": "c_qudits_into_oscillators",
            "gap": 100
        },
        {
            "top": "c_hybrid_qudit_oscillator",
            "bottom": "c_very-small-logical-qubit",
            "gap": 100
        },
        {
            "top": "c_qecc",
            "bottom": "c_group_quantum",
            "gap": 100
        },
        {
            "top": "c_group_gkp",
            "bottom": "c_molecular",
            "gap": 100
        },
        {
            "top": "c_group_quantum",
            "bottom": "c_group_gkp",
            "gap": 100
        },
        {
            "top": "c_qudits_into_qudits",
            "bottom": "c_qudit_stabilizer",
            "gap": 100
        },
        {
            "top": "c_qudit_css",
            "bottom": "c_polynomial",
            "gap": 100
        },
        {
            "top": "c_qudit_stabilizer",
            "bottom": "c_prime_qudit_stabilizer",
            "gap": 100
        },
        {
            "top": "c_galois_stabilizer",
            "bottom": "c_prime_qudit_stabilizer",
            "gap": 100
        },
        {
            "top": "c_qecc_finite",
            "bottom": "c_qudits_into_qudits",
            "gap": 100
        },
        {
            "top": "c_qudit_stabilizer",
            "bottom": "c_qudit_css",
            "gap": 100
        },
        {
            "top": "c_galois_into_galois",
            "bottom": "c_galois_stabilizer",
            "gap": 100
        },
        {
            "top": "c_qecc_finite",
            "bottom": "c_galois_into_galois",
            "gap": 100
        },
        {
            "top": "c_galois_stabilizer",
            "bottom": "c_galois_css",
            "gap": 100
        },
        {
            "top": "c_galois_css",
            "bottom": "c_galois_polynomial",
            "gap": 100
        },
        {
            "top": "c_oecc",
            "bottom": "c_dynamic_gen",
            "gap": 100
        },
        {
            "top": "c_qecc",
            "bottom": "c_quantum_concatenated",
            "gap": 100
        },
        {
            "top": "c_qecc",
            "bottom": "c_quantum_cyclic",
            "gap": 100
        },
        {
            "top": "c_hamiltonian",
            "bottom": "c_topological",
            "gap": 100
        },
        {
            "top": "c_dynamic_gen",
            "bottom": "c_random_circuit",
            "gap": 100
        },
        {
            "top": "c_qecc",
            "bottom": "c_approximate_qecc",
            "gap": 100
        },
        {
            "top": "c_hamiltonian",
            "bottom": "c_fracton",
            "gap": 100
        },
        {
            "top": "c_oecc",
            "bottom": "c_hamiltonian",
            "gap": 100
        },
        {
            "top": "c_qecc_finite",
            "bottom": "c_fermions",
            "gap": 100
        },
        {
            "top": "c_fermions",
            "bottom": "c_majorana_stab",
            "gap": 100
        },
        {
            "top": "c_stabilizer",
            "bottom": "c_majorana_stab",
            "gap": 100
        }
    ]
};