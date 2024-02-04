import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_keyword_dictionaryCreateManyLanguageInputEnvelope } from "../inputs/Product_keyword_dictionaryCreateManyLanguageInputEnvelope";
import { Product_keyword_dictionaryCreateOrConnectWithoutLanguageInput } from "../inputs/Product_keyword_dictionaryCreateOrConnectWithoutLanguageInput";
import { Product_keyword_dictionaryCreateWithoutLanguageInput } from "../inputs/Product_keyword_dictionaryCreateWithoutLanguageInput";
import { Product_keyword_dictionaryWhereUniqueInput } from "../inputs/Product_keyword_dictionaryWhereUniqueInput";

@TypeGraphQL.InputType("Product_keyword_dictionaryCreateNestedManyWithoutLanguageInput", {})
export class Product_keyword_dictionaryCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_keyword_dictionaryCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_keyword_dictionaryCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_keyword_dictionaryCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_keyword_dictionaryWhereUniqueInput[] | undefined;
}
