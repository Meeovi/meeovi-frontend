import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_configCreateOrConnectWithoutLanguageInput } from "../inputs/Product_search_configCreateOrConnectWithoutLanguageInput";
import { Product_search_configCreateWithoutLanguageInput } from "../inputs/Product_search_configCreateWithoutLanguageInput";
import { Product_search_configUpdateToOneWithWhereWithoutLanguageInput } from "../inputs/Product_search_configUpdateToOneWithWhereWithoutLanguageInput";
import { Product_search_configUpsertWithoutLanguageInput } from "../inputs/Product_search_configUpsertWithoutLanguageInput";
import { Product_search_configWhereInput } from "../inputs/Product_search_configWhereInput";
import { Product_search_configWhereUniqueInput } from "../inputs/Product_search_configWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_configUpdateOneWithoutLanguageNestedInput", {})
export class Product_search_configUpdateOneWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => Product_search_configCreateWithoutLanguageInput, {
    nullable: true
  })
  create?: Product_search_configCreateWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configCreateOrConnectWithoutLanguageInput, {
    nullable: true
  })
  connectOrCreate?: Product_search_configCreateOrConnectWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configUpsertWithoutLanguageInput, {
    nullable: true
  })
  upsert?: Product_search_configUpsertWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configWhereInput, {
    nullable: true
  })
  disconnect?: Product_search_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configWhereInput, {
    nullable: true
  })
  delete?: Product_search_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_search_configWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configUpdateToOneWithWhereWithoutLanguageInput, {
    nullable: true
  })
  update?: Product_search_configUpdateToOneWithWhereWithoutLanguageInput | undefined;
}
