import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManySales_channelInputEnvelope } from "../inputs/Product_reviewCreateManySales_channelInputEnvelope";
import { Product_reviewCreateOrConnectWithoutSales_channelInput } from "../inputs/Product_reviewCreateOrConnectWithoutSales_channelInput";
import { Product_reviewCreateWithoutSales_channelInput } from "../inputs/Product_reviewCreateWithoutSales_channelInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewCreateNestedManyWithoutSales_channelInput", {})
export class Product_reviewCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Product_reviewCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Product_reviewCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Product_reviewCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Product_reviewCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_reviewWhereUniqueInput[] | undefined;
}
