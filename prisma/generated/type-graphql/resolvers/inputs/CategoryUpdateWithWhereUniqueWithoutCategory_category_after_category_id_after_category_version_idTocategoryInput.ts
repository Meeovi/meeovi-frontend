import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutCategory_category_after_category_id_after_category_version_idTocategoryInput } from "../inputs/CategoryUpdateWithoutCategory_category_after_category_id_after_category_version_idTocategoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateWithWhereUniqueWithoutCategory_category_after_category_id_after_category_version_idTocategoryInput", {})
export class CategoryUpdateWithWhereUniqueWithoutCategory_category_after_category_id_after_category_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutCategory_category_after_category_id_after_category_version_idTocategoryInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutCategory_category_after_category_id_after_category_version_idTocategoryInput;
}
