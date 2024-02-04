import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingCreateManyProductInputEnvelope } from "../inputs/Product_cross_sellingCreateManyProductInputEnvelope";
import { Product_cross_sellingCreateOrConnectWithoutProductInput } from "../inputs/Product_cross_sellingCreateOrConnectWithoutProductInput";
import { Product_cross_sellingCreateWithoutProductInput } from "../inputs/Product_cross_sellingCreateWithoutProductInput";
import { Product_cross_sellingScalarWhereInput } from "../inputs/Product_cross_sellingScalarWhereInput";
import { Product_cross_sellingUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_cross_sellingUpdateManyWithWhereWithoutProductInput";
import { Product_cross_sellingUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_cross_sellingUpdateWithWhereUniqueWithoutProductInput";
import { Product_cross_sellingUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_cross_sellingUpsertWithWhereUniqueWithoutProductInput";
import { Product_cross_sellingWhereUniqueInput } from "../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_sellingUpdateManyWithoutProductNestedInput", {})
export class Product_cross_sellingUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_cross_sellingCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_cross_sellingCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_cross_sellingUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_cross_sellingCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingWhereUniqueInput], {
    nullable: true
  })
  set?: Product_cross_sellingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_cross_sellingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_cross_sellingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_cross_sellingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_cross_sellingUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_cross_sellingUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_cross_sellingScalarWhereInput[] | undefined;
}
