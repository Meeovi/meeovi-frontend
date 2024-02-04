import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutPromotion_translationInput } from "../inputs/LanguageUpdateWithoutPromotion_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutPromotion_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutPromotion_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutPromotion_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutPromotion_translationInput;
}
