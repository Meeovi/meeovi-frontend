import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordCreateManyProductInputEnvelope } from "../inputs/Product_search_keywordCreateManyProductInputEnvelope";
import { Product_search_keywordCreateOrConnectWithoutProductInput } from "../inputs/Product_search_keywordCreateOrConnectWithoutProductInput";
import { Product_search_keywordCreateWithoutProductInput } from "../inputs/Product_search_keywordCreateWithoutProductInput";
import { Product_search_keywordScalarWhereInput } from "../inputs/Product_search_keywordScalarWhereInput";
import { Product_search_keywordUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_search_keywordUpdateManyWithWhereWithoutProductInput";
import { Product_search_keywordUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_search_keywordUpdateWithWhereUniqueWithoutProductInput";
import { Product_search_keywordUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_search_keywordUpsertWithWhereUniqueWithoutProductInput";
import { Product_search_keywordWhereUniqueInput } from "../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.InputType("Product_search_keywordUpdateManyWithoutProductNestedInput", {})
export class Product_search_keywordUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_search_keywordCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_search_keywordCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_search_keywordCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_search_keywordUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_search_keywordCreateManyProductInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Product_search_keywordUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_search_keywordUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_search_keywordUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_search_keywordScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_search_keywordScalarWhereInput[] | undefined;
}
