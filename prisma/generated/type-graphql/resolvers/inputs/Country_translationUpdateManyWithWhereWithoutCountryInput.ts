import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationScalarWhereInput } from "../inputs/Country_translationScalarWhereInput";
import { Country_translationUpdateManyMutationInput } from "../inputs/Country_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Country_translationUpdateManyWithWhereWithoutCountryInput", {})
export class Country_translationUpdateManyWithWhereWithoutCountryInput {
  @TypeGraphQL.Field(_type => Country_translationScalarWhereInput, {
    nullable: false
  })
  where!: Country_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Country_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Country_translationUpdateManyMutationInput;
}
