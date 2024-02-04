import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingCreateManyProduct_streamInputEnvelope } from "../inputs/Product_cross_sellingCreateManyProduct_streamInputEnvelope";
import { Product_cross_sellingCreateOrConnectWithoutProduct_streamInput } from "../inputs/Product_cross_sellingCreateOrConnectWithoutProduct_streamInput";
import { Product_cross_sellingCreateWithoutProduct_streamInput } from "../inputs/Product_cross_sellingCreateWithoutProduct_streamInput";
import { Product_cross_sellingScalarWhereInput } from "../inputs/Product_cross_sellingScalarWhereInput";
import { Product_cross_sellingUpdateManyWithWhereWithoutProduct_streamInput } from "../inputs/Product_cross_sellingUpdateManyWithWhereWithoutProduct_streamInput";
import { Product_cross_sellingUpdateWithWhereUniqueWithoutProduct_streamInput } from "../inputs/Product_cross_sellingUpdateWithWhereUniqueWithoutProduct_streamInput";
import { Product_cross_sellingUpsertWithWhereUniqueWithoutProduct_streamInput } from "../inputs/Product_cross_sellingUpsertWithWhereUniqueWithoutProduct_streamInput";
import { Product_cross_sellingWhereUniqueInput } from "../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_sellingUpdateManyWithoutProduct_streamNestedInput", {})
export class Product_cross_sellingUpdateManyWithoutProduct_streamNestedInput {
  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: Product_cross_sellingCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: Product_cross_sellingCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingUpsertWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  upsert?: Product_cross_sellingUpsertWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: Product_cross_sellingCreateManyProduct_streamInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Product_cross_sellingUpdateWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  update?: Product_cross_sellingUpdateWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingUpdateManyWithWhereWithoutProduct_streamInput], {
    nullable: true
  })
  updateMany?: Product_cross_sellingUpdateManyWithWhereWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_sellingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_cross_sellingScalarWhereInput[] | undefined;
}
