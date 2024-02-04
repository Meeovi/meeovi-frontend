import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_keyword_dictionaryInput";
import { LanguageCreateWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageCreateWithoutProduct_keyword_dictionaryInput";
import { LanguageUpdateToOneWithWhereWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProduct_keyword_dictionaryInput";
import { LanguageUpsertWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageUpsertWithoutProduct_keyword_dictionaryInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutProduct_keyword_dictionaryNestedInput", {})
export class LanguageUpdateOneRequiredWithoutProduct_keyword_dictionaryNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_keyword_dictionaryInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_keyword_dictionaryInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_keyword_dictionaryInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_keyword_dictionaryInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProduct_keyword_dictionaryInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProduct_keyword_dictionaryInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProduct_keyword_dictionaryInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProduct_keyword_dictionaryInput | undefined;
}
