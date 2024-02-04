import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterCreateNestedManyWithoutProduct_stream_filterInput } from "../inputs/Product_stream_filterCreateNestedManyWithoutProduct_stream_filterInput";
import { Product_stream_filterCreateNestedOneWithoutOther_product_stream_filterInput } from "../inputs/Product_stream_filterCreateNestedOneWithoutOther_product_stream_filterInput";

@TypeGraphQL.InputType("Product_stream_filterCreateWithoutProduct_streamInput", {})
export class Product_stream_filterCreateWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  field?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  operator?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parameters?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

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

  @TypeGraphQL.Field(_type => Product_stream_filterCreateNestedOneWithoutOther_product_stream_filterInput, {
    nullable: true
  })
  product_stream_filter?: Product_stream_filterCreateNestedOneWithoutOther_product_stream_filterInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterCreateNestedManyWithoutProduct_stream_filterInput, {
    nullable: true
  })
  other_product_stream_filter?: Product_stream_filterCreateNestedManyWithoutProduct_stream_filterInput | undefined;
}
