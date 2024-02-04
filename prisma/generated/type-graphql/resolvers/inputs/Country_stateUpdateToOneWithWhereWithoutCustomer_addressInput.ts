import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateUpdateWithoutCustomer_addressInput } from "../inputs/Country_stateUpdateWithoutCustomer_addressInput";
import { Country_stateWhereInput } from "../inputs/Country_stateWhereInput";

@TypeGraphQL.InputType("Country_stateUpdateToOneWithWhereWithoutCustomer_addressInput", {})
export class Country_stateUpdateToOneWithWhereWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  where?: Country_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateUpdateWithoutCustomer_addressInput, {
    nullable: false
  })
  data!: Country_stateUpdateWithoutCustomer_addressInput;
}
