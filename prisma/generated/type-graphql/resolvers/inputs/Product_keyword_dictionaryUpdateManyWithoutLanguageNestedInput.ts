import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_keyword_dictionaryCreateManyLanguageInputEnvelope } from "../inputs/Product_keyword_dictionaryCreateManyLanguageInputEnvelope";
import { Product_keyword_dictionaryCreateOrConnectWithoutLanguageInput } from "../inputs/Product_keyword_dictionaryCreateOrConnectWithoutLanguageInput";
import { Product_keyword_dictionaryCreateWithoutLanguageInput } from "../inputs/Product_keyword_dictionaryCreateWithoutLanguageInput";
import { Product_keyword_dictionaryScalarWhereInput } from "../inputs/Product_keyword_dictionaryScalarWhereInput";
import { Product_keyword_dictionaryUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Product_keyword_dictionaryUpdateManyWithWhereWithoutLanguageInput";
import { Product_keyword_dictionaryUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_keyword_dictionaryUpdateWithWhereUniqueWithoutLanguageInput";
import { Product_keyword_dictionaryUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_keyword_dictionaryUpsertWithWhereUniqueWithoutLanguageInput";
import { Product_keyword_dictionaryWhereUniqueInput } from "../inputs/Product_keyword_dictionaryWhereUniqueInput";

@TypeGraphQL.InputType("Product_keyword_dictionaryUpdateManyWithoutLanguageNestedInput", {})
export class Product_keyword_dictionaryUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_keyword_dictionaryCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_keyword_dictionaryCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Product_keyword_dictionaryUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_keyword_dictionaryCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryWhereUniqueInput], {
    nullable: true
  })
  set?: Product_keyword_dictionaryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_keyword_dictionaryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_keyword_dictionaryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_keyword_dictionaryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Product_keyword_dictionaryUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Product_keyword_dictionaryUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_keyword_dictionaryScalarWhereInput[] | undefined;
}
