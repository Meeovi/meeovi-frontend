import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutProduct_reviewInput } from "../inputs/CustomerCreateNestedOneWithoutProduct_reviewInput";
import { ProductCreateNestedOneWithoutProduct_reviewInput } from "../inputs/ProductCreateNestedOneWithoutProduct_reviewInput";
import { Sales_channelCreateNestedOneWithoutProduct_reviewInput } from "../inputs/Sales_channelCreateNestedOneWithoutProduct_reviewInput";

@TypeGraphQL.InputType("Product_reviewCreateWithoutLanguageInput", {})
export class Product_reviewCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_user?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  points?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutProduct_reviewInput, {
    nullable: true
  })
  customer?: CustomerCreateNestedOneWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_reviewInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_reviewInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutProduct_reviewInput, {
    nullable: true
  })
  sales_channel?: Sales_channelCreateNestedOneWithoutProduct_reviewInput | undefined;
}
