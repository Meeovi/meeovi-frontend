import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordCreateManyLanguageInputEnvelope } from "../inputs/Product_search_keywordCreateManyLanguageInputEnvelope";
import { Product_search_keywordCreateOrConnectWithoutLanguageInput } from "../inputs/Product_search_keywordCreateOrConnectWithoutLanguageInput";
import { Product_search_keywordCreateWithoutLanguageInput } from "../inputs/Product_search_keywordCreateWithoutLanguageInput";
import { Product_search_keywordScalarWhereInput } from "../inputs/Product_search_keywordScalarWhereInput";
import { Product_search_keywordUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Product_search_keywordUpdateManyWithWhereWithoutLanguageInput";
import { Product_search_keywordUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_search_keywordUpdateWithWhereUniqueWithoutLanguageInput";
import { Product_search_keywordUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Product_search_keywordUpsertWithWhereUniqueWithoutLanguageInput";
import { Product_search_keywordWhereUniqueInput } from "../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_keywordUpdateManyWithoutLanguageNestedInput", {})
export class Product_search_keywordUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Product_search_keywordCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Product_search_keywordCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Product_search_keywordCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Product_search_keywordUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Product_search_keywordCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordWhereUniqueInput], {
    nullable: true
  })
  set?: Product_search_keywordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_search_keywordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_search_keywordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_search_keywordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Product_search_keywordUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Product_search_keywordUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_search_keywordScalarWhereInput[] | undefined;
}
