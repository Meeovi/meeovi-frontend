import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutCategory_tagInput } from "../inputs/TagCreateNestedOneWithoutCategory_tagInput";

@TypeGraphQL.InputType("Category_tagCreateWithoutCategoryInput", {})
export class Category_tagCreateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutCategory_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutCategory_tagInput;
}
