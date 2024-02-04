import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManySales_channelInputEnvelope } from "../inputs/Product_reviewCreateManySales_channelInputEnvelope";
import { Product_reviewCreateOrConnectWithoutSales_channelInput } from "../inputs/Product_reviewCreateOrConnectWithoutSales_channelInput";
import { Product_reviewCreateWithoutSales_channelInput } from "../inputs/Product_reviewCreateWithoutSales_channelInput";
import { Product_reviewScalarWhereInput } from "../inputs/Product_reviewScalarWhereInput";
import { Product_reviewUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Product_reviewUpdateManyWithWhereWithoutSales_channelInput";
import { Product_reviewUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Product_reviewUpdateWithWhereUniqueWithoutSales_channelInput";
import { Product_reviewUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Product_reviewUpsertWithWhereUniqueWithoutSales_channelInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewUpdateManyWithoutSales_channelNestedInput", {})
export class Product_reviewUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Product_reviewCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Product_reviewCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Product_reviewCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Product_reviewUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Product_reviewCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  set?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Product_reviewUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Product_reviewUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_reviewScalarWhereInput[] | undefined;
}
