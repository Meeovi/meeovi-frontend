import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_search_configInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_search_configInput";
import { LanguageCreateWithoutProduct_search_configInput } from "../inputs/LanguageCreateWithoutProduct_search_configInput";
import { LanguageUpdateToOneWithWhereWithoutProduct_search_configInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProduct_search_configInput";
import { LanguageUpsertWithoutProduct_search_configInput } from "../inputs/LanguageUpsertWithoutProduct_search_configInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutProduct_search_configNestedInput", {})
export class LanguageUpdateOneRequiredWithoutProduct_search_configNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_search_configInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_search_configInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_search_configInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_search_configInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProduct_search_configInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProduct_search_configInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProduct_search_configInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProduct_search_configInput | undefined;
}
