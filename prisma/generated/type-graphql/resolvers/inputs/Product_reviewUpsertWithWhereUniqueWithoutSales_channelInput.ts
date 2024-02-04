import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateWithoutSales_channelInput } from "../inputs/Product_reviewCreateWithoutSales_channelInput";
import { Product_reviewUpdateWithoutSales_channelInput } from "../inputs/Product_reviewUpdateWithoutSales_channelInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewUpsertWithWhereUniqueWithoutSales_channelInput", {})
export class Product_reviewUpsertWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_reviewUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: Product_reviewUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Product_reviewCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Product_reviewCreateWithoutSales_channelInput;
}
