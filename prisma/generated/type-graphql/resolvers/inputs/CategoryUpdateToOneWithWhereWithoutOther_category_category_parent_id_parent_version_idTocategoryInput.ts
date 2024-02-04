import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryUpdateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutOther_category_category_parent_id_parent_version_idTocategoryInput", {})
export class CategoryUpdateToOneWithWhereWithoutOther_category_category_parent_id_parent_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput;
}
