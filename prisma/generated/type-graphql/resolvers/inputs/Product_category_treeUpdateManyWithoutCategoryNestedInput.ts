import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeCreateManyCategoryInputEnvelope } from "../inputs/Product_category_treeCreateManyCategoryInputEnvelope";
import { Product_category_treeCreateOrConnectWithoutCategoryInput } from "../inputs/Product_category_treeCreateOrConnectWithoutCategoryInput";
import { Product_category_treeCreateWithoutCategoryInput } from "../inputs/Product_category_treeCreateWithoutCategoryInput";
import { Product_category_treeScalarWhereInput } from "../inputs/Product_category_treeScalarWhereInput";
import { Product_category_treeUpdateManyWithWhereWithoutCategoryInput } from "../inputs/Product_category_treeUpdateManyWithWhereWithoutCategoryInput";
import { Product_category_treeUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/Product_category_treeUpdateWithWhereUniqueWithoutCategoryInput";
import { Product_category_treeUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/Product_category_treeUpsertWithWhereUniqueWithoutCategoryInput";
import { Product_category_treeWhereUniqueInput } from "../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.InputType("Product_category_treeUpdateManyWithoutCategoryNestedInput", {})
export class Product_category_treeUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => [Product_category_treeCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: Product_category_treeCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: Product_category_treeCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: Product_category_treeUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: Product_category_treeCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereUniqueInput], {
    nullable: true
  })
  set?: Product_category_treeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_category_treeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_category_treeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_category_treeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: Product_category_treeUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: Product_category_treeUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_category_treeScalarWhereInput[] | undefined;
}
