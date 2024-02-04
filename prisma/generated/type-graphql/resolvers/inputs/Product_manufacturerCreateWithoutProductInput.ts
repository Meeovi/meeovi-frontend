import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateNestedOneWithoutProduct_manufacturerInput } from "../inputs/MediaCreateNestedOneWithoutProduct_manufacturerInput";
import { Product_manufacturer_translationCreateNestedManyWithoutProduct_manufacturerInput } from "../inputs/Product_manufacturer_translationCreateNestedManyWithoutProduct_manufacturerInput";

@TypeGraphQL.InputType("Product_manufacturerCreateWithoutProductInput", {})
export class Product_manufacturerCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutProduct_manufacturerInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutProduct_manufacturerInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationCreateNestedManyWithoutProduct_manufacturerInput, {
    nullable: true
  })
  product_manufacturer_translation?: Product_manufacturer_translationCreateNestedManyWithoutProduct_manufacturerInput | undefined;
}
