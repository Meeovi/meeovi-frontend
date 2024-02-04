import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityCreateWithoutSales_channelInput } from "../inputs/Product_visibilityCreateWithoutSales_channelInput";
import { Product_visibilityUpdateWithoutSales_channelInput } from "../inputs/Product_visibilityUpdateWithoutSales_channelInput";
import { Product_visibilityWhereUniqueInput } from "../inputs/Product_visibilityWhereUniqueInput";

@TypeGraphQL.InputType("Product_visibilityUpsertWithWhereUniqueWithoutSales_channelInput", {})
export class Product_visibilityUpsertWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Product_visibilityWhereUniqueInput, {
    nullable: false
  })
  where!: Product_visibilityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_visibilityUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: Product_visibilityUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Product_visibilityCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Product_visibilityCreateWithoutSales_channelInput;
}
