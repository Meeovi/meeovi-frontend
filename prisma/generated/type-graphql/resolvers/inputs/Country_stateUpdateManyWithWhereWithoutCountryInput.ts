import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateScalarWhereInput } from "../inputs/Country_stateScalarWhereInput";
import { Country_stateUpdateManyMutationInput } from "../inputs/Country_stateUpdateManyMutationInput";

@TypeGraphQL.InputType("Country_stateUpdateManyWithWhereWithoutCountryInput", {})
export class Country_stateUpdateManyWithWhereWithoutCountryInput {
  @TypeGraphQL.Field(_type => Country_stateScalarWhereInput, {
    nullable: false
  })
  where!: Country_stateScalarWhereInput;

  @TypeGraphQL.Field(_type => Country_stateUpdateManyMutationInput, {
    nullable: false
  })
  data!: Country_stateUpdateManyMutationInput;
}
