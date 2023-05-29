--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2023-05-28 22:43:58

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4235 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 20254)
-- Name: areas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.areas (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    poligono public.geometry(Polygon,4326) NOT NULL
);


ALTER TABLE public.areas OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 20253)
-- Name: areas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.areas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.areas_id_seq OWNER TO postgres;

--
-- TOC entry 4236 (class 0 OID 0)
-- Dependencies: 222
-- Name: areas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.areas_id_seq OWNED BY public.areas.id;


--
-- TOC entry 221 (class 1259 OID 20245)
-- Name: lugares; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lugares (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    ponto public.geometry(Point,4326) NOT NULL
);


ALTER TABLE public.lugares OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 20244)
-- Name: lugares_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lugares_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lugares_id_seq OWNER TO postgres;

--
-- TOC entry 4237 (class 0 OID 0)
-- Dependencies: 220
-- Name: lugares_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lugares_id_seq OWNED BY public.lugares.id;


--
-- TOC entry 4071 (class 2604 OID 20257)
-- Name: areas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areas ALTER COLUMN id SET DEFAULT nextval('public.areas_id_seq'::regclass);


--
-- TOC entry 4070 (class 2604 OID 20248)
-- Name: lugares id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugares ALTER COLUMN id SET DEFAULT nextval('public.lugares_id_seq'::regclass);


--
-- TOC entry 4229 (class 0 OID 20254)
-- Dependencies: 223
-- Data for Name: areas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.areas (id, nome, poligono) FROM stdin;
\.


--
-- TOC entry 4227 (class 0 OID 20245)
-- Dependencies: 221
-- Data for Name: lugares; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lugares (id, nome, ponto) FROM stdin;
\.


--
-- TOC entry 4069 (class 0 OID 19506)
-- Dependencies: 216
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text) FROM stdin;
\.


--
-- TOC entry 4238 (class 0 OID 0)
-- Dependencies: 222
-- Name: areas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.areas_id_seq', 1, true);


--
-- TOC entry 4239 (class 0 OID 0)
-- Dependencies: 220
-- Name: lugares_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lugares_id_seq', 3, true);


--
-- TOC entry 4078 (class 2606 OID 20261)
-- Name: areas areas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT areas_pkey PRIMARY KEY (id);


--
-- TOC entry 4076 (class 2606 OID 20252)
-- Name: lugares lugares_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lugares
    ADD CONSTRAINT lugares_pkey PRIMARY KEY (id);


-- Completed on 2023-05-28 22:43:58

--
-- PostgreSQL database dump complete
--

