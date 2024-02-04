import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput";
import { CategoryUpdateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput } from "../inputs/CategoryUpdateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput", {})
export class CategoryUpsertWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
