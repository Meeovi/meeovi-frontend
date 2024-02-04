import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyMutationInput } from "../inputs/CategoryUpdateManyMutationInput";

@TypeGraphQL.InputType("CategoryUpdateManyWithWhereWithoutCategory_category_parent_id_parent_version_idTocategoryInput", {})
export class CategoryUpdateManyWithWhereWithoutCategory_category_parent_id_parent_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryScalarWhereInput, {
    nullable: false
  })
  where!: CategoryScalarWhereInput;

  @TypeGraphQL.Field(_type => CategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: CategoryUpdateManyMutationInput;
}
