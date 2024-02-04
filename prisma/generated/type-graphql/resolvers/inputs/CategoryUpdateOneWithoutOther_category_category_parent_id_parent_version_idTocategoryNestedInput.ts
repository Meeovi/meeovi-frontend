import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutOther_category_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateOrConnectWithoutOther_category_category_parent_id_parent_version_idTocategoryInput";
import { CategoryCreateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput";
import { CategoryUpdateToOneWithWhereWithoutOther_category_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutOther_category_category_parent_id_parent_version_idTocategoryInput";
import { CategoryUpsertWithoutOther_category_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryUpsertWithoutOther_category_category_parent_id_parent_version_idTocategoryInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneWithoutOther_category_category_parent_id_parent_version_idTocategoryNestedInput", {})
export class CategoryUpdateOneWithoutOther_category_category_parent_id_parent_version_idTocategoryNestedInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutOther_category_category_parent_id_parent_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutOther_category_category_parent_id_parent_version_idTocategoryInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutOther_category_category_parent_id_parent_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutOther_category_category_parent_id_parent_version_idTocategoryInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutOther_category_category_parent_id_parent_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  disconnect?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  delete?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutOther_category_category_parent_id_parent_version_idTocategoryInput, {
    nullable: true
  })
  update?: CategoryUpdateToOneWithWhereWithoutOther_category_category_parent_id_parent_version_idTocategoryInput | undefined;
}
