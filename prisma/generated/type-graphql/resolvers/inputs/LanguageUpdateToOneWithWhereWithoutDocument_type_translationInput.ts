import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutDocument_type_translationInput } from "../inputs/LanguageUpdateWithoutDocument_type_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutDocument_type_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutDocument_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutDocument_type_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutDocument_type_translationInput;
}
