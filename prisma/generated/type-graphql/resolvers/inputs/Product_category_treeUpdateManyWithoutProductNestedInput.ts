import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeCreateManyProductInputEnvelope } from "../inputs/Product_category_treeCreateManyProductInputEnvelope";
import { Product_category_treeCreateOrConnectWithoutProductInput } from "../inputs/Product_category_treeCreateOrConnectWithoutProductInput";
import { Product_category_treeCreateWithoutProductInput } from "../inputs/Product_category_treeCreateWithoutProductInput";
import { Product_category_treeScalarWhereInput } from "../inputs/Product_category_treeScalarWhereInput";
import { Product_category_treeUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_category_treeUpdateManyWithWhereWithoutProductInput";
import { Product_category_treeUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_category_treeUpdateWithWhereUniqueWithoutProductInput";
import { Product_category_treeUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_category_treeUpsertWithWhereUniqueWithoutProductInput";
import { Product_category_treeWhereUniqueInput } from "../inputs/Product_category_treeWhereUniqueInput";

@TypeGraphQL.InputType("Product_category_treeUpdateManyWithoutProductNestedInput", {})
export class Product_category_treeUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_category_treeCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_category_treeCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_category_treeCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_category_treeUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_category_treeCreateManyProductInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Product_category_treeUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_category_treeUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_category_treeUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_category_treeScalarWhereInput[] | undefined;
}
