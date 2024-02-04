import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateNestedOneWithoutCustomer_addressInput } from "../inputs/CountryCreateNestedOneWithoutCustomer_addressInput";
import { Country_stateCreateNestedOneWithoutCustomer_addressInput } from "../inputs/Country_stateCreateNestedOneWithoutCustomer_addressInput";
import { SalutationCreateNestedOneWithoutCustomer_addressInput } from "../inputs/SalutationCreateNestedOneWithoutCustomer_addressInput";

@TypeGraphQL.InputType("Customer_addressCreateWithoutCustomerInput", {})
export class Customer_addressCreateWithoutCustomerInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  department?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

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
  zipcode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_address_line1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_address_line2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CountryCreateNestedOneWithoutCustomer_addressInput, {
    nullable: false
  })
  country!: CountryCreateNestedOneWithoutCustomer_addressInput;

  @TypeGraphQL.Field(_type => Country_stateCreateNestedOneWithoutCustomer_addressInput, {
    nullable: true
  })
  country_state?: Country_stateCreateNestedOneWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => SalutationCreateNestedOneWithoutCustomer_addressInput, {
    nullable: true
  })
  salutation?: SalutationCreateNestedOneWithoutCustomer_addressInput | undefined;
}
