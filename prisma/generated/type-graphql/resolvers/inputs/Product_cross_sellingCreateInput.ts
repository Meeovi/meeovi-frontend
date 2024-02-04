import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_cross_sellingInput } from "../inputs/ProductCreateNestedOneWithoutProduct_cross_sellingInput";
import { Product_cross_selling_assigned_productsCreateNestedManyWithoutProduct_cross_sellingInput } from "../inputs/Product_cross_selling_assigned_productsCreateNestedManyWithoutProduct_cross_sellingInput";
import { Product_cross_selling_translationCreateNestedManyWithoutProduct_cross_sellingInput } from "../inputs/Product_cross_selling_translationCreateNestedManyWithoutProduct_cross_sellingInput";
import { Product_streamCreateNestedOneWithoutProduct_cross_sellingInput } from "../inputs/Product_streamCreateNestedOneWithoutProduct_cross_sellingInput";

@TypeGraphQL.InputType("Product_cross_sellingCreateInput", {})
export class Product_cross_sellingCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sort_by!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sort_direction!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  limit?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_cross_sellingInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_cross_sellingInput;

  @TypeGraphQL.Field(_type => Product_streamCreateNestedOneWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  product_stream?: Product_streamCreateNestedOneWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsCreateNestedManyWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  product_cross_selling_assigned_products?: Product_cross_selling_assigned_productsCreateNestedManyWithoutProduct_cross_sellingInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationCreateNestedManyWithoutProduct_cross_sellingInput, {
    nullable: true
  })
  product_cross_selling_translation?: Product_cross_selling_translationCreateNestedManyWithoutProduct_cross_sellingInput | undefined;
}
