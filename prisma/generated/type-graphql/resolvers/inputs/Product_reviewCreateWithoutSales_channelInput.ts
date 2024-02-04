import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutProduct_reviewInput } from "../inputs/CustomerCreateNestedOneWithoutProduct_reviewInput";
import { LanguageCreateNestedOneWithoutProduct_reviewInput } from "../inputs/LanguageCreateNestedOneWithoutProduct_reviewInput";
import { ProductCreateNestedOneWithoutProduct_reviewInput } from "../inputs/ProductCreateNestedOneWithoutProduct_reviewInput";

@TypeGraphQL.InputType("Product_reviewCreateWithoutSales_channelInput", {})
export class Product_reviewCreateWithoutSales_channelInput {
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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutProduct_reviewInput, {
    nullable: true
  })
  language?: LanguageCreateNestedOneWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_reviewInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_reviewInput;
}
