import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutPromotion_translationInput } from "../inputs/LanguageCreateOrConnectWithoutPromotion_translationInput";
import { LanguageCreateWithoutPromotion_translationInput } from "../inputs/LanguageCreateWithoutPromotion_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutPromotion_translationInput", {})
export class LanguageCreateNestedOneWithoutPromotion_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutPromotion_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutPromotion_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutPromotion_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutPromotion_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
