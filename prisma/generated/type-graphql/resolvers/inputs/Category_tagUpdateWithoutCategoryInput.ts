import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutCategory_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutCategory_tagNestedInput";

@TypeGraphQL.InputType("Category_tagUpdateWithoutCategoryInput", {})
export class Category_tagUpdateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutCategory_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutCategory_tagNestedInput | undefined;
}
