import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateWithoutOrder_addressInput } from "../inputs/Country_stateCreateWithoutOrder_addressInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateCreateOrConnectWithoutOrder_addressInput", {})
export class Country_stateCreateOrConnectWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Country_stateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_stateCreateWithoutOrder_addressInput, {
    nullable: false
  })
  create!: Country_stateCreateWithoutOrder_addressInput;
}
