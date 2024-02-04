import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutShipping_method_translationInput } from "../inputs/LanguageUpdateWithoutShipping_method_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutShipping_method_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutShipping_method_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutShipping_method_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutShipping_method_translationInput;
}
