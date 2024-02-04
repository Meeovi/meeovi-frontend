import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordCreateManyLanguageInputEnvelope } from "../inputs/Product_search_keywordCreateManyLanguageInputEnvelope";
import { Product_search_keywordCreateOrConnectWithoutLanguageInput } from "../inputs/Product_search_keywordCreateOrConnectWithoutLanguageInput";
import { Product_search_keywordCreateWithoutLanguageInput } from "../inputs/Product_search_keywordCreateWithoutLanguageInput";
import { Product_search_keywordWhereUniqueInput } from "../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_keywordCreateNestedManyWithoutLanguageInput", {})
export class Product_search_keywordCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Product_search_keywordCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_search_keywordCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_search_keywordCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_search_keywordCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_search_keywordWhereUniqueInput[] | undefined;
}
