import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_priceInput } from "../inputs/ProductCreateNestedOneWithoutProduct_priceInput";

@TypeGraphQL.InputType("Product_priceCreateWithoutRuleInput", {})
export class Product_priceCreateWithoutRuleInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity_start!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  quantity_end?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_priceInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_priceInput;
}
