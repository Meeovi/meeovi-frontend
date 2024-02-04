import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyCategory_category_parent_id_parent_version_idTocategoryInputEnvelope } from "../inputs/CategoryCreateManyCategory_category_parent_id_parent_version_idTocategoryInputEnvelope";
import { CategoryCreateOrConnectWithoutCategory_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateOrConnectWithoutCategory_category_parent_id_parent_version_idTocategoryInput";
import { CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedManyWithoutCategory_category_parent_id_parent_version_idTocategoryInput", {})
export class CategoryCreateNestedManyWithoutCategory_category_parent_id_parent_version_idTocategoryInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutCategory_category_parent_id_parent_version_idTocategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutCategory_category_parent_id_parent_version_idTocategoryInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategory_category_parent_id_parent_version_idTocategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyCategory_category_parent_id_parent_version_idTocategoryInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyCategory_category_parent_id_parent_version_idTocategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;
}
