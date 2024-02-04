import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutProduct_tagInput } from "../inputs/TagCreateNestedOneWithoutProduct_tagInput";

@TypeGraphQL.InputType("Product_tagCreateWithoutProductInput", {})
export class Product_tagCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutProduct_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutProduct_tagInput;
}
