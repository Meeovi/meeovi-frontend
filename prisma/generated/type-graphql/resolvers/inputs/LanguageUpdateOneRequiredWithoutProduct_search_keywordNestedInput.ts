import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_search_keywordInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_search_keywordInput";
import { LanguageCreateWithoutProduct_search_keywordInput } from "../inputs/LanguageCreateWithoutProduct_search_keywordInput";
import { LanguageUpdateToOneWithWhereWithoutProduct_search_keywordInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProduct_search_keywordInput";
import { LanguageUpsertWithoutProduct_search_keywordInput } from "../inputs/LanguageUpsertWithoutProduct_search_keywordInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutProduct_search_keywordNestedInput", {})
export class LanguageUpdateOneRequiredWithoutProduct_search_keywordNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_search_keywordInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_search_keywordInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_search_keywordInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_search_keywordInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProduct_search_keywordInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProduct_search_keywordInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProduct_search_keywordInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProduct_search_keywordInput | undefined;
}
