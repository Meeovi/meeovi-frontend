import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutCategory_tagInput } from "../inputs/CategoryCreateNestedOneWithoutCategory_tagInput";

@TypeGraphQL.InputType("Category_tagCreateWithoutTagInput", {})
export class Category_tagCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutCategory_tagInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutCategory_tagInput;
}
