import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityCreateManySales_channelInputEnvelope } from "../inputs/Product_visibilityCreateManySales_channelInputEnvelope";
import { Product_visibilityCreateOrConnectWithoutSales_channelInput } from "../inputs/Product_visibilityCreateOrConnectWithoutSales_channelInput";
import { Product_visibilityCreateWithoutSales_channelInput } from "../inputs/Product_visibilityCreateWithoutSales_channelInput";
import { Product_visibilityWhereUniqueInput } from "../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.InputType("Product_visibilityCreateNestedManyWithoutSales_channelInput", {})
export class Product_visibilityCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Product_visibilityCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Product_visibilityCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Product_visibilityCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Product_visibilityCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_visibilityWhereUniqueInput[] | undefined;
}
