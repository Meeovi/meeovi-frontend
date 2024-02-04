import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput", {})
export class CategoryCreateOrConnectWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput;
}
