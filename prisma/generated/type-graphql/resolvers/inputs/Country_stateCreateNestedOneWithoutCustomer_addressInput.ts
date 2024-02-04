import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateOrConnectWithoutCustomer_addressInput } from "../inputs/Country_stateCreateOrConnectWithoutCustomer_addressInput";
import { Country_stateCreateWithoutCustomer_addressInput } from "../inputs/Country_stateCreateWithoutCustomer_addressInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateCreateNestedOneWithoutCustomer_addressInput", {})
export class Country_stateCreateNestedOneWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => Country_stateCreateWithoutCustomer_addressInput, {
    nullable: true
  })
  create?: Country_stateCreateWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateCreateOrConnectWithoutCustomer_addressInput, {
    nullable: true
  })
  connectOrCreate?: Country_stateCreateOrConnectWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: true
  })
  connect?: Country_stateWhereUniqueInput | undefined;
}
