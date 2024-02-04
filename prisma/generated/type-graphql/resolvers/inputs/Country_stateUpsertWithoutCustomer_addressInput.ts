import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateWithoutCustomer_addressInput } from "../inputs/Country_stateCreateWithoutCustomer_addressInput";
import { Country_stateUpdateWithoutCustomer_addressInput } from "../inputs/Country_stateUpdateWithoutCustomer_addressInput";
import { Country_stateWhereInput } from "../inputs/Country_stateWhereInput";

@TypeGraphQL.InputType("Country_stateUpsertWithoutCustomer_addressInput", {})
export class Country_stateUpsertWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => Country_stateUpdateWithoutCustomer_addressInput, {
    nullable: false
  })
  update!: Country_stateUpdateWithoutCustomer_addressInput;

  @TypeGraphQL.Field(_type => Country_stateCreateWithoutCustomer_addressInput, {
    nullable: false
  })
  create!: Country_stateCreateWithoutCustomer_addressInput;

  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  where?: Country_stateWhereInput | undefined;
}
