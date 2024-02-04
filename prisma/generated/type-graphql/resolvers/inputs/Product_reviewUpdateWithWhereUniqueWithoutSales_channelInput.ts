import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewUpdateWithoutSales_channelInput } from "../inputs/Product_reviewUpdateWithoutSales_channelInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class Product_reviewUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Product_reviewWhereUniqueInput, {
    nullable: false
  })
  where!: Product_reviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_reviewUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Product_reviewUpdateWithoutSales_channelInput;
}
