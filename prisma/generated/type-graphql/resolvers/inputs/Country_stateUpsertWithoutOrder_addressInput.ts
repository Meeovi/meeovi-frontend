import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateWithoutOrder_addressInput } from "../inputs/Country_stateCreateWithoutOrder_addressInput";
import { Country_stateUpdateWithoutOrder_addressInput } from "../inputs/Country_stateUpdateWithoutOrder_addressInput";
import { Country_stateWhereInput } from "../inputs/Country_stateWhereInput";

@TypeGraphQL.InputType("Country_stateUpsertWithoutOrder_addressInput", {})
export class Country_stateUpsertWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => Country_stateUpdateWithoutOrder_addressInput, {
    nullable: false
  })
  update!: Country_stateUpdateWithoutOrder_addressInput;

  @TypeGraphQL.Field(_type => Country_stateCreateWithoutOrder_addressInput, {
    nullable: false
  })
  create!: Country_stateCreateWithoutOrder_addressInput;

  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  where?: Country_stateWhereInput | undefined;
}
