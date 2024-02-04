import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutCategory_category_parent_id_parent_version_idTocategoryInput", {})
export class CategoryCreateOrConnectWithoutCategory_category_parent_id_parent_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput;
}
