pretty_code_graph_data = {
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
                    "x": 150,
                    "y": -500
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
                    "y": -500
                }
            },
            {
                "data": {
                    "id": "c_oaecc",
                    "label": "Operator-algebra error-correcting code",
                    "_description": "Stub.",
                    "_code_href": "/c/oaecc#ecc_oaecc",
                    "_family_generation_level": 0
                }
            },
            {
                "data": {
                    "id": "c_generalized_concatenated",
                    "label": "Generalized concatenated classical code",
                    "_description": "Stub.",
                    "_code_href": "/c/generalized_concatenated#ecc_generalized_concatenated",
                    "_family_generation_level": 2
                }
            },
            {
                "data": {
                    "id": "c_ecc",
                    "label": "Error-correcting code",
                    "_description": [
                        "Encodes \\(K\\) states (codewords) over an alphabet with \\(N\\) elements such that it is possible to recover the codewords from errors \\(E\\). Formally, an error-correcting code \\((u,\\cal{E})\\) is an \\..."
                    ],
                    "_code_href": "/c/ecc#ecc_ecc",
                    "_family_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_binary_linear",
                    "label": "Binary linear code",
                    "_description": [
                        "An \\((n,2^k,d)\\) linear code is denoted as \\([n,k,d]\\). Its codewords form a linear subspace, i.e., for any codewords \\(x,y\\), \\(x+y\\) is also a codeword. Often defined in terms of a generator matr..."
                    ],
                    "_code_href": "/c/binary_linear#ecc_binary_linear",
                    "_family_generation_level": 3
                }
            },
            {
                "data": {
                    "id": "c_polar_codes",
                    "label": "Polar code",
                    "_description": [
                        "In its basic version, a binary linear polar code encodes \\(K\\) message bits into \\(N=2^n\\) bits. The linear transformation that defines the code is given by the matrix \\(G^{(n)}=B_N G^{\\otimes n}\\)..."
                    ],
                    "_code_href": "/c/polar_codes#ecc_polar_codes",
                    "_family_generation_level": 4
                }
            },
            {
                "data": {
                    "id": "c_bits_into_bits",
                    "label": "Binary code",
                    "_description": "Encodes \\(K\\) states (codewords) in \\(n\\) binary coordinates and has distance \\(d\\). Usually denoted as \\((n,K,d)\\). The distance is the minimum Hamming distance between a pair of distinct codewords.",
                    "_code_href": "/c/bits_into_bits#ecc_bits_into_bits",
                    "_family_generation_level": 2,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Binary Kingdom",
                    "_kingdom_href": "/kingdom/bits_into_bits"
                }
            },
            {
                "data": {
                    "id": "c_reed_muller",
                    "label": "Reed-Muller code",
                    "_description": "Stub.",
                    "_code_href": "/c/reed_muller#ecc_reed_muller",
                    "_family_generation_level": 4
                }
            },
            {
                "data": {
                    "id": "c_ldpc",
                    "label": "Low-density parity-check (LDPC) code",
                    "_description": "Stub.",
                    "_code_href": "/c/ldpc#ecc_ldpc",
                    "_family_generation_level": 4
                }
            },
            {
                "data": {
                    "id": "c_reed_solomon",
                    "label": "Reed-Solomon code",
                    "_description": [
                        "\\([n,k,n-k+1]_q\\) linear code. Let \\(\\{\\alpha_1,\\cdots,\\alpha_n\\}\\) be \\(n\\) distinct nonzero elements of \\(GF(q)\\) for prime \\(q>n\\). Encodes \\(\\mu=\\{\\mu_0,\\cdots,\\mu_{k-1}\\}\\) into \\(\\{f_\\mu(\\alp..."
                    ],
                    "_code_href": "/c/reed_solomon#ecc_reed_solomon",
                    "_family_generation_level": 4
                }
            },
            {
                "data": {
                    "id": "c_q-ary_digits_into_q-ary_digits",
                    "label": "\\(q\\)-ary code",
                    "_description": [
                        "Encodes \\(K\\) states (codewords) in \\(n\\) \\(q\\)-ary coordinates and has distance \\(d\\). Usually denoted as \\((n,K,d)_q\\). The distance is the minimum number of coordinates where two strings in the ..."
                    ],
                    "_code_href": "/c/q-ary_digits_into_q-ary_digits#ecc_q-ary_digits_into_q-ary_digits",
                    "_family_generation_level": 2,
                    "_is_kingdom": 1,
                    "_kingdom_name": "\\(q\\)-ary Digits Kingdom",
                    "_kingdom_href": "/kingdom/q-ary_digits_into_q-ary_digits"
                }
            },
            {
                "data": {
                    "id": "c_q-ary_linear",
                    "label": "\\(q\\)-ary linear code",
                    "_description": [
                        "An \\((n,K,d)_q\\) linear code is denoted as \\([n,k,d]_q\\), where \\(k=\\log_{q}K\\) need not be an integer. Its codewords form a linear subspace, i.e., for any codewords \\(x,y\\), \\(\\alpha x+ \\beta y\\) ..."
                    ],
                    "_code_href": "/c/q-ary_linear#ecc_q-ary_linear",
                    "_family_generation_level": 3
                }
            },
            {
                "data": {
                    "id": "c_qecc",
                    "label": "Quantum error-correcting code (QECC)",
                    "_description": [
                        "Encodes quantum information in a (\\textit{logical}) subspace of a (\\textit{physical}) Hilbert space such that it is possible to recover said information from errors that act as linear maps on the p..."
                    ],
                    "_code_href": "/c/qecc#ecc_qecc",
                    "_family_generation_level": 2
                }
            },
            {
                "data": {
                    "id": "c_oecc",
                    "label": "Operator quantum error-correcting code",
                    "_description": "Stub.",
                    "_code_href": "/c/oecc#ecc_oecc",
                    "_family_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_qecc_finite",
                    "label": "Quantum error-correcting code (QECC) in finite dimensions",
                    "_description": [
                        "Encodes quantum information in a \\(K\\)-dimensional (\\textit{logical}) subspace \\(\\mathsf{H_K}\\) of an \\(N\\)-dimensional (\\textit{physical}) Hilbert space \\(\\mathsf{H_N}\\) such that it is possible t..."
                    ],
                    "_code_href": "/c/qecc_finite#ecc_qecc_finite",
                    "_family_generation_level": 3
                }
            },
            {
                "data": {
                    "id": "c_gkp",
                    "label": "Gotteman-Kitaev-Preskill (GKP) code",
                    "_description": "Stub.",
                    "_code_href": "/c/gkp#ecc_gkp",
                    "_family_generation_level": 5
                }
            },
            {
                "data": {
                    "id": "c_oscillators",
                    "label": "Oscillator code",
                    "_description": "Encodes logical Hilbert space, finite- or infinite-dimensional, into Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{R}^n\\).",
                    "_code_href": "/c/oscillators#ecc_oscillators",
                    "_family_generation_level": 3,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Oscillator Kingdom",
                    "_kingdom_href": "/kingdom/oscillators"
                }
            },
            {
                "data": {
                    "id": "c_oscillators_into_oscillators",
                    "label": "Oscillator-into-oscillator code",
                    "_description": "Encodes Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{R}^k\\) into that on \\(\\mathbb{R}^n\\). Usually denoted as \\(((n,k))_{\\mathbb{R}}\\).",
                    "_code_href": "/c/oscillators_into_oscillators#ecc_oscillators_into_oscillators",
                    "_family_generation_level": 4
                }
            },
            {
                "data": {
                    "id": "c_qudits_into_oscillators",
                    "label": "Qudit-into-oscillator code",
                    "_description": "Encodes \\(K\\)-dimensional Hilbert space into Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{R}^n\\).",
                    "_code_href": "/c/qudits_into_oscillators#ecc_qudits_into_oscillators",
                    "_family_generation_level": 4
                }
            },
            {
                "data": {
                    "id": "c_css",
                    "label": "Calderbank-Shor-Steane (CSS) stabilizer code",
                    "_description": [
                        "An \\([[n,k,d]]\\) stabilizer code whose encoding is based on two \\hyperref[code:binary_linear]{binary linear codes}, an \\([n,k_1,d_1]\\) code \\(C_1\\) and \\([n,k_2,d_2]\\) code \\(C_2\\) with \\(C_1^\\perp..."
                    ],
                    "_code_href": "/c/css#ecc_css",
                    "_family_generation_level": 6
                }
            },
            {
                "data": {
                    "id": "c_homological",
                    "label": "Homological code",
                    "_description": "Stub.",
                    "_code_href": "/c/homological#ecc_homological",
                    "_family_generation_level": 7
                }
            },
            {
                "data": {
                    "id": "c_hypergraph_product",
                    "label": "Hypergraph product code",
                    "_description": "A family of \\([[n,k,d]]\\) CSS codes whose construction is based on two binary linear \\textit{seed} codes \\(C_1\\) and \\(C_2\\).",
                    "_code_href": "/c/hypergraph_product#ecc_hypergraph_product",
                    "_family_generation_level": 7
                }
            },
            {
                "data": {
                    "id": "c_stabilizer",
                    "label": "Stabilizer code",
                    "_description": [
                        "An \\(((n,2^k,d))\\) stabilizer code is denoted as \\([[n,k]]\\) or \\([[n,k,d]]\\), where \\(d\\) is the code's distance. Logical subspace is the joint \\(+1\\) eigenspace of a set of \\(2^{n-k}\\) commuting ..."
                    ],
                    "_code_href": "/c/stabilizer#ecc_stabilizer",
                    "_family_generation_level": 5
                }
            },
            {
                "data": {
                    "id": "c_quantum_repetition",
                    "label": "Quantum repetition code",
                    "_description": "Encodes \\(1\\) qubit into \\(n\\) qubits according to \\(|0\\rangle\\to|0\\rangle^{\\otimes n}\\) and \\(|1\\rangle\\to|1\\rangle^{\\otimes n}\\).",
                    "_code_href": "/c/quantum_repetition#ecc_quantum_repetition",
                    "_family_generation_level": 7
                }
            },
            {
                "data": {
                    "id": "c_quantum_ldpc",
                    "label": "Quantum low-density parity-check (QLDPC) code",
                    "_description": "",
                    "_code_href": "/c/quantum_ldpc#ecc_quantum_ldpc",
                    "_family_generation_level": 6
                }
            },
            {
                "data": {
                    "id": "c_surface",
                    "label": "Kitaev's surface code",
                    "_description": [
                        "A family of stabilizer codes whose generators are few-body \\(X\\)-type and \\(Z\\)-type Pauli strings associated to the stars and plaquettes, respectively, of a tessellation of a two-dimensional surfa..."
                    ],
                    "_code_href": "/c/surface#ecc_surface",
                    "_family_generation_level": 7
                }
            },
            {
                "data": {
                    "id": "c_topological",
                    "label": "Topological code",
                    "_description": "Stub.",
                    "_code_href": "/c/topological#ecc_topological",
                    "_family_generation_level": 7
                }
            },
            {
                "data": {
                    "id": "c_qubits_into_qubits",
                    "label": "Qubit code",
                    "_description": "Encodes \\(K\\)-dimensional Hilbert space into a \\(2^n\\)-dimensional (i.e., \\(n\\)-qubit) Hilbert space. Usually denoted as \\(((n,K))\\) or \\(((n,K,d))\\), where \\(d\\) is the code's distance.",
                    "_code_href": "/c/qubits_into_qubits#ecc_qubits_into_qubits",
                    "_family_generation_level": 4,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Qubit Kingdom",
                    "_kingdom_href": "/kingdom/qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "c_group_gkp",
                    "label": "Group GKP codes",
                    "_description": [
                        "Group code whose construction is based on nested subgroups \\(H\\subset K \\subset G\\). Logical subspace is spanned by basis states that are equal superpositions of elements of cosets of \\(H\\) in \\(K\\..."
                    ],
                    "_code_href": "/c/group_gkp#ecc_group_gkp",
                    "_family_generation_level": 4
                }
            },
            {
                "data": {
                    "id": "c_group_quantum",
                    "label": "Group quantum code",
                    "_description": [
                        "Encodes a \\textit{logical} Hilbert space, finite- or infinite-dimensional, into a \\textit{physical} Hilbert space of \\(\\ell^2\\)-normalizable functions on a second-countable unimodular group. For \\(..."
                    ],
                    "_code_href": "/c/group_quantum#ecc_group_quantum",
                    "_family_generation_level": 3,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Group Kingdom",
                    "_kingdom_href": "/kingdom/group_quantum"
                }
            },
            {
                "data": {
                    "id": "c_molecular",
                    "label": "Molecular code",
                    "_description": [
                        "Encodes finite-dimensional Hilbert space into the Hilbert space of \\(\\ell^2\\)-normalizable functions on the group \\(SO_3\\). Construction is based on nested subgroups \\(H\\subset K \\subset SO_3\\), wh..."
                    ],
                    "_code_href": "/c/molecular#ecc_molecular",
                    "_family_generation_level": 5
                }
            },
            {
                "data": {
                    "id": "c_hybrid_qudit_oscillator",
                    "label": "Hybrid qudit-oscillator code",
                    "_description": [
                        "Encodes a \\(K\\)-dimensional logical Hilbert space into \\(n_1\\) qudits of dimension \\(q\\) and \\(n_2\\) oscillators, i.e., the Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{Z}_q^{n_1..."
                    ],
                    "_code_href": "/c/hybrid_qudit_oscillator#ecc_hybrid_qudit_oscillator",
                    "_family_generation_level": 4
                }
            },
            {
                "data": {
                    "id": "c_qudit_stabilizer",
                    "label": "Qudit stabilizer code",
                    "_description": [
                        "An \\(((n,q^k,d))_q\\) stabilizer code for prime \\(q\\) is denoted as \\([[n,k]]_q\\) or \\([[n,k,d]]_q\\), where \\(d\\) is the code's distance. Logical subspace is the joint \\(+1\\) eigenspace of a set of ..."
                    ],
                    "_code_href": "/c/qudit_stabilizer#ecc_qudit_stabilizer",
                    "_family_generation_level": 5
                }
            },
            {
                "data": {
                    "id": "c_qudits_into_qudits",
                    "label": "Qudit code",
                    "_description": "Encodes \\(K\\)-dimensional Hilbert space into a \\(q^n\\)-dimensional (\\(n\\)-qudit) Hilbert space. Usually denoted as \\(((n,K))_q\\) or \\(((n,K,d))_q\\), whenever the code's distance \\(d\\) is defined.",
                    "_code_href": "/c/qudits_into_qudits#ecc_qudits_into_qudits",
                    "_family_generation_level": 4,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Qu\\emph{d}it Kingdom",
                    "_kingdom_href": "/kingdom/qudits_into_qudits"
                }
            },
            {
                "data": {
                    "id": "c_fermions",
                    "label": "Fermionic code",
                    "_description": "stub",
                    "_code_href": "/c/fermions#ecc_fermions",
                    "_family_generation_level": 4
                }
            }
        ],
        "edges": [
            {
                "data": {
                    "id": "parent_generalized_concatenated_ecc_0",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_generalized_concatenated",
                    "target": "c_ecc"
                }
            },
            {
                "data": {
                    "id": "parent_ecc_oaecc_1",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_ecc",
                    "target": "c_oaecc"
                }
            },
            {
                "data": {
                    "id": "parent_binary_linear_bits_into_bits_2",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_binary_linear",
                    "target": "c_bits_into_bits"
                }
            },
            {
                "data": {
                    "id": "parent_polar_codes_binary_linear_3",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_polar_codes",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "cousin_polar_codes_reed_muller__0",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_polar_codes",
                    "target": "c_reed_muller"
                }
            },
            {
                "data": {
                    "id": "cousin_polar_codes_generalized_concatenated__1",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_polar_codes",
                    "target": "c_generalized_concatenated"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_bits_into_bits_classical_domain_0",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_bits_into_bits",
                    "target": "domain_classical_domain"
                }
            },
            {
                "data": {
                    "id": "parent_bits_into_bits_ecc_4",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_bits_into_bits",
                    "target": "c_ecc"
                }
            },
            {
                "data": {
                    "id": "parent_reed_muller_binary_linear_5",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_reed_muller",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "parent_ldpc_binary_linear_6",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_ldpc",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "parent_reed_solomon_q-ary_linear_7",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_reed_solomon",
                    "target": "c_q-ary_linear"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_q-ary_digits_into_q-ary_digits_classical_domain_1",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_q-ary_digits_into_q-ary_digits",
                    "target": "domain_classical_domain"
                }
            },
            {
                "data": {
                    "id": "parent_q-ary_digits_into_q-ary_digits_ecc_8",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_q-ary_digits_into_q-ary_digits",
                    "target": "c_ecc"
                }
            },
            {
                "data": {
                    "id": "parent_q-ary_linear_q-ary_digits_into_q-ary_digits_9",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_q-ary_linear",
                    "target": "c_q-ary_digits_into_q-ary_digits"
                }
            },
            {
                "data": {
                    "id": "parent_qecc_oecc_10",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_qecc",
                    "target": "c_oecc"
                }
            },
            {
                "data": {
                    "id": "parent_oecc_oaecc_11",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_oecc",
                    "target": "c_oaecc"
                }
            },
            {
                "data": {
                    "id": "parent_qecc_finite_qecc_12",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_qecc_finite",
                    "target": "c_qecc"
                }
            },
            {
                "data": {
                    "id": "parent_gkp_qudits_into_oscillators_13",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_gkp",
                    "target": "c_qudits_into_oscillators"
                }
            },
            {
                "data": {
                    "id": "cousin_gkp_stabilizer__2",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_gkp",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_oscillators_quantum_domain_2",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_oscillators",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_oscillators_qecc_14",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_oscillators",
                    "target": "c_qecc"
                }
            },
            {
                "data": {
                    "id": "parent_oscillators_into_oscillators_oscillators_15",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_oscillators_into_oscillators",
                    "target": "c_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_qudits_into_oscillators_oscillators_16",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_qudits_into_oscillators",
                    "target": "c_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_css_stabilizer_17",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_css",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "cousin_css_binary_linear__3",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_css",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "parent_homological_css_18",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_homological",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "parent_hypergraph_product_css_19",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_hypergraph_product",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "parent_hypergraph_product_homological_20",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_hypergraph_product",
                    "target": "c_homological"
                }
            },
            {
                "data": {
                    "id": "parent_hypergraph_product_quantum_ldpc_21",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_hypergraph_product",
                    "target": "c_quantum_ldpc"
                }
            },
            {
                "data": {
                    "id": "parent_stabilizer_qubits_into_qubits_22",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_stabilizer",
                    "target": "c_qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_repetition_css_23",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_quantum_repetition",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_ldpc_stabilizer_24",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_quantum_ldpc",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "parent_surface_css_25",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_surface",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "parent_surface_homological_26",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_surface",
                    "target": "c_homological"
                }
            },
            {
                "data": {
                    "id": "parent_surface_quantum_ldpc_27",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_surface",
                    "target": "c_quantum_ldpc"
                }
            },
            {
                "data": {
                    "id": "parent_surface_topological_28",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_surface",
                    "target": "c_topological"
                }
            },
            {
                "data": {
                    "id": "cousin_surface_hypergraph_product__4",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_surface",
                    "target": "c_hypergraph_product"
                }
            },
            {
                "data": {
                    "id": "parent_topological_css_29",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_topological",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_qubits_into_qubits_quantum_domain_3",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_qubits_into_qubits",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_qubits_into_qubits_qecc_finite_30",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_qubits_into_qubits",
                    "target": "c_qecc_finite"
                }
            },
            {
                "data": {
                    "id": "parent_group_gkp_group_quantum_31",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_group_gkp",
                    "target": "c_group_quantum"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_group_quantum_quantum_domain_4",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_group_quantum",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_group_quantum_qecc_32",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_group_quantum",
                    "target": "c_qecc"
                }
            },
            {
                "data": {
                    "id": "cousin_group_quantum_qecc_finite__5",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_group_quantum",
                    "target": "c_qecc_finite"
                }
            },
            {
                "data": {
                    "id": "parent_molecular_group_gkp_33",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_molecular",
                    "target": "c_group_gkp"
                }
            },
            {
                "data": {
                    "id": "parent_hybrid_qudit_oscillator_group_quantum_34",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_hybrid_qudit_oscillator",
                    "target": "c_group_quantum"
                }
            },
            {
                "data": {
                    "id": "cousin_hybrid_qudit_oscillator_qudits_into_qudits__6",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_hybrid_qudit_oscillator",
                    "target": "c_qudits_into_qudits"
                }
            },
            {
                "data": {
                    "id": "cousin_hybrid_qudit_oscillator_qudits_into_oscillators__7",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_hybrid_qudit_oscillator",
                    "target": "c_qudits_into_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_qudit_stabilizer_qudits_into_qudits_35",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_qudit_stabilizer",
                    "target": "c_qudits_into_qudits"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_qudits_into_qudits_quantum_domain_5",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_qudits_into_qudits",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_qudits_into_qudits_qecc_finite_36",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_qudits_into_qudits",
                    "target": "c_qecc_finite"
                }
            },
            {
                "data": {
                    "id": "parent_fermions_qecc_finite_37",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_fermions",
                    "target": "c_qecc_finite"
                }
            }
        ]
    },
    "fixed_node_constraint": [
        {
            "nodeId": "domain_classical_domain",
            "position": {
                "x": 150,
                "y": -500
            }
        },
        {
            "nodeId": "domain_quantum_domain",
            "position": {
                "x": 450,
                "y": -500
            }
        }
    ],
    "alignment_constraint": {},
    "relative_placement_constraint": [
        {
            "top": "domain_classical_domain",
            "bottom": "c_oaecc",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_generalized_concatenated",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_ecc",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_binary_linear",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_polar_codes",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_bits_into_bits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_reed_muller",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_ldpc",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_reed_solomon",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_q-ary_digits_into_q-ary_digits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_q-ary_linear",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qecc",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_oecc",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qecc_finite",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_gkp",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_oscillators",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_oscillators_into_oscillators",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qudits_into_oscillators",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_css",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_homological",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_hypergraph_product",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_stabilizer",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_quantum_repetition",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_quantum_ldpc",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_surface",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_topological",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qubits_into_qubits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_group_gkp",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_group_quantum",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_molecular",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_hybrid_qudit_oscillator",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qudit_stabilizer",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qudits_into_qudits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_fermions",
            "gap": 100
        }
    ]
};