import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_visibilityInput } from "../inputs/ProductCreateNestedOneWithoutProduct_visibilityInput";
import { Sales_channelCreateNestedOneWithoutProduct_visibilityInput } from "../inputs/Sales_channelCreateNestedOneWithoutProduct_visibilityInput";

@TypeGraphQL.InputType("Product_visibilityCreateInput", {})
export class Product_visibilityCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  visibility!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_visibilityInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_visibilityInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutProduct_visibilityInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutProduct_visibilityInput;
}
