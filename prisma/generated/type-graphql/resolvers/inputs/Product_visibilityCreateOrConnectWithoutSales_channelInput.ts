import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityCreateWithoutSales_channelInput } from "../inputs/Product_visibilityCreateWithoutSales_channelInput";
import { Product_visibilityWhereUniqueInput } from "../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.InputType("Product_visibilityCreateOrConnectWithoutSales_channelInput", {})
export class Product_visibilityCreateOrConnectWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Product_visibilityWhereUniqueInput, {
    nullable: false
  })
  where!: Product_visibilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_visibilityCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Product_visibilityCreateWithoutSales_channelInput;
}
