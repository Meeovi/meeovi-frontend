import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutPromotion_translationInput } from "../inputs/LanguageCreateOrConnectWithoutPromotion_translationInput";
import { LanguageCreateWithoutPromotion_translationInput } from "../inputs/LanguageCreateWithoutPromotion_translationInput";
import { LanguageUpdateToOneWithWhereWithoutPromotion_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutPromotion_translationInput";
import { LanguageUpsertWithoutPromotion_translationInput } from "../inputs/LanguageUpsertWithoutPromotion_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutPromotion_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutPromotion_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutPromotion_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutPromotion_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutPromotion_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutPromotion_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutPromotion_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutPromotion_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutPromotion_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutPromotion_translationInput | undefined;
}
