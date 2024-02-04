import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Country } from "../models/Country";
import { Country_state } from "../models/Country_state";
import { Customer } from "../models/Customer";
import { Salutation } from "../models/Salutation";

@TypeGraphQL.ObjectType("Customer_address", {})
export class Customer_address {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  customer_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  country_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  country_state_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  department?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  salutation_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  street!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zipcode?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone_number?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_address_line1?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_address_line2?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  country?: Country;

  country_state?: Country_state | null;

  customer?: Customer;

  salutation?: Salutation | null;
}
