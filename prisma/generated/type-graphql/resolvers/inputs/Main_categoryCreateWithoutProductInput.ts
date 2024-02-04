import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutMain_categoryInput } from "../inputs/CategoryCreateNestedOneWithoutMain_categoryInput";
import { Sales_channelCreateNestedOneWithoutMain_categoryInput } from "../inputs/Sales_channelCreateNestedOneWithoutMain_categoryInput";

@TypeGraphQL.InputType("Main_categoryCreateWithoutProductInput", {})
export class Main_categoryCreateWithoutProductInput {
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

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutMain_categoryInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutMain_categoryInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutMain_categoryInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutMain_categoryInput;
}
