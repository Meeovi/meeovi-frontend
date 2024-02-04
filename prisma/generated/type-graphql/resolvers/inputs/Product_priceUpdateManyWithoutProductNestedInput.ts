import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceCreateManyProductInputEnvelope } from "../inputs/Product_priceCreateManyProductInputEnvelope";
import { Product_priceCreateOrConnectWithoutProductInput } from "../inputs/Product_priceCreateOrConnectWithoutProductInput";
import { Product_priceCreateWithoutProductInput } from "../inputs/Product_priceCreateWithoutProductInput";
import { Product_priceScalarWhereInput } from "../inputs/Product_priceScalarWhereInput";
import { Product_priceUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_priceUpdateManyWithWhereWithoutProductInput";
import { Product_priceUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_priceUpdateWithWhereUniqueWithoutProductInput";
import { Product_priceUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_priceUpsertWithWhereUniqueWithoutProductInput";
import { Product_priceWhereUniqueInput } from "../inputs/Product_priceWhereUniqueInput";

@TypeGraphQL.InputType("Product_priceUpdateManyWithoutProductNestedInput", {})
export class Product_priceUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_priceCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_priceCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_priceCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_priceUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_priceCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_priceCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereUniqueInput], {
    nullable: true
  })
  set?: Product_priceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_priceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_priceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_priceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_priceUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_priceUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_priceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_priceScalarWhereInput[] | undefined;
}
