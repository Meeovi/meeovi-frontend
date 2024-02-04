import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutCategory_translationInput } from "../inputs/CategoryUpdateWithoutCategory_translationInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutCategory_translationInput", {})
export class CategoryUpdateToOneWithWhereWithoutCategory_translationInput {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutCategory_translationInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutCategory_translationInput;
}
