import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationScalarWhereInput } from "../inputs/Plugin_translationScalarWhereInput";
import { Plugin_translationUpdateManyMutationInput } from "../inputs/Plugin_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Plugin_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Plugin_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Plugin_translationScalarWhereInput, {
    nullable: false
  })
  where!: Plugin_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Plugin_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Plugin_translationUpdateManyMutationInput;
}
