import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutMain_categoryInput } from "../inputs/ProductCreateNestedOneWithoutMain_categoryInput";
import { Sales_channelCreateNestedOneWithoutMain_categoryInput } from "../inputs/Sales_channelCreateNestedOneWithoutMain_categoryInput";

@TypeGraphQL.InputType("Main_categoryCreateWithoutCategoryInput", {})
export class Main_categoryCreateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutMain_categoryInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutMain_categoryInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutMain_categoryInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutMain_categoryInput;
}
