import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateOneRequiredWithoutCategory_tagNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutCategory_tagNestedInput";
import { TagUpdateOneRequiredWithoutCategory_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutCategory_tagNestedInput";

@TypeGraphQL.InputType("Category_tagUpdateInput", {})
export class Category_tagUpdateInput {
  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutCategory_tagNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutCategory_tagNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutCategory_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutCategory_tagNestedInput | undefined;
}
