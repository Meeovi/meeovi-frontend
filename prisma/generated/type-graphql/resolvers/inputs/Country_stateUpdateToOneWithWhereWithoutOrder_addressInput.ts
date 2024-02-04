import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateUpdateWithoutOrder_addressInput } from "../inputs/Country_stateUpdateWithoutOrder_addressInput";
import { Country_stateWhereInput } from "../inputs/Country_stateWhereInput";

@TypeGraphQL.InputType("Country_stateUpdateToOneWithWhereWithoutOrder_addressInput", {})
export class Country_stateUpdateToOneWithWhereWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  where?: Country_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateUpdateWithoutOrder_addressInput, {
    nullable: false
  })
  data!: Country_stateUpdateWithoutOrder_addressInput;
}
