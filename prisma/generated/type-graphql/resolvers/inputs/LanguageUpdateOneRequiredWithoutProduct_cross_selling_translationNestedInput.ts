import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_cross_selling_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_cross_selling_translationInput";
import { LanguageCreateWithoutProduct_cross_selling_translationInput } from "../inputs/LanguageCreateWithoutProduct_cross_selling_translationInput";
import { LanguageUpdateToOneWithWhereWithoutProduct_cross_selling_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProduct_cross_selling_translationInput";
import { LanguageUpsertWithoutProduct_cross_selling_translationInput } from "../inputs/LanguageUpsertWithoutProduct_cross_selling_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutProduct_cross_selling_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutProduct_cross_selling_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_cross_selling_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_cross_selling_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_cross_selling_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_cross_selling_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProduct_cross_selling_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProduct_cross_selling_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProduct_cross_selling_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProduct_cross_selling_translationInput | undefined;
}
