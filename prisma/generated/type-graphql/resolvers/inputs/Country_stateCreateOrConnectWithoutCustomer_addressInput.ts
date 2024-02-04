import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateWithoutCustomer_addressInput } from "../inputs/Country_stateCreateWithoutCustomer_addressInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateCreateOrConnectWithoutCustomer_addressInput", {})
export class Country_stateCreateOrConnectWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Country_stateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_stateCreateWithoutCustomer_addressInput, {
    nullable: false
  })
  create!: Country_stateCreateWithoutCustomer_addressInput;
}
