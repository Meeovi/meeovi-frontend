import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutOther_category_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateOrConnectWithoutOther_category_category_parent_id_parent_version_idTocategoryInput";
import { CategoryCreateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutOther_category_category_parent_id_parent_version_idTocategoryInput", {})
export class CategoryCreateNestedOneWithoutOther_category_category_parent_id_parent_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutOther_category_category_parent_id_parent_version_idTocategoryInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutOther_category_category_parent_id_parent_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
