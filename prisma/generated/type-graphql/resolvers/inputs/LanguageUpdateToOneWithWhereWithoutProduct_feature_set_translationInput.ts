import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutProduct_feature_set_translationInput } from "../inputs/LanguageUpdateWithoutProduct_feature_set_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutProduct_feature_set_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutProduct_feature_set_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_feature_set_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutProduct_feature_set_translationInput;
}
