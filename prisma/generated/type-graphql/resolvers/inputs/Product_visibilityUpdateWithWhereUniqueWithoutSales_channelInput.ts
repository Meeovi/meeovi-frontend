import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityUpdateWithoutSales_channelInput } from "../inputs/Product_visibilityUpdateWithoutSales_channelInput";
import { Product_visibilityWhereUniqueInput } from "../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.InputType("Product_visibilityUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class Product_visibilityUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Product_visibilityWhereUniqueInput, {
    nullable: false
  })
  where!: Product_visibilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_visibilityUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Product_visibilityUpdateWithoutSales_channelInput;
}
