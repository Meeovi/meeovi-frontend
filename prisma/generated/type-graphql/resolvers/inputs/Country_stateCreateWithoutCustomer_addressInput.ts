import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateNestedOneWithoutCountry_stateInput } from "../inputs/CountryCreateNestedOneWithoutCountry_stateInput";
import { Country_state_translationCreateNestedManyWithoutCountry_stateInput } from "../inputs/Country_state_translationCreateNestedManyWithoutCountry_stateInput";
import { Order_addressCreateNestedManyWithoutCountry_stateInput } from "../inputs/Order_addressCreateNestedManyWithoutCountry_stateInput";

@TypeGraphQL.InputType("Country_stateCreateWithoutCustomer_addressInput", {})
export class Country_stateCreateWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  short_code!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CountryCreateNestedOneWithoutCountry_stateInput, {
    nullable: false
  })
  country!: CountryCreateNestedOneWithoutCountry_stateInput;

  @TypeGraphQL.Field(_type => Country_state_translationCreateNestedManyWithoutCountry_stateInput, {
    nullable: true
  })
  country_state_translation?: Country_state_translationCreateNestedManyWithoutCountry_stateInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateNestedManyWithoutCountry_stateInput, {
    nullable: true
  })
  order_address?: Order_addressCreateNestedManyWithoutCountry_stateInput | undefined;
}
