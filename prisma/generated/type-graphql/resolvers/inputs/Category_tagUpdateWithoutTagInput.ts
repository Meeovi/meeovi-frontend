import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateOneRequiredWithoutCategory_tagNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutCategory_tagNestedInput";

@TypeGraphQL.InputType("Category_tagUpdateWithoutTagInput", {})
export class Category_tagUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutCategory_tagNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutCategory_tagNestedInput | undefined;
}
