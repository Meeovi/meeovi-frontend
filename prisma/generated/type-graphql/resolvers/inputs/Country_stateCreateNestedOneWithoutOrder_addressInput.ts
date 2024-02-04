import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateOrConnectWithoutOrder_addressInput } from "../inputs/Country_stateCreateOrConnectWithoutOrder_addressInput";
import { Country_stateCreateWithoutOrder_addressInput } from "../inputs/Country_stateCreateWithoutOrder_addressInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateCreateNestedOneWithoutOrder_addressInput", {})
export class Country_stateCreateNestedOneWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => Country_stateCreateWithoutOrder_addressInput, {
    nullable: true
  })
  create?: Country_stateCreateWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateCreateOrConnectWithoutOrder_addressInput, {
    nullable: true
  })
  connectOrCreate?: Country_stateCreateOrConnectWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: true
  })
  connect?: Country_stateWhereUniqueInput | undefined;
}
