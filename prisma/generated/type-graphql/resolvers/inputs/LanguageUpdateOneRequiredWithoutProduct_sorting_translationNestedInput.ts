import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_sorting_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_sorting_translationInput";
import { LanguageCreateWithoutProduct_sorting_translationInput } from "../inputs/LanguageCreateWithoutProduct_sorting_translationInput";
import { LanguageUpdateToOneWithWhereWithoutProduct_sorting_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProduct_sorting_translationInput";
import { LanguageUpsertWithoutProduct_sorting_translationInput } from "../inputs/LanguageUpsertWithoutProduct_sorting_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutProduct_sorting_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutProduct_sorting_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_sorting_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_sorting_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_sorting_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_sorting_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProduct_sorting_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProduct_sorting_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProduct_sorting_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProduct_sorting_translationInput | undefined;
}
