import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedManyWithoutProduct_feature_setInput } from "../inputs/ProductCreateNestedManyWithoutProduct_feature_setInput";
import { Product_feature_set_translationCreateNestedManyWithoutProduct_feature_setInput } from "../inputs/Product_feature_set_translationCreateNestedManyWithoutProduct_feature_setInput";

@TypeGraphQL.InputType("Product_feature_setCreateInput", {})
export class Product_feature_setCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  features?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutProduct_feature_setInput, {
    nullable: true
  })
  product?: ProductCreateNestedManyWithoutProduct_feature_setInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationCreateNestedManyWithoutProduct_feature_setInput, {
    nullable: true
  })
  product_feature_set_translation?: Product_feature_set_translationCreateNestedManyWithoutProduct_feature_setInput | undefined;
}
