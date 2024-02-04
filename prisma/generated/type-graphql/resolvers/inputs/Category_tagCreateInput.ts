import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutCategory_tagInput } from "../inputs/CategoryCreateNestedOneWithoutCategory_tagInput";
import { TagCreateNestedOneWithoutCategory_tagInput } from "../inputs/TagCreateNestedOneWithoutCategory_tagInput";

@TypeGraphQL.InputType("Category_tagCreateInput", {})
export class Category_tagCreateInput {
  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutCategory_tagInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutCategory_tagInput;

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutCategory_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutCategory_tagInput;
}
