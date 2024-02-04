import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateNestedOneWithoutProduct_manufacturerInput } from "../inputs/MediaCreateNestedOneWithoutProduct_manufacturerInput";
import { ProductCreateNestedManyWithoutProduct_manufacturerInput } from "../inputs/ProductCreateNestedManyWithoutProduct_manufacturerInput";

@TypeGraphQL.InputType("Product_manufacturerCreateWithoutProduct_manufacturer_translationInput", {})
export class Product_manufacturerCreateWithoutProduct_manufacturer_translationInput {
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

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutProduct_manufacturerInput, {
    nullable: true
  })
  product?: ProductCreateNestedManyWithoutProduct_manufacturerInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutProduct_manufacturerInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutProduct_manufacturerInput | undefined;
}
