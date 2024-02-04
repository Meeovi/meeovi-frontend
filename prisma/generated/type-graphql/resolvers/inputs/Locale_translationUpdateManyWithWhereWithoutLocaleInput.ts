import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationScalarWhereInput } from "../inputs/Locale_translationScalarWhereInput";
import { Locale_translationUpdateManyMutationInput } from "../inputs/Locale_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Locale_translationUpdateManyWithWhereWithoutLocaleInput", {})
export class Locale_translationUpdateManyWithWhereWithoutLocaleInput {
  @TypeGraphQL.Field(_type => Locale_translationScalarWhereInput, {
    nullable: false
  })
  where!: Locale_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Locale_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Locale_translationUpdateManyMutationInput;
}
