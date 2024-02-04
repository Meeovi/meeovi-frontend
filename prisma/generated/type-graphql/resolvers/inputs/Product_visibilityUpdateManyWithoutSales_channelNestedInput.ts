import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityCreateManySales_channelInputEnvelope } from "../inputs/Product_visibilityCreateManySales_channelInputEnvelope";
import { Product_visibilityCreateOrConnectWithoutSales_channelInput } from "../inputs/Product_visibilityCreateOrConnectWithoutSales_channelInput";
import { Product_visibilityCreateWithoutSales_channelInput } from "../inputs/Product_visibilityCreateWithoutSales_channelInput";
import { Product_visibilityScalarWhereInput } from "../inputs/Product_visibilityScalarWhereInput";
import { Product_visibilityUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Product_visibilityUpdateManyWithWhereWithoutSales_channelInput";
import { Product_visibilityUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Product_visibilityUpdateWithWhereUniqueWithoutSales_channelInput";
import { Product_visibilityUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Product_visibilityUpsertWithWhereUniqueWithoutSales_channelInput";
import { Product_visibilityWhereUniqueInput } from "../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.InputType("Product_visibilityUpdateManyWithoutSales_channelNestedInput", {})
export class Product_visibilityUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Product_visibilityCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Product_visibilityCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Product_visibilityCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Product_visibilityUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Product_visibilityCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereUniqueInput], {
    nullable: true
  })
  set?: Product_visibilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_visibilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_visibilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_visibilityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Product_visibilityUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Product_visibilityUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_visibilityScalarWhereInput[] | undefined;
}
