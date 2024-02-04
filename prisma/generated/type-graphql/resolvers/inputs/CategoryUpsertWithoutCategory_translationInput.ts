import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutCategory_translationInput } from "../inputs/CategoryCreateWithoutCategory_translationInput";
import { CategoryUpdateWithoutCategory_translationInput } from "../inputs/CategoryUpdateWithoutCategory_translationInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutCategory_translationInput", {})
export class CategoryUpsertWithoutCategory_translationInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutCategory_translationInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutCategory_translationInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategory_translationInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutCategory_translationInput;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
