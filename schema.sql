--
-- DATA TABLES
--
CREATE TABLE public."Users" (
    id text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    role text DEFAULT 'USER' NOT NULL,
    image text,
    first_name text,
    last_name text,
    username text,
    email text,
    is_breaker boolean DEFAULT false NOT NULL,
    paysafe_user_id text,
    bc_user_id integer
);

CREATE TABLE public."BreakerProfiles" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    bio text NOT NULL,
    video text NOT NULL,
    instagram text,
    twitter text,
    facebook text,
    linkedin text,
    tiktok text
);

CREATE TABLE public."Streams" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    stream_id text NOT NULL,
    stream_key text NOT NULL,
    playback_id text NOT NULL,
    stream_url text NOT NULL
);

CREATE TABLE public."UserPreferences" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    frequency text NOT NULL,
    sports text[] NOT NULL,
    pricing text[] NOT NULL,
    break_type text[] NOT NULL
);

CREATE TABLE public."Notifications" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    before_15_min boolean DEFAULT false NOT NULL,
    when_live boolean DEFAULT false NOT NULL
);

CREATE TABLE public."Addresses" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    line1 text NOT NULL,
    line2 text,
    city text NOT NULL,
    country text NOT NULL,
    state_province_region text NOT NULL,
    postal_zip_code text NOT NULL,
    is_default boolean DEFAULT false
);

CREATE TABLE public."Events" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    status text DEFAULT 'DRAFT' NOT NULL,
    start_time timestamp with time zone,
    image text NOT NULL,
    archived boolean NOT NULL DEFAULT false
);

CREATE TABLE public."Breaks" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    status text DEFAULT 'DRAFT' NOT NULL,
    event_id uuid NOT NULL,
    image text NOT NULL,
    break_type text NOT NULL,
    spots integer NOT NULL,
    teams_per_spot integer,
    price numeric,
    result jsonb,
    datset jsonb,
    archived boolean NOT NULL DEFAULT false
);

CREATE TABLE public."Products" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    unit_of_measure text NOT NULL,
    description text,
    year text NOT NULL,
    manufacturer text NOT NULL,
    brand text NOT NULL,
    series text,
    category text NOT NULL,
    type text,
    boxes_per_case integer,
    packs_per_box integer,
    cards_per_pack integer,
    card_number text,
    player text,
    parallel text,
    insert text,
    rookie_card boolean DEFAULT false,
    memoribillia text,
    autograph boolean DEFAULT false,
    numbered integer,
    grader text,
    grade text,
    available boolean DEFAULT true NOT NULL
);

CREATE TABLE public."Inventory" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    product_id uuid NOT NULL,
    supplier text NOT NULL,
    location text NOT NULL,
    purchase_date timestamp with time zone DEFAULT now() NOT NULL,
    cost_basis numeric NOT NULL,
    break_id uuid
);

CREATE TABLE public."BreakProductItems" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    quantity integer NOT NULL,
    break_id uuid NOT NULL,
    order_id uuid,
    price numeric NOT NULL,
    bc_product_id integer NOT NULL,
    bc_variant_id integer,
    CONSTRAINT "BreakProductItems_quantity_positive" CHECK (quantity >= 0)
);

CREATE TABLE public."ExtensibleValues" (
    value text NOT NULL,
    field text NOT NULL
);

CREATE TABLE public."Orders" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    bc_order_id integer NOT NULL,
    subtotal numeric NOT NULL,
    discount_total numeric NOT NULL,
    tax_total numeric NOT NULL,
    shipping_total numeric NOT NULL,
    grand_total numeric NOT NULL
);

CREATE TABLE public."SaveBreak" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    break_id uuid NOT NULL
);

CREATE TABLE public."SaveEvent" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    event_id uuid NOT NULL
);

CREATE TABLE public."SaveBreaker" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    breaker_id text NOT NULL
);

CREATE TABLE public."Hits" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    description text,
    user_id text NOT NULL,
    break_id uuid NOT NULL,
    image_front text NOT NULL,
    image_back text,
    year text NOT NULL,
    manufacturer text NOT NULL,
    brand text NOT NULL,
    series text,
    category text NOT NULL,
    card_number text NOT NULL,
    player text NOT NULL,
    parallel text,
    insert text,
    rookie_card boolean DEFAULT false,
    memoribillia text,
    autograph boolean DEFAULT false,
    numbered integer,
    archived boolean NOT NULL DEFAULT false
);

CREATE TABLE public."NotificationSettings" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id text NOT NULL,
    events BOOLEAN NOT NULL DEFAULT false,
    breaks BOOLEAN NOT NULL DEFAULT false,
    breakers BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE public."Teams" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    year_start integer NOT NULL,
    year_end integer NOT NULL,
    color text NOT NULL,
    color_secondary text NOT NULL,
    sport text NOT NULL
);

CREATE TABLE public."Players" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    sport text NOT NULL
);

--
-- ENUM TABLES
--
CREATE TABLE public.unit_of_measure (
    value text NOT NULL
);

CREATE TABLE public.user_role (
    value text NOT NULL
);

CREATE TABLE public.event_status (
    value text NOT NULL
);

CREATE TABLE public.break_status (
    value text NOT NULL
);

CREATE TABLE public.break_type (
    value text NOT NULL
);

--
-- ENUM VALUES
--
INSERT INTO public.unit_of_measure (value) VALUES
('CASE'),
('BOX'),
('PACK'),
('CARD');

INSERT INTO public.user_role (value) VALUES
('USER'),
('MANAGER'),
('ADMIN');

INSERT INTO public.event_status (value) VALUES
('DRAFT'),
('SCHEDULED'),
('LIVE'),
('COMPLETED');

INSERT INTO public.break_status (value) VALUES
('DRAFT'),
('AVAILABLE'),
('SOLDOUT'),
('LIVE'),
('COMPLETED');

INSERT INTO public.break_type (value) VALUES
('RANDOM_TEAM'),
('RANDOM_DIVISION'),
('PICK_YOUR_TEAM'),
('PICK_YOUR_DIVISION'),
('HIT_DRAFT'),
('PERSONAL');


--
-- PRIMARY KEYS
--
ALTER TABLE ONLY public."Users" ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."BreakerProfiles" ADD CONSTRAINT "BreakerProfiles_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Streams" ADD CONSTRAINT "Streams_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."UserPreferences" ADD CONSTRAINT "UserPreferences_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Notifications" ADD CONSTRAINT "Notifications_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Addresses" ADD CONSTRAINT "Addresses_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Events" ADD CONSTRAINT "Events_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Breaks" ADD CONSTRAINT "Breaks_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Products" ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Inventory" ADD CONSTRAINT "Inventory_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."BreakProductItems" ADD CONSTRAINT "BreakProductItems_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ExtensibleValues" ADD CONSTRAINT "ExtensibleValues_pkey" PRIMARY KEY (value, field);
ALTER TABLE ONLY public."Orders" ADD CONSTRAINT "Orders_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."SaveBreak" ADD CONSTRAINT "SaveBreak_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."SaveEvent" ADD CONSTRAINT "SaveEvent_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."SaveBreaker" ADD CONSTRAINT "SaveBreaker_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Hits" ADD CONSTRAINT "Hits_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."NotificationSettings" ADD CONSTRAINT "NotificationSettings_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Teams" ADD CONSTRAINT "Teams_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Players" ADD CONSTRAINT "Players_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.unit_of_measure ADD CONSTRAINT unit_of_measure_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.user_role ADD CONSTRAINT user_role_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.event_status ADD CONSTRAINT event_status_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.break_status ADD CONSTRAINT break_status_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.break_type ADD CONSTRAINT break_type_pkey PRIMARY KEY (value);


--
-- FOREIGN KEYS
--
ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_role_fkey" FOREIGN KEY (role) REFERENCES public.user_role(value) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key" UNIQUE (username);

ALTER TABLE ONLY public."BreakerProfiles"
    ADD CONSTRAINT "BreakerProfiles_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."BreakerProfiles"
    ADD CONSTRAINT "BreakerProfiles_user_id_key" UNIQUE (user_id);

ALTER TABLE ONLY public."Streams"
    ADD CONSTRAINT "Streams_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Streams"
    ADD CONSTRAINT "Streams_user_id_key" UNIQUE (user_id);

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."UserPreferences"
    ADD CONSTRAINT "UserPreferences_user_id_key" UNIQUE (user_id);

ALTER TABLE ONLY public."Notifications"
    ADD CONSTRAINT "Notifications_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Notifications"
    ADD CONSTRAINT "Notifications_user_id_key" UNIQUE (user_id);

ALTER TABLE ONLY public."Addresses"
    ADD CONSTRAINT "Addresses_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Events"
    ADD CONSTRAINT "Events_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Events"
    ADD CONSTRAINT "Events_status_fkey" FOREIGN KEY (status) REFERENCES public.event_status(value) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Breaks"
    ADD CONSTRAINT "Breaks_event_id_fkey" FOREIGN KEY (event_id) REFERENCES public."Events"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Breaks"
    ADD CONSTRAINT "Breaks_status_fkey" FOREIGN KEY (status) REFERENCES public.break_status(value) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Breaks"
    ADD CONSTRAINT "Breaks_break_type_fkey" FOREIGN KEY (break_type) REFERENCES public.break_type(value) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_unit_of_measure_fkey" FOREIGN KEY (unit_of_measure) REFERENCES public.unit_of_measure(value) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Inventory"
    ADD CONSTRAINT "Inventory_product_id_fkey" FOREIGN KEY (product_id) REFERENCES public."Products"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Inventory"
    ADD CONSTRAINT "Inventory_break_id_fkey" FOREIGN KEY (break_id) REFERENCES public."Breaks"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."BreakProductItems"
    ADD CONSTRAINT "BreakProductItems_break_id_fkey" FOREIGN KEY (break_id) REFERENCES public."Breaks"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."BreakProductItems"
    ADD CONSTRAINT "BreakProductItems_order_id_fkey" FOREIGN KEY (order_id) REFERENCES public."Orders"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE ONLY public."SaveBreak"
    ADD CONSTRAINT "SaveBreak_break_id_fkey" FOREIGN KEY (break_id) REFERENCES public."Breaks"(id);

ALTER TABLE ONLY public."SaveBreak"
    ADD CONSTRAINT "SaveBreak_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);

ALTER TABLE ONLY public."SaveEvent"
    ADD CONSTRAINT "SaveEvent_event_id_fkey" FOREIGN KEY (event_id) REFERENCES public."Events"(id);

ALTER TABLE ONLY public."SaveEvent"
    ADD CONSTRAINT "SaveEvent_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);

ALTER TABLE ONLY public."SaveBreaker"
    ADD CONSTRAINT "SaveBreaker_breaker_id_fkey" FOREIGN KEY (breaker_id) REFERENCES public."Users"(id);

ALTER TABLE ONLY public."SaveBreaker"
    ADD CONSTRAINT "SaveBreaker_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);

ALTER TABLE ONLY public."Hits"
    ADD CONSTRAINT "Hits_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);

ALTER TABLE ONLY public."Hits"
    ADD CONSTRAINT "Hits_break_id_fkey" FOREIGN KEY (break_id) REFERENCES public."Breaks"(id);

ALTER TABLE ONLY public."NotificationSettings"
    ADD CONSTRAINT "NotificationSettings_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);    

ALTER TABLE ONLY public."NotificationSettings"
    ADD CONSTRAINT "NotificationSettings_user_id_unique_key" UNIQUE (user_id);

--
-- FUNCTIONS
--
CREATE OR REPLACE FUNCTION public.set_current_timestamp_on_row_update()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$function$;


CREATE OR REPLACE FUNCTION public.set_product_description()
    RETURNS trigger
    LANGUAGE plpgsql
AS $sku_desc_func$
DECLARE
    _new record;
BEGIN
    _new := NEW;

    if NEW.unit_of_measure = 'CARD' then
        _new."description" := CONCAT(NEW.year,' ',NEW.manufacturer,' ',NEW.brand,' ', NEW.series,' ',NEW.card_number,' ',NEW.player,' ',NEW.parallel,' ',NEW.insert);

        if NEW.autograph = TRUE then
            _new."description" := CONCAT(_new."description",' ', 'Autograph');
        END if;

        if NEW.memoribillia IS NOT NULL and NEW.memoribillia != '' then
            _new."description" := CONCAT(_new."description",' ', NEW.memoribillia);
        END if;

        if NEW.rookie_card = TRUE then
            _new."description" := CONCAT(_new."description",' ', 'Rookie');
        END if;

        if NEW.numbered IS NOT NULL and NEW.numbered != 0 then
            _new."description" := CONCAT(_new."description",' /', NEW.numbered);
        END if;

        if NEW.grader IS NOT NULL and NEW.grader != '' then
            _new."description" := CONCAT(_new."description",' ', NEW.grader, ' ', NEW.grade);
        END if;

    else
        _new."description" := CONCAT(NEW.year,' ',NEW.manufacturer,' ',NEW.brand,' ', NEW.series,' ',NEW.category,' ',NEW.type,' ',NEW.unit_of_measure);
    END if;

    RETURN _new;
END;
$sku_desc_func$;


CREATE OR REPLACE FUNCTION public.set_hit_description()
    RETURNS trigger
    LANGUAGE plpgsql
AS $sku_desc_func$
DECLARE
    _new record;
BEGIN
    _new := NEW;

    _new."description" := CONCAT(NEW.year,' ',NEW.manufacturer,' ',NEW.brand,' ', NEW.series,' ',NEW.card_number,' ',NEW.player,' ',NEW.parallel,' ',NEW.insert);

    if NEW.autograph = TRUE then
        _new."description" := CONCAT(_new."description",' ', 'Autograph');
    END if;

    if NEW.memoribillia IS NOT NULL and NEW.memoribillia != '' then
        _new."description" := CONCAT(_new."description",' ', NEW.memoribillia);
    END if;

    if NEW.rookie_card = TRUE then
        _new."description" := CONCAT(_new."description",' ', 'Rookie');
    END if;

    if NEW.numbered IS NOT NULL and NEW.numbered != 0 then
        _new."description" := CONCAT(_new."description",' /', NEW.numbered);
    END if;

    RETURN _new;
END;
$sku_desc_func$;


--
-- TRIGGERS
--
CREATE TRIGGER "set_public_Users_updated_at" BEFORE UPDATE ON public."Users" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_Users_updated_at" ON public."Users" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_BreakerProfiles_updated_at" BEFORE UPDATE ON public."BreakerProfiles" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_BreakerProfiles_updated_at" ON public."BreakerProfiles" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Streams_updated_at" BEFORE UPDATE ON public."Streams" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_Streams_updated_at" ON public."Streams" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_UserPreferences_updated_at" BEFORE UPDATE ON public."UserPreferences" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_UserPreferences_updated_at" ON public."UserPreferences" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Notifications_updated_at" BEFORE UPDATE ON public."Notifications" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_Notifications_updated_at" ON public."Notifications" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Addresses_updated_at" BEFORE UPDATE ON public."Addresses" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_Addresses_updated_at" ON public."Addresses" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Events_updated_at" BEFORE UPDATE ON public."Events" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_Events_updated_at" ON public."Events" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Breaks_updated_at" BEFORE UPDATE ON public."Breaks" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_Breaks_updated_at" ON public."Breaks" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Inventory_updated_at" BEFORE UPDATE ON public."Inventory" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_Inventory_updated_at" ON public."Inventory" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Products_updated_at" BEFORE UPDATE ON public."Products" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_Products_updated_at" ON public."Products" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Products_description" BEFORE INSERT OR UPDATE ON public."Products" FOR EACH ROW EXECUTE FUNCTION public.set_product_description();
COMMENT ON TRIGGER "set_public_Products_description" ON public."Products" IS 'trigger to set description column on Products';

CREATE TRIGGER "set_public_BreakProductItems_updated_at" BEFORE UPDATE ON public."BreakProductItems" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_BreakProductItems_updated_at" ON public."BreakProductItems" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Orders_updated_at" BEFORE UPDATE ON public."Orders" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_Orders_updated_at" ON public."Orders" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_SaveBreak_updated_at" BEFORE UPDATE ON public."SaveBreak" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_SaveBreak_updated_at" ON public."SaveBreak" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_SaveEvent_updated_at" BEFORE UPDATE ON public."SaveEvent" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_SaveEvent_updated_at" ON public."SaveEvent" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_SaveBreaker_updated_at" BEFORE UPDATE ON public."SaveBreaker" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_SaveBreaker_updated_at" ON public."SaveBreaker" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Hits_updated_at" BEFORE UPDATE ON public."Hits" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_Hits_updated_at" ON public."Hits" IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER "set_public_Hits_description" BEFORE INSERT OR UPDATE ON public."Hits" FOR EACH ROW EXECUTE FUNCTION public.set_hit_description();
COMMENT ON TRIGGER "set_public_Hits_description" ON public."Hits" IS 'trigger to set description column on Hits';

CREATE TRIGGER "set_public_NotificationSettings_updated_at" BEFORE UPDATE ON public."NotificationSettings" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_on_row_update();
COMMENT ON TRIGGER "set_public_NotificationSettings_updated_at" ON public."NotificationSettings" IS 'trigger to set value of column "updated_at" to current timestamp on row update';